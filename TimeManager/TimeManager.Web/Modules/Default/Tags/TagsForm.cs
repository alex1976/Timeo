
namespace TimeManager.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Tags")]
    [BasedOnRow(typeof(Entities.TagsRow), CheckNames = true)]
    public class TagsForm
    {
        public String Description { get; set; }
    }
}