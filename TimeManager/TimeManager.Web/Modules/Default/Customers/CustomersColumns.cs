
namespace TimeManager.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Customers")]
    [BasedOnRow(typeof(Entities.CustomersRow), CheckNames = true)]
    public class CustomersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CustomerId { get; set; }
        [EditLink, Width(50)]
        public String MnemonicId { get; set; }
        [EditLink, Width(250)]
        public String Description { get; set; }
        public String FiscalCode { get; set; }
        public String VatCode { get; set; }
        public String Address { get; set; }
        public String Location { get; set; }
        public String PhoneNumber1 { get; set; }
        public String PhoneNumber2 { get; set; }
        public String PhoneNumber3 { get; set; }
        public String EMail { get; set; }
    }
}