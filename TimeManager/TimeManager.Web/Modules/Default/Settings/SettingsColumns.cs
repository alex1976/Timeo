
namespace TimeManager.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Settings")]
    [BasedOnRow(typeof(Entities.SettingsRow), CheckNames = true)]
    public class SettingsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 SettingsId { get; set; }
        [EditLink]
        public String Description { get; set; }
        //public String CompanyDescription { get; set; }
        //public String CompanyAddress { get; set; }
        //public String CompanyLocation { get; set; }
        //public String CompanyPhoneNumber1 { get; set; }
        //public String CompanyPhoneNumber2 { get; set; }
        //public String CompanyPhoneNumber3 { get; set; }
        //public String CompanyMail { get; set; }
        //public String Attachments { get; set; }
        //public DateTime ClosingDate { get; set; }
    }
}