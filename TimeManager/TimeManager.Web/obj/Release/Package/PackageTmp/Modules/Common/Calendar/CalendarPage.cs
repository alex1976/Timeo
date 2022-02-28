
namespace TimeManager.Common.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Web.Mvc;
    using TimeManager.Default.Entities;
    using TimeManager.Administration.Entities;
    using System.Collections.Generic;
    using System.Linq;

    [RoutePrefix("Calendar"), Route("{action=index}")]
    public class CalendarController : Controller
    {
        [Authorize, HttpGet, Route("~/Calendar")]
        public ActionResult Index()
        {
            //var cachedModel = TwoLevelCache.GetLocalStoreOnly("CalendarPageModel", TimeSpan.FromMinutes(1),
            //     ActivitiesRow.Fields.GenerationKey, () =>
            //     {
            //         var model = new CalendarPageModel();
            //         //var ir = ActivitiesRow.Fields;



            //         return model;

            //     });


            return View(MVC.Views.Common.Calendar.CalendarIndex, new CalendarPageModel());

            //var model = new CalendarPageModel();
            //return View(model);
        }

        public ActionResult LoadEvents()
        {
            // Initialization.  
            JsonResult result = new JsonResult();

            try
            {
                // Loading.  
                var eventList = GetEvents();
                var rows = eventList.ToList();
                
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

        public List<CalendarPageModel> GetEvents()
        {
            var viewModel = new CalendarPageModel();
            var events = new List<CalendarPageModel>();

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

                //lettura attività
                foreach (var ts in connection.Query<ActivitiesRow>(new SqlQuery()
                    .Select("MnemonicId")
                    .Select("ActivityId")
                    .Select("Description")
                    .Select("StartDate")
                    .Select("EndDate")
                    .Select("MapUrl")
                    .Select("PriorityId")
                    .Select("CustomerId")
                    .Select("EmployeeId")
                    .Select("TimesheetStateTypeId")
                    .From(t)
                    .Where(Expression)))
                {
                    if (ts.StartDate != null)
                    {
                        start = (DateTime)ts.StartDate;
                        end = (DateTime)ts.EndDate;

                        String title = ts.Description;
                        String description = ts.Description;
                        String url = "/Default/Activities#edit/" + ts.ActivityId;

                        if (ts.CustomerId != null)
                        {
                            var customer = connection.Query<CustomersRow>(new SqlQuery().Select("Description").Select("Address").From(CustomersRow.Fields).Where("CustomerId=" + ts.CustomerId));
                            title = customer.ElementAt(0).Description + " - " + title;
                            description = customer.ElementAt(0).Description + " - " + description;

                            //if (customer.ElementAt(0).Address != null)
                            //    url = customer.ElementAt(0).Address;
                        }

                        if (ts.EmployeeId != null)
                        {
                            var employee = connection.Query<EmployeesRow>(new SqlQuery().Select("Description").From(EmployeesRow.Fields).Where("EmployeeId=" + ts.EmployeeId));
                            title = employee.ElementAt(0).Description + " - " + title;
                            description = employee.ElementAt(0).Description + " - " + description;
                        }

                        String color = "blue";
                        if (ts.PriorityId != null && ts.PriorityId == 1)
                            color = "red";
                        if (ts.PriorityId != null && ts.PriorityId == 2)
                            color = "orange";
                        if (ts.PriorityId != null && ts.PriorityId == 3)
                            color = "green";

                        //if (ts.MapUrl != null)
                        //    url = ts.MapUrl;

                        events.Add(new CalendarPageModel()
                        {
                            id = ts.MnemonicId,
                            title = title,
                            description = description,
                            //start = start.ToString(),
                            start = start.ToString("yyyy-MM-ddTHH:mm:ss"),
                            //end = end.ToString()
                            end = end.ToString("yyyy-MM-ddTHH:mm:ss"),
                            url = url,
                            color = color
                            //allDay = false
                        });

                    }

                    index++;
                }
            }

            return events;
        }
    }
}