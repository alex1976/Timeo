
namespace TimeManager.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Settings]")]
    [DisplayName("Settings"), InstanceName("Settings")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SettingsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Settings Id"), Identity]
        public Int32? SettingsId
        {
            get { return Fields.SettingsId[this]; }
            set { Fields.SettingsId[this] = value; }
        }

        [DisplayName("Description"), Size(250), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Company Description"), Size(250)]
        public String CompanyDescription
        {
            get { return Fields.CompanyDescription[this]; }
            set { Fields.CompanyDescription[this] = value; }
        }

        [DisplayName("Company Address"), Size(250)]
        public String CompanyAddress
        {
            get { return Fields.CompanyAddress[this]; }
            set { Fields.CompanyAddress[this] = value; }
        }

        [DisplayName("Company Location"), Size(250)]
        public String CompanyLocation
        {
            get { return Fields.CompanyLocation[this]; }
            set { Fields.CompanyLocation[this] = value; }
        }

        [DisplayName("Company Phone Number1"), Size(250)]
        public String CompanyPhoneNumber1
        {
            get { return Fields.CompanyPhoneNumber1[this]; }
            set { Fields.CompanyPhoneNumber1[this] = value; }
        }

        [DisplayName("Company Phone Number2"), Size(250)]
        public String CompanyPhoneNumber2
        {
            get { return Fields.CompanyPhoneNumber2[this]; }
            set { Fields.CompanyPhoneNumber2[this] = value; }
        }

        [DisplayName("Company Phone Number3"), Size(250)]
        public String CompanyPhoneNumber3
        {
            get { return Fields.CompanyPhoneNumber3[this]; }
            set { Fields.CompanyPhoneNumber3[this] = value; }
        }

        [DisplayName("Company Mail"), Size(250)]
        public String CompanyMail
        {
            get { return Fields.CompanyMail[this]; }
            set { Fields.CompanyMail[this] = value; }
        }

        [DisplayName("Attachments"), FileUploadEditor(FilenameFormat = "Settings/Attachments/~")]
        public String Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
        }

        [DisplayName("Closing Date")]
        public DateTime? ClosingDate
        {
            get { return Fields.ClosingDate[this]; }
            set { Fields.ClosingDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SettingsId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SettingsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SettingsId;
            public StringField Description;
            public StringField CompanyDescription;
            public StringField CompanyAddress;
            public StringField CompanyLocation;
            public StringField CompanyPhoneNumber1;
            public StringField CompanyPhoneNumber2;
            public StringField CompanyPhoneNumber3;
            public StringField CompanyMail;
            public StringField Attachments;
            public DateTimeField ClosingDate;
        }
    }
}
