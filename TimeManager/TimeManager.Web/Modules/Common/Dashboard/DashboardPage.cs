
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

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(1),
                 TimesheetsRow.Fields.GenerationKey, () =>
                 {
                     var model = new DashboardPageModel();
                     var ir = TimesheetsRow.Fields;
                     model.ActivityCount = 0;
                     model.ActivityCalendarCount = 0;

                     using (var connection = SqlConnections.NewFor<ActivitiesRow>())
                     {
                         var act = ActivitiesRow.Fields;
                         
                         //recupero dati utente corrente
                         string UserId = Authorization.UserId;
                         string Username = Authorization.Username;
                         String Expression = "";
                         DateTime StartDate = Convert.ToDateTime("01/01/" + DateTime.Now.Year);
                         bool Admin = Authorization.HasPermission("Administration:Security");

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

                         //IDictionary<int, int> timesheetData;
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
                                .From(act)
                                .Where(Expression)))
                         {
                             
                             model.ActivityCount++;

                             if (ts.StartDate != null)
                             {
                                 model.ActivityCalendarCount++;
                             }
                         }

                     }

                     using (var connection = SqlConnections.NewFor<TimesheetsRow>())
                     {
                         //Conteggio dipendenti
                         //model.EmployeeCount = connection.Count<EmployeesRow>();

                         model.CurrentEmployeeHoursCount = 0;
                         model.EmployeeCount = connection.Count<EmployeesRow>();
                         model.CustomerCount = connection.Count<CustomersRow>();
                         //model.ActivityCount = connection.Count<ActivitiesRow>();
                         //model.TotalHoursReference = 3;
                         //model.TotalHoursCount = 1;
                         model.ReportCount = 2;
                         model.EquipmentUsageCount = connection.Count<EquipmentUsagesRow>();
                         model.EquipmentCount = connection.Count<EquipmentsRow>();

                         //variabili generali
                         decimal gen = 0;
                         decimal feb = 0;
                         decimal Mar = 0;
                         decimal Apr = 0;
                         decimal Mag = 0;
                         decimal Giu = 0;
                         decimal Lug = 0;
                         decimal Ago = 0;
                         decimal Set = 0;
                         decimal Ott = 0;
                         decimal Nov = 0;
                         decimal Dic = 0;
                         decimal TotalHours = 0;
                         string HoursForMonthExpression = "[";
                         var t = TimesheetsRow.Fields;

                         //recupero dati utente corrente
                         string UserId = Authorization.UserId;
                         string Username = Authorization.Username;
                         String Expression = "";
                         DateTime StartingDate = Convert.ToDateTime("01/01/" + DateTime.Now.Year);
                         bool Admin = Authorization.HasPermission("Administration:Security");

                         if (!Admin)
                         {

                             //Filtro su utente corrente
                             var u = EmployeesRow.Fields;
                             IDictionary<int, int> employeeNames;
                             using (var connectionEmployees = SqlConnections.NewFor<EmployeesRow>())
                                 employeeNames = connectionEmployees.Query(new SqlQuery()
                                         .From(u)
                                         .Select(u.EmployeeId)
                                         .Select(u.UserId)
                                         .Where(u.UserDisplayName == Username))
                                         .ToDictionary(x => (int)x.EmployeeId, x => (int)x.UserId);

                             if (employeeNames.Count() != 0)
                                 Expression = "EmployeeId = " + employeeNames.Keys.ElementAt(0) + " And Date >= '" + StartingDate.ToShortDateString() + "'";
                             else
                                 Expression = "Date >= '" + StartingDate.ToShortDateString() + "'";
                         }
                         else
                         {
                             Expression = "Date >= '" + StartingDate.ToShortDateString() + "'";
                         }

                         //IDictionary<int, int> timesheetData;
                         foreach (var ts in connection.Query<TimesheetsRow>(new SqlQuery().Select("Date").Select("Ordinary").From(t).Where(Expression)))
                         {

                             DateTime dt = (DateTime)ts.Date;
                             if (ts.Ordinary != null)
                             {
                                 if (dt.Month == 1)
                                     gen += (decimal)ts.Ordinary / 60;
                                 if (dt.Month == 2)
                                     feb += (decimal)ts.Ordinary / 60;
                                 if (dt.Month == 3)
                                     Mar += (decimal)ts.Ordinary / 60;
                                 if (dt.Month == 4)
                                     Apr += (decimal)ts.Ordinary / 60;
                                 if (dt.Month == 5)
                                     Mag += (decimal)ts.Ordinary / 60;
                                 if (dt.Month == 6)
                                     Giu += (decimal)ts.Ordinary / 60;
                                 if (dt.Month == 7)
                                     Lug += (decimal)ts.Ordinary / 60;
                                 if (dt.Month == 8)
                                     Ago += (decimal)ts.Ordinary / 60;
                                 if (dt.Month == 9)
                                     Set += (decimal)ts.Ordinary / 60;
                                 if (dt.Month == 10)
                                     Ott += (decimal)ts.Ordinary / 60;
                                 if (dt.Month == 11)
                                     Nov += (decimal)ts.Ordinary / 60;
                                 if (dt.Month == 12)
                                     Dic += (decimal)ts.Ordinary / 60;

                                 TotalHours += (decimal)ts.Ordinary / 60;
                             }
                         }

                         HoursForMonthExpression = HoursForMonthExpression + (int)gen + "," + (int)feb + "," + (int)Mar + "," + (int)Apr + "," + (int)Mag + "," + (int)Giu + "," + (int)Lug + "," + (int)Ago + "," + (int)Set + "," + (int)Ott + "," + (int)Nov + "," + (int)Dic + "]";
                         model.HoursForMonth = HoursForMonthExpression;
                         model.CurrentEmployeeHoursCount = (int)TotalHours;

                         //var u = UserRow.Fields;
                         //IDictionary<int, string> userDisplayNames;
                         //using (var connection = SqlConnections.NewFor<UserRow>())
                         //    userDisplayNames = connection.Query(new SqlQuery()
                         //            .From(u)
                         //            .Select(u.UserId)
                         //            .Select(u.DisplayName)
                         //            .Where(u.UserId.In(userIdList)))
                         //        .ToDictionary(x => (int)(x.UserId ?? x.USERID), x => (string)x.DisplayName);

                         //var employeeCount = (int)connection.Count<EmployeesRow>();
                         //model.TotalHoursReference = employeeCount * 8;

                         //model.MeetingCount = connection.Count<MeetingRow>();
                         //var totalOrders = model.OpenOrders + closedOrders;
                         //model.ClosedOrderPercent = (int)Math.Round(totalOrders == 0 ? 100 :
                         //    ((double)closedOrders / (double)totalOrders * 100));
                         //model.PersonCount = connection.Count<ContactRow>();
                         //model.ProductCount = connection.Count<ProductRow>();
                         //model.GuidelineCount = connection.Count<IssuesRow>(ir.IssuesTypeId == 3);
                     }
                     return model;

                 });

            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
            //return View(MVC.Views.Common.Dashboard.DashboardIndex, new DashboardPageModel());
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
                    .OrderBy("StartDate",true)))
                {
                    if (ts.StartDate != null && index<=5)
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

                        events.Add(new LastActivityTableModel()
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
