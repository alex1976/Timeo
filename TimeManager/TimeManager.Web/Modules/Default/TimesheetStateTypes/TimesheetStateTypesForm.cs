
namespace TimeManager.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.TimesheetStateTypes")]
    [BasedOnRow(typeof(Entities.TimesheetStateTypesRow), CheckNames = true)]
    public class TimesheetStateTypesForm
    {
        public String Description { get; set; }
    }
}