
namespace TimeManager.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Priorities")]
    [BasedOnRow(typeof(Entities.PrioritiesRow), CheckNames = true)]
    public class PrioritiesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PriorityId { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}