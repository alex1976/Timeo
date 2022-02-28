
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

    [ColumnsScript("Default.Equipments")]
    [BasedOnRow(typeof(Entities.EquipmentsRow), CheckNames = true)]
    public class EquipmentsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 EquipmentId { get; set; }
        [EditLink, Width(80)]
        public String MnemonicId { get; set; }
        [EditLink, Width(300)]
        public String Description { get; set; }
        [Width(300)]
        public String Note { get; set; }
        [QuickFilter(CssClass = "hidden-xs"), LookupEditor(typeof(EquipmentTypesRow))]
        public String EquipmentTypeDescription { get; set; }
        //public Int32 EquipmentTypeId { get; set; }
        public String UnitOfMeasureDescription { get; set; }
        //public Int32 UnitOfMeasureId { get; set; }
        [AlignRight()]
        public Decimal EarnRate { get; set; }
        [AlignRight()]
        public Decimal CostRate { get; set; }
    }
}