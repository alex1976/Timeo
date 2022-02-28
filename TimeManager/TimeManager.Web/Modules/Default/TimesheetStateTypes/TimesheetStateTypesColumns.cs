
namespace TimeManager.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.TimesheetStateTypes")]
    [BasedOnRow(typeof(Entities.TimesheetStateTypesRow), CheckNames = true)]
    public class TimesheetStateTypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TimesheetStateTypeId { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}