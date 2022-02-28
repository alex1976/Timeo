
namespace TimeManager.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Tags")]
    [BasedOnRow(typeof(Entities.TagsRow), CheckNames = true)]
    public class TagsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TagId { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}