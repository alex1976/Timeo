
namespace TimeManager.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Employees")]
    [BasedOnRow(typeof(Entities.EmployeesRow), CheckNames = true)]
    public class EmployeesForm
    {
        [Category("DATI dipendente")]
        public String MnemonicId { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
        public String Address { get; set; }
        public String Location { get; set; }
        public String PhoneNumber1 { get; set; }
        public String PhoneNumber2 { get; set; }
        public String PhoneNumber3 { get; set; }
        [EmailEditor()]
        public String EMail { get; set; }
        public Int32 UserId { get; set; }
    }
}