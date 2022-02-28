
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

    [ColumnsScript("Default.EquipmentUsages")]
    [BasedOnRow(typeof(Entities.EquipmentUsagesRow), CheckNames = true)]
    public class EquipmentUsagesColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 EquipmentUsageId { get; set; }
        [EditLink, QuickFilter(CssClass = "hidden-xs")]
        public DateTime Date { get; set; }
        [EditLink, Width(200), QuickFilter(true, CssClass = "hidden-xs"), LookupEditor(typeof(EquipmentsRow)), QuickFilterOption("multiple", true)]
        public String EquipmentDescription { get; set; }
        [Width(200), QuickFilter, LookupEditor(typeof(CustomersRow)), QuickFilterOption("multiple", true)]
        public String CustomerDescription { get; set; }
        [Width(200), QuickFilter(true, CssClass = "hidden-xs"), LookupEditor(typeof(ActivitiesRow)), QuickFilterOption("multiple", true)]
        public String ActivityDescription { get; set; }
        //public Int32 EquipmentId { get; set; }
        //public Int32 ContractId { get; set; }
        //public Int32 ActivityId { get; set; }
        //public String EquipmentUnitOfMeasureDescription { get; set; }
        [AlignRight()]
        public Decimal Quantity { get; set; }
        [AlignRight()]
        public Decimal CostRate { get; set; }
        [AlignRight()]
        public Decimal Amount { get; set; }
        [AlignRight()]
        public Decimal Distance { get; set; }
        public String Description { get; set; }
        
        [EditLink, Visible(false)]
        public String MnemonicId { get; set; }
    }
}