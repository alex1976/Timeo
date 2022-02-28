
namespace TimeManager.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Customers]")]
    [DisplayName("Customers"), InstanceName("Customers")]
    [ReadPermission(PermissionKeys.Customers.Read)]
    [ModifyPermission(PermissionKeys.Customers.Management)]
    [DeletePermission(PermissionKeys.Customers.Delete)]
    [LookupScript("Default.Customers")]
    public sealed class CustomersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Customer Id"), Identity]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Mnemonic Id"), Size(50), QuickSearch]
        public String MnemonicId
        {
            get { return Fields.MnemonicId[this]; }
            set { Fields.MnemonicId[this] = value; }
        }

        [DisplayName("Description"), Size(250), NotNull]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Fiscal Code"), Size(50)]
        public String FiscalCode
        {
            get { return Fields.FiscalCode[this]; }
            set { Fields.FiscalCode[this] = value; }
        }

        [DisplayName("Vat Code"), Size(50)]
        public String VatCode
        {
            get { return Fields.VatCode[this]; }
            set { Fields.VatCode[this] = value; }
        }

        [DisplayName("Address"), Size(250)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Location"), Size(250)]
        public String Location
        {
            get { return Fields.Location[this]; }
            set { Fields.Location[this] = value; }
        }

        [DisplayName("Phone Number1"), Size(50)]
        public String PhoneNumber1
        {
            get { return Fields.PhoneNumber1[this]; }
            set { Fields.PhoneNumber1[this] = value; }
        }

        [DisplayName("Phone Number2"), Size(50)]
        public String PhoneNumber2
        {
            get { return Fields.PhoneNumber2[this]; }
            set { Fields.PhoneNumber2[this] = value; }
        }

        [DisplayName("Phone Number3"), Size(50)]
        public String PhoneNumber3
        {
            get { return Fields.PhoneNumber3[this]; }
            set { Fields.PhoneNumber3[this] = value; }
        }

        [DisplayName("E Mail"), Size(100)]
        public String EMail
        {
            get { return Fields.EMail[this]; }
            set { Fields.EMail[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CustomerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CustomerId;
            public StringField MnemonicId;
            public StringField Description;
            public StringField FiscalCode;
            public StringField VatCode;
            public StringField Address;
            public StringField Location;
            public StringField PhoneNumber1;
            public StringField PhoneNumber2;
            public StringField PhoneNumber3;
            public StringField EMail;
        }
    }
}
