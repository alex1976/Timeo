
namespace TimeManager.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Customers")]
    [BasedOnRow(typeof(Entities.CustomersRow), CheckNames = true)]
    public class CustomersForm
    {
        [Category("DATI cliente")]
        public String MnemonicId { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
        public String FiscalCode { get; set; }
        public String VatCode { get; set; }
        public String Address { get; set; }
        public String Location { get; set; }
        public String PhoneNumber1 { get; set; }
        public String PhoneNumber2 { get; set; }
        public String PhoneNumber3 { get; set; }
        [EmailEditor()]
        public String EMail { get; set; }
    }
}