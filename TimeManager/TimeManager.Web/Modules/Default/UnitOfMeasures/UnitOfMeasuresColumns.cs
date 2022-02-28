
namespace TimeManager.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.UnitOfMeasures")]
    [BasedOnRow(typeof(Entities.UnitOfMeasuresRow), CheckNames = true)]
    public class UnitOfMeasuresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UnitOfMeasureId { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}