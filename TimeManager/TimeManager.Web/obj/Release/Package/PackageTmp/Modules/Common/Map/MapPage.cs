
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
    
    [RoutePrefix("Map"), Route("{action=index}")]
    public class MapController : Controller
    {
        [Authorize, HttpGet, Route("~/Map")]
        public ActionResult Index()
        {
            var activities = new List<MapPageModel>();
            //activities.Add(new MapPageModel() { Title = "Paris", Lat = 48.855901, Lng = 2.349272 });
            //activities.Add(new MapPageModel() { Title = "Berlin", Lat = 52.520413, Lng = 13.402794 });
            //activities.Add(new MapPageModel() { Title = "Rome", Lat = 41.907074, Lng = 12.498474 });

            using (var connection = SqlConnections.NewFor<ActivitiesRow>())
            {

                //lista attività
                var t = ActivitiesRow.Fields;
                //String Expression = "";

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

                DateTime start = DateTime.Now;
                DateTime end = DateTime.Now;
                String title = "";
                String description = "";
                String mapurl = "";
                string latitude = "41.907074";
                string longitude = "12.498474";

                foreach (var ts in connection.Query<ActivitiesRow>(new SqlQuery()
                    .Select("Description")
                    .Select("StartDate")
                    .Select("EndDate")
                    .Select("MnemonicId")
                    .Select("PriorityId")
                    .Select("MapUrl")
                    .Select("CustomerId")
                    .Select("EmployeeId")
                    .From(t)
                    .Where(Expression)
                    .OrderBy("StartDate", true)))
                {
                    if (ts.StartDate != null && ts.MapUrl != null)
                    {
                        start = (DateTime)ts.StartDate;
                        end = (DateTime)ts.EndDate;
                        title = ts.Description;
                        description = ts.Description;
                        mapurl = ts.MapUrl;

                        if (ts.CustomerId != null)
                        {
                            var customer = connection.Query<CustomersRow>(new SqlQuery().Select("Description").From(CustomersRow.Fields).Where("CustomerId=" + ts.CustomerId));
                            title = customer.ElementAt(0).Description + " - " + title;
                            description = customer.ElementAt(0).Description + " - " + description;
                        }

                        if (ts.EmployeeId != null)
                        {
                            var employee = connection.Query<EmployeesRow>(new SqlQuery().Select("Description").From(EmployeesRow.Fields).Where("EmployeeId=" + ts.EmployeeId));
                            title = employee.ElementAt(0).Description + " - " + title;
                            description = employee.ElementAt(0).Description + " - " + description;
                        }

                        description += " - ";
                        description += Convert.ToString(start);
                        description += " - ";
                        description += Convert.ToString(end);

                        String mapUrl = mapurl;
                        var url = mapUrl.Split('@');
                        var at = url[1].Split('z');
                        var zero = at[0].Split(',');
                        var lat = zero[0];
                        var lon = zero[1];
                        latitude = lat;
                        longitude = lon;

                        activities.Add(new MapPageModel() { Title = title, Lat = latitude, Lng = longitude, Url = mapurl, Description = description});
                    }
                }

            }
            
            return View(MVC.Views.Common.Map.MapIndex, activities);
            //return View(MVC.Views.Common.Map.MapIndex, cachedModel);
            //return View(MVC.Views.Common.Map.MapIndex, new MapPageModel());
        }

        [HttpPost]
        public JsonResult GetAnswer(string question)
        {
            int index = _rnd.Next(_db.Count);
            var answer = _db[index];
            return Json(answer);
        }

        private static Random _rnd = new Random();

        private static List<string> _db = new List<string> { "Yes", "No", "Definitely, yes", "I don't know", "Looks like, yes" };

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

        public List<LastActivityTableModel> GetEvents()
        {
            var viewModel = new LastActivityTableModel();
            var events = new List<LastActivityTableModel>();

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

                        //viewModel.code = index.ToString();
                        //viewModel.description = ts.Description;
                        //viewModel.start = start.ToString("yyyy-MM-dd hh:mm");
                        //viewModel.end = end.ToString("yyyy-MM-dd hh:mm");
                        //events.Add(viewModel);

                        events.Add(new LastActivityTableModel()
                        {
                            code = ts.MnemonicId,
                            description = ts.Description,
                            priority = ts.PriorityId.ToString(),
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
