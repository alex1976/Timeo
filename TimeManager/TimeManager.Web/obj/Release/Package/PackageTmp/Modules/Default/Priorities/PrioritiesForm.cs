
namespace TimeManager.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Priorities")]
    [BasedOnRow(typeof(Entities.PrioritiesRow), CheckNames = true)]
    public class PrioritiesForm
    {
        public String Description { get; set; }
    }
}