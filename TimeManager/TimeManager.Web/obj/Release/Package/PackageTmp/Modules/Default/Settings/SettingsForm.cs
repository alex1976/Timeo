
namespace TimeManager.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Settings")]
    [BasedOnRow(typeof(Entities.SettingsRow), CheckNames = true)]
    public class SettingsForm
    {
        [Category("Impostazioni azienda")]
        public String Description { get; set; }
        public String CompanyDescription { get; set; }
        public String CompanyAddress { get; set; }
        public String CompanyLocation { get; set; }
        public String CompanyPhoneNumber1 { get; set; }
        public String CompanyPhoneNumber2 { get; set; }
        public String CompanyPhoneNumber3 { get; set; }
        [EmailEditor]
        public String CompanyMail { get; set; }
        public String Attachments { get; set; }

        [Category("Data chiusura registrazioni")]
        public DateTime ClosingDate { get; set; }
    }
}