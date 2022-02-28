
namespace TimeManager.Common
{
    public class DashboardPageModel
    {
        public int CurrentEmployeeHoursCount { get; set; }
        public int EmployeeCount { get; set; }
        public int CustomerCount { get; set; }
        public int ReportCount { get; set; }
        public int EquipmentUsageCount { get; set; }
        public int EquipmentCount { get; set; }
        public string HoursForMonth { get; set; }
        public string HoursForMonthOvertime { get; set; }
        public int ActivityCount { get; set; }
        public int ActivityCalendarCount { get; set; }
    }

    public class LastActivityTableModel
    {
        public string code { get; set; }
        public string description { get; set; }
        public string priority { get; set; }
        public string start { get; set; }

        public string end { get; set; }
    }
}