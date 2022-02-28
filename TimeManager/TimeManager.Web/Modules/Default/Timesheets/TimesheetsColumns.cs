
namespace TimeManager.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using TimeManager.Default.Entities;

    [ColumnsScript("Default.Timesheets")]
    [BasedOnRow(typeof(Entities.TimesheetsRow), CheckNames = true)]
    public class TimesheetsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 TimesheetId { get; set; }

        [EditLink, QuickFilter(CssClass = "hidden-xs")]
        public DateTime Date { get; set; }
        [EditLink, Width(200), QuickFilter(true, CssClass = "hidden-xs"), LookupEditor(typeof(EmployeesRow)), QuickFilterOption("multiple", true)]
        public String EmployeeDescription { get; set; }
        [Width(200), QuickFilter, LookupEditor(typeof(CustomersRow)), QuickFilterOption("multiple", true)]
        public String CustomerDescription { get; set; }
        [Width(200), QuickFilter(true, CssClass = "hidden-xs"), LookupEditor(typeof(ActivitiesRow)), QuickFilterOption("multiple", true)]
        public String ActivityDescription { get; set; }
       
        [TimeEditor(), AlignRight()]
        public Decimal Ordinary { get; set; }
        [TimeEditor(), AlignRight()]
        public Decimal Overtime { get; set; }
        [TimeEditor(), AlignRight()]
        public Decimal NotWorking1 { get; set; }
        
        [Width(300)]
        public String Description { get; set; }
      
    }
}