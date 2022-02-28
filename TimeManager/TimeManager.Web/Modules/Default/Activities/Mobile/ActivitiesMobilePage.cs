
namespace TimeManager.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using Serenity.Data;
    using System;
    using System.Web.Mvc;
    using System.Collections.Generic;
    using System.Linq;
    using TimeManager.Default.Entities;
    using TimeManager.Modules.Default.Activities;

    [RoutePrefix("Default/ActivitiesMobile"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ActivitiesRow))]
    public class ActivitiesMobileController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Activities/Mobile/ActivitiesMobileIndex.cshtml");
        }

        public ActionResult LoadActivityTable()
        {
            // Initialization.  
            JsonResult result = new JsonResult();

            try
            {
                // Loading.  
                var eventList = GetEvents();
                var rows = eventList.ToArray();

                // Processing.  
                result = this.Json(rows, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                // Info  
                Console.Write(ex);
            }

            return result;
        }

        public List<ActivitiesMobilePageModel> GetEvents()
        {
            var viewModel = new ActivitiesMobilePageModel();
            var events = new List<ActivitiesMobilePageModel>();

            DateTime start = DateTime.Now;
            DateTime end = DateTime.Now;

            using (var connection = SqlConnections.NewFor<ActivitiesRow>())
            {

                //lista attività
                var t = ActivitiesRow.Fields;
                //String Expression = "";
                int index = 1;

                //recupero dati utente corrente
                string UserId = Authorization.UserId;
                string Username = Authorization.Username;
                bool Admin = Authorization.HasPermission("Administration:Security");

                //recupero dipendente collegato ad utente corrente e impostazione del filtro
                String Expression = "";
                if (!Admin)
                {
                    var u = EmployeesRow.Fields;
                    IDictionary<int, int> employeeNames;
                    using (var connectionEmp = SqlConnections.NewFor<EmployeesRow>())
                        employeeNames = connectionEmp.Query(new SqlQuery()
                                .From(u)
                                .Select(u.EmployeeId)
                                .Select(u.UserId)
                                .Where(u.UserId == UserId))
                                .ToDictionary(x => (int)x.EmployeeId, x => (int)x.UserId);

                    //solo utente corrente o null
                    if (employeeNames != null)
                        Expression = "(T0.[EmployeeId] = " + employeeNames.Keys.ElementAt(0) + " OR T0.[EmployeeId] is null)";

                    //escludo attività in stato "fatto"
                    Expression += " AND (T0.[TimesheetStateTypeId] is null OR T0.[TimesheetStateTypeId] <> 3)";

                }
                else
                {
                    //dal calendario escludo sempre le attività già fatte
                    Expression = "T0.[TimesheetStateTypeId] is null OR T0.[TimesheetStateTypeId] <> 3";
                }

                foreach (var ts in connection.Query<ActivitiesRow>(new SqlQuery()
                    .Select("Description")
                    .Select("StartDate")
                    .Select("EndDate")
                    .Select("MnemonicId")
                    .Select("PriorityId")
                    .From(t)
                    .Where(Expression)
                    .OrderBy("StartDate", true)))
                {
                    if (ts.StartDate != null && index <= 5)
                    {
                        start = (DateTime)ts.StartDate;
                        end = (DateTime)ts.EndDate;

                        String title;
                        if (ts.CustomerDescription != null)
                            title = ts.CustomerDescription + " " + ts.Description;
                        else
                            title = ts.Description;

                        String color = "blue";
                        if (ts.PriorityId != null && ts.PriorityId == 1)
                            color = "red";
                        if (ts.PriorityId != null && ts.PriorityId == 3)
                            color = "green";

                        String priority = "0";
                        if (ts.PriorityId.ToString() != null)
                            priority = ts.PriorityId.ToString();
                        //viewModel.code = index.ToString();
                        //viewModel.description = ts.Description;
                        //viewModel.start = start.ToString("yyyy-MM-dd hh:mm");
                        //viewModel.end = end.ToString("yyyy-MM-dd hh:mm");
                        //events.Add(viewModel);

                        events.Add(new ActivitiesMobilePageModel()
                        {
                            code = ts.MnemonicId,
                            description = ts.Description,
                            priority = priority,
                            //start = start.ToString(),
                            start = start.ToString("yyyy-MM-dd hh:mm"),
                            //end = end.ToString()
                            end = end.ToString("yyyy-MM-dd hh:mm")
                        });

                    }

                    index++;
                }
            }

            return events;
        }
    }

}


