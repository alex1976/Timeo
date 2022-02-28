
namespace TimeManager.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.UnitOfMeasures")]
    [BasedOnRow(typeof(Entities.UnitOfMeasuresRow), CheckNames = true)]
    public class UnitOfMeasuresForm
    {
        public String Description { get; set; }
    }
}