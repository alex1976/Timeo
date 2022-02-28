
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

    [ColumnsScript("Default.Activities")]
    [BasedOnRow(typeof(Entities.ActivitiesRow), CheckNames = true)]
    public class ActivitiesColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 ActivityId { get; set; }
        [Width(50), EditLink]
        public String MnemonicId { get; set; }
        [Width(300), EditLink]
        public String Description { get; set; }
        //public String Note { get; set; }
        [QuickFilter(CssClass = "hidden-xs")]
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        [QuickFilter(CssClass = "hidden-xs"), LookupEditor(typeof(EmployeesRow)), QuickFilterOption("multiple", true)]
        public String EmployeeDescription { get; set; }
        [QuickFilter, LookupEditor(typeof(CustomersRow))]
        public String CustomerDescription { get; set; }
        [QuickFilter(CssClass = "hidden-xs"), LookupEditor(typeof(TagsRow)), QuickFilterOption("multiple", true)]
        public String TagDescription { get; set; }
        //[QuickFilter(CssClass = "hidden-xs"), LookupEditor(typeof(ContractsRow))]
        //public String ContractDescription { get; set; }
        //public String ContractMnemonicId { get; set; }
        //public Decimal EstimatedWork { get; set; }
        //public Decimal ActualWork { get; set; }
        //public Decimal RemainingWork { get; set; }
        //public String Attachments { get; set; }
        [Width(80)]
        public String PriorityDescription { get; set; }
        [Width(80)]
        public String TimesheetStateTypeDescription { get; set; }
        public Decimal EstimatedWork { get; set; }
        public Decimal ActualWork { get; set; }
        public Decimal RemainingWork { get; set; }
        //[QuickFilter, QuickFilterOption("multiple", true)]
        //public String Tags { get; set; }
        //public String ParentActivityDescription { get; set; }
    }
}