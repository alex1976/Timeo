
namespace TimeManager.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Timesheets")]
    [BasedOnRow(typeof(Entities.TimesheetsRow), CheckNames = true)]
    public class TimesheetsForm
    {
        [Category("Registrazione ore personale")]
        [DefaultValue("now"), DateEditor()]
        public DateTime Date { get; set; }
        public Int32 EmployeeId { get; set; }
        public Int32 CustomerId { get; set; }
        public Int32 ActivityId { get; set; }

        [TimeEditor(), AlignRight()]
        public Decimal Ordinary { get; set; }
        [TimeEditor(), AlignRight()]
        public Decimal Overtime { get; set; }
        [TimeEditor(), AlignRight()]
        public Decimal NotWorking1 { get; set; }
      
        [TextAreaEditor(Rows = 4)]
        [Placeholder("inserisci eventuali note per il rapportino ... ")]
        public String Description { get; set; }
    }
}