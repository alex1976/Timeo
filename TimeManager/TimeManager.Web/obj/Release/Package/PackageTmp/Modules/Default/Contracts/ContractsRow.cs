
namespace TimeManager.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Contracts]")]
    [DisplayName("Contracts"), InstanceName("Contracts")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Contracts")]
    public sealed class ContractsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Contract Id"), Identity]
        public Int32? ContractId
        {
            get { return Fields.ContractId[this]; }
            set { Fields.ContractId[this] = value; }
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

        [DisplayName("Start Date")]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("End Date")]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Customer"), NotNull, ForeignKey("[dbo].[Customers]", "CustomerId"), LeftJoin("jCustomer"), TextualField("CustomerMnemonicId")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = false)]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Ordinary Earn Rate"), Size(28), Scale(14)]
        public Decimal? OrdinaryEarnRate
        {
            get { return Fields.OrdinaryEarnRate[this]; }
            set { Fields.OrdinaryEarnRate[this] = value; }
        }

        [DisplayName("Overtime Earn Rate"), Size(28), Scale(14)]
        public Decimal? OvertimeEarnRate
        {
            get { return Fields.OvertimeEarnRate[this]; }
            set { Fields.OvertimeEarnRate[this] = value; }
        }

        [DisplayName("Not Working1 Earn Rate"), Size(28), Scale(14)]
        public Decimal? NotWorking1EarnRate
        {
            get { return Fields.NotWorking1EarnRate[this]; }
            set { Fields.NotWorking1EarnRate[this] = value; }
        }

        [DisplayName("Not Working2 Earn Rate"), Size(28), Scale(14)]
        public Decimal? NotWorking2EarnRate
        {
            get { return Fields.NotWorking2EarnRate[this]; }
            set { Fields.NotWorking2EarnRate[this] = value; }
        }

        [DisplayName("Customer Mnemonic Id"), Expression("jCustomer.[MnemonicId]")]
        public String CustomerMnemonicId
        {
            get { return Fields.CustomerMnemonicId[this]; }
            set { Fields.CustomerMnemonicId[this] = value; }
        }

        [DisplayName("Customer Description"), Expression("jCustomer.[Description]")]
        public String CustomerDescription
        {
            get { return Fields.CustomerDescription[this]; }
            set { Fields.CustomerDescription[this] = value; }
        }

        [DisplayName("Customer Fiscal Code"), Expression("jCustomer.[FiscalCode]")]
        public String CustomerFiscalCode
        {
            get { return Fields.CustomerFiscalCode[this]; }
            set { Fields.CustomerFiscalCode[this] = value; }
        }

        [DisplayName("Customer Vat Code"), Expression("jCustomer.[VatCode]")]
        public String CustomerVatCode
        {
            get { return Fields.CustomerVatCode[this]; }
            set { Fields.CustomerVatCode[this] = value; }
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public String CustomerAddress
        {
            get { return Fields.CustomerAddress[this]; }
            set { Fields.CustomerAddress[this] = value; }
        }

        [DisplayName("Customer Location"), Expression("jCustomer.[Location]")]
        public String CustomerLocation
        {
            get { return Fields.CustomerLocation[this]; }
            set { Fields.CustomerLocation[this] = value; }
        }

        [DisplayName("Customer Phone Number1"), Expression("jCustomer.[PhoneNumber1]")]
        public String CustomerPhoneNumber1
        {
            get { return Fields.CustomerPhoneNumber1[this]; }
            set { Fields.CustomerPhoneNumber1[this] = value; }
        }

        [DisplayName("Customer Phone Number2"), Expression("jCustomer.[PhoneNumber2]")]
        public String CustomerPhoneNumber2
        {
            get { return Fields.CustomerPhoneNumber2[this]; }
            set { Fields.CustomerPhoneNumber2[this] = value; }
        }

        [DisplayName("Customer Phone Number3"), Expression("jCustomer.[PhoneNumber3]")]
        public String CustomerPhoneNumber3
        {
            get { return Fields.CustomerPhoneNumber3[this]; }
            set { Fields.CustomerPhoneNumber3[this] = value; }
        }

        [DisplayName("Customer E Mail"), Expression("jCustomer.[EMail]")]
        public String CustomerEMail
        {
            get { return Fields.CustomerEMail[this]; }
            set { Fields.CustomerEMail[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ContractId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ContractsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ContractId;
            public StringField MnemonicId;
            public StringField Description;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public Int32Field CustomerId;
            public DecimalField OrdinaryEarnRate;
            public DecimalField OvertimeEarnRate;
            public DecimalField NotWorking1EarnRate;
            public DecimalField NotWorking2EarnRate;

            public StringField CustomerMnemonicId;
            public StringField CustomerDescription;
            public StringField CustomerFiscalCode;
            public StringField CustomerVatCode;
            public StringField CustomerAddress;
            public StringField CustomerLocation;
            public StringField CustomerPhoneNumber1;
            public StringField CustomerPhoneNumber2;
            public StringField CustomerPhoneNumber3;
            public StringField CustomerEMail;
        }
    }
}
