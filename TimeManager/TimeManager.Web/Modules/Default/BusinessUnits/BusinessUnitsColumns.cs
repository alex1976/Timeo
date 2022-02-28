
namespace TimeManager.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.BusinessUnits")]
    [BasedOnRow(typeof(Entities.BusinessUnitsRow), CheckNames = true)]
    public class BusinessUnitsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UnitId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String ParentUnitName { get; set; }
    }
}