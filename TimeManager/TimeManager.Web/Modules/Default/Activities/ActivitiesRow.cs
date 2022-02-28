
namespace TimeManager.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Activities]")]
    [DisplayName("Activities"), InstanceName("Activities")]
    [ReadPermission(PermissionKeys.Activities.Read)]
    [ModifyPermission(PermissionKeys.Activities.Management)]
    [DeletePermission(PermissionKeys.Activities.Delete)]
    [LookupScript("Default.Activities")]
    public sealed class ActivitiesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Activity Id"), Identity]
        public Int32? ActivityId
        {
            get { return Fields.ActivityId[this]; }
            set { Fields.ActivityId[this] = value; }
        }

        [DisplayName("Mnemonic Id"), Size(50), QuickSearch]
        public String MnemonicId
        {
            get { return Fields.MnemonicId[this]; }
            set { Fields.MnemonicId[this] = value; }
        }

        [DisplayName("Description"), Size(250), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Note"), Size(1000)]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("MapUrl"), Size(1000)]
        public String MapUrl
        {
            get { return Fields.MapUrl[this]; }
            set { Fields.MapUrl[this] = value; }
        }

        [DisplayName("Start Date"), QuickSearch, QuickFilter]
        [DateTimeKind(DateTimeKind.Unspecified), DateTimeEditor]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayName("End Date")]
        [DateTimeKind(DateTimeKind.Unspecified), DateTimeEditor]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Employee"), ForeignKey("[dbo].[Employees]", "EmployeeId"), LeftJoin("jEmployee"), TextualField("EmployeeDescription")]
        [LookupEditor(typeof(EmployeesRow), InplaceAdd = false), QuickSearch, QuickFilter]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Customer"), ForeignKey("[dbo].[Customers]", "CustomerId"), LeftJoin("jCustomer"), TextualField("CustomerDescription")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = false), QuickSearch, QuickFilter]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Contract"), ForeignKey("[dbo].[Contracts]", "ContractId"), LeftJoin("jContract"), TextualField("ContractDescription")]
        [LookupEditor(typeof(ContractsRow), InplaceAdd = false)]
        public Int32? ContractId
        {
            get { return Fields.ContractId[this]; }
            set { Fields.ContractId[this] = value; }
        }

        [DisplayName("Priority"), ForeignKey("[dbo].[Priorities]", "PriorityId"), LeftJoin("jPriority"), TextualField("PriorityId")]
        [LookupEditor(typeof(PrioritiesRow), InplaceAdd = false), QuickSearch, QuickFilter]
        public Int32? PriorityId
        {
            get { return Fields.PriorityId[this]; }
            set { Fields.PriorityId[this] = value; }
        }

        [DisplayName("TimesheetStateType"), ForeignKey("[dbo].[TimesheetStateTypes]", "TimesheetStateTypeId"), LeftJoin("jTimesheetStateType"), TextualField("TimesheetStateTypeId")]
        [LookupEditor(typeof(TimesheetStateTypesRow), InplaceAdd = false), QuickSearch, QuickFilter]
        public Int32? TimesheetStateTypeId
        {
            get { return Fields.TimesheetStateTypeId[this]; }
            set { Fields.TimesheetStateTypeId[this] = value; }
        }

        [DisplayName("Tag"), ForeignKey("[dbo].[Tags]", "TagId"), LeftJoin("jTag"), TextualField("TagDescription")]
        [LookupEditor(typeof(TagsRow), InplaceAdd = false), QuickSearch, QuickFilter]
        public Int32? TagId
        {
            get { return Fields.TagId[this]; }
            set { Fields.TagId[this] = value; }
        }

        [DisplayName("Estimated Work"), Size(28), Scale(14)]
        public Decimal? EstimatedWork
        {
            get { return Fields.EstimatedWork[this]; }
            set { Fields.EstimatedWork[this] = value; }
        }

        [DisplayName("Actual Work"), Size(28), Scale(14)]
        public Decimal? ActualWork
        {
            get { return Fields.ActualWork[this]; }
            set { Fields.ActualWork[this] = value; }
        }

        [DisplayName("Remaining Work"), Size(28), Scale(14)]
        public Decimal? RemainingWork
        {
            get { return Fields.RemainingWork[this]; }
            set { Fields.RemainingWork[this] = value; }
        }

        [DisplayName("Attachments"), MultipleFileUploadEditor(FilenameFormat = "Activities/Attachments/~")]
        public String Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
        }

        [DisplayName("Tags"), QuickSearch]
        public String Tags
        {
            get { return Fields.Tags[this]; }
            set { Fields.Tags[this] = value; }
        }

        [DisplayName("Parent Activity"), ForeignKey("[dbo].[Activities]", "ActivityId"), LeftJoin("jParentActivity"), TextualField("ParentActivityDescription")]
        [LookupEditor(typeof(ActivitiesRow), InplaceAdd = false)]
        public Int32? ParentActivityId
        {
            get { return Fields.ParentActivityId[this]; }
            set { Fields.ParentActivityId[this] = value; }
        }

        [DisplayName("Employee Mnemonic Id"), Expression("jEmployee.[MnemonicId]")]
        public String EmployeeMnemonicId
        {
            get { return Fields.EmployeeMnemonicId[this]; }
            set { Fields.EmployeeMnemonicId[this] = value; }
        }

        [DisplayName("Employee Description"), Expression("jEmployee.[Description]"), QuickSearch, QuickFilter]
        public String EmployeeDescription
        {
            get { return Fields.EmployeeDescription[this]; }
            set { Fields.EmployeeDescription[this] = value; }
        }

        [DisplayName("Employee Address"), Expression("jEmployee.[Address]")]
        public String EmployeeAddress
        {
            get { return Fields.EmployeeAddress[this]; }
            set { Fields.EmployeeAddress[this] = value; }
        }

        [DisplayName("Employee Location"), Expression("jEmployee.[Location]")]
        public String EmployeeLocation
        {
            get { return Fields.EmployeeLocation[this]; }
            set { Fields.EmployeeLocation[this] = value; }
        }

        [DisplayName("Employee Phone Number1"), Expression("jEmployee.[PhoneNumber1]")]
        public String EmployeePhoneNumber1
        {
            get { return Fields.EmployeePhoneNumber1[this]; }
            set { Fields.EmployeePhoneNumber1[this] = value; }
        }

        [DisplayName("Employee Phone Number2"), Expression("jEmployee.[PhoneNumber2]")]
        public String EmployeePhoneNumber2
        {
            get { return Fields.EmployeePhoneNumber2[this]; }
            set { Fields.EmployeePhoneNumber2[this] = value; }
        }

        [DisplayName("Employee Phone Number3"), Expression("jEmployee.[PhoneNumber3]")]
        public String EmployeePhoneNumber3
        {
            get { return Fields.EmployeePhoneNumber3[this]; }
            set { Fields.EmployeePhoneNumber3[this] = value; }
        }

        [DisplayName("Employee E Mail"), Expression("jEmployee.[EMail]")]
        public String EmployeeEMail
        {
            get { return Fields.EmployeeEMail[this]; }
            set { Fields.EmployeeEMail[this] = value; }
        }

        [DisplayName("Employee Ordinary Cost Rate"), Expression("jEmployee.[OrdinaryCostRate]")]
        public Decimal? EmployeeOrdinaryCostRate
        {
            get { return Fields.EmployeeOrdinaryCostRate[this]; }
            set { Fields.EmployeeOrdinaryCostRate[this] = value; }
        }

        [DisplayName("Employee Overtime Cost Rate"), Expression("jEmployee.[OvertimeCostRate]")]
        public Decimal? EmployeeOvertimeCostRate
        {
            get { return Fields.EmployeeOvertimeCostRate[this]; }
            set { Fields.EmployeeOvertimeCostRate[this] = value; }
        }

        [DisplayName("Employee Not Working1 Cost Rate"), Expression("jEmployee.[NotWorking1CostRate]")]
        public Decimal? EmployeeNotWorking1CostRate
        {
            get { return Fields.EmployeeNotWorking1CostRate[this]; }
            set { Fields.EmployeeNotWorking1CostRate[this] = value; }
        }

        [DisplayName("Employee Not Working2 Cost Rate"), Expression("jEmployee.[NotWorking2CostRate]")]
        public Decimal? EmployeeNotWorking2CostRate
        {
            get { return Fields.EmployeeNotWorking2CostRate[this]; }
            set { Fields.EmployeeNotWorking2CostRate[this] = value; }
        }

        [DisplayName("Employee User Id"), Expression("jEmployee.[UserId]")]
        public Int32? EmployeeUserId
        {
            get { return Fields.EmployeeUserId[this]; }
            set { Fields.EmployeeUserId[this] = value; }
        }

        [DisplayName("Customer Mnemonic Id"), Expression("jCustomer.[MnemonicId]")]
        public String CustomerMnemonicId
        {
            get { return Fields.CustomerMnemonicId[this]; }
            set { Fields.CustomerMnemonicId[this] = value; }
        }

        [DisplayName("Customer Description"), Expression("jCustomer.[Description]"), QuickSearch, QuickFilter]
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

        [DisplayName("Contract Mnemonic Id"), Expression("jContract.[MnemonicId]")]
        public String ContractMnemonicId
        {
            get { return Fields.ContractMnemonicId[this]; }
            set { Fields.ContractMnemonicId[this] = value; }
        }

        [DisplayName("Contract Description"), Expression("jContract.[Description]")]
        public String ContractDescription
        {
            get { return Fields.ContractDescription[this]; }
            set { Fields.ContractDescription[this] = value; }
        }

        [DisplayName("Contract Start Date"), Expression("jContract.[StartDate]")]
        public DateTime? ContractStartDate
        {
            get { return Fields.ContractStartDate[this]; }
            set { Fields.ContractStartDate[this] = value; }
        }

        [DisplayName("Contract End Date"), Expression("jContract.[EndDate]")]
        public DateTime? ContractEndDate
        {
            get { return Fields.ContractEndDate[this]; }
            set { Fields.ContractEndDate[this] = value; }
        }

        [DisplayName("Contract Customer Id"), Expression("jContract.[CustomerId]")]
        public Int32? ContractCustomerId
        {
            get { return Fields.ContractCustomerId[this]; }
            set { Fields.ContractCustomerId[this] = value; }
        }

        [DisplayName("Contract Ordinary Earn Rate"), Expression("jContract.[OrdinaryEarnRate]")]
        public Decimal? ContractOrdinaryEarnRate
        {
            get { return Fields.ContractOrdinaryEarnRate[this]; }
            set { Fields.ContractOrdinaryEarnRate[this] = value; }
        }

        [DisplayName("Contract Overtime Earn Rate"), Expression("jContract.[OvertimeEarnRate]")]
        public Decimal? ContractOvertimeEarnRate
        {
            get { return Fields.ContractOvertimeEarnRate[this]; }
            set { Fields.ContractOvertimeEarnRate[this] = value; }
        }

        [DisplayName("Contract Not Working1 Earn Rate"), Expression("jContract.[NotWorking1EarnRate]")]
        public Decimal? ContractNotWorking1EarnRate
        {
            get { return Fields.ContractNotWorking1EarnRate[this]; }
            set { Fields.ContractNotWorking1EarnRate[this] = value; }
        }

        [DisplayName("Contract Not Working2 Earn Rate"), Expression("jContract.[NotWorking2EarnRate]")]
        public Decimal? ContractNotWorking2EarnRate
        {
            get { return Fields.ContractNotWorking2EarnRate[this]; }
            set { Fields.ContractNotWorking2EarnRate[this] = value; }
        }

        [DisplayName("Parent Activity Description"), Expression("jParentActivity.[Description]")]
        public String ParentActivityDescription
        {
            get { return Fields.ParentActivityDescription[this]; }
            set { Fields.ParentActivityDescription[this] = value; }
        }

        [DisplayName("Priority Description"), Expression("jPriority.[Description]")]
        public String PriorityDescription
        {
            get { return Fields.PriorityDescription[this]; }
            set { Fields.PriorityDescription[this] = value; }
        }

        [DisplayName("Tag Description"), Expression("jTag.[Description]"), QuickSearch, QuickFilter]
        public String TagDescription
        {
            get { return Fields.TagDescription[this]; }
            set { Fields.TagDescription[this] = value; }
        }

        [DisplayName("StateType Description"), Expression("jTimesheetStateType.[Description]")]
        public String TimesheetStateTypeDescription
        {
            get { return Fields.TimesheetStateTypeDescription[this]; }
            set { Fields.TimesheetStateTypeDescription[this] = value; }
        }

        //[DisplayName("Parent Activity Id"), Expression("jParentActivity.[ParentActivityId]")]
        //public Int32? ParentActivityId
        //{
        //    get { return Fields.ParentActivityId[this]; }
        //    set { Fields.ParentActivityId[this] = value; }
        //}

        IIdField IIdRow.IdField
        {
            get { return Fields.ActivityId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ActivitiesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ActivityId;
            public StringField MnemonicId;
            public StringField Description;
            public StringField Note;
            public StringField MapUrl;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public Int32Field EmployeeId;
            public Int32Field CustomerId;
            public Int32Field ContractId;
            public Int32Field PriorityId;
            public Int32Field TimesheetStateTypeId;
            public Int32Field TagId;
            public DecimalField EstimatedWork;
            public DecimalField ActualWork;
            public DecimalField RemainingWork;
            public StringField Attachments;
            public StringField Tags;
            public Int32Field ParentActivityId;

            public StringField EmployeeMnemonicId;
            public StringField EmployeeDescription;
            public StringField EmployeeAddress;
            public StringField EmployeeLocation;
            public StringField EmployeePhoneNumber1;
            public StringField EmployeePhoneNumber2;
            public StringField EmployeePhoneNumber3;
            public StringField EmployeeEMail;
            public DecimalField EmployeeOrdinaryCostRate;
            public DecimalField EmployeeOvertimeCostRate;
            public DecimalField EmployeeNotWorking1CostRate;
            public DecimalField EmployeeNotWorking2CostRate;
            public Int32Field EmployeeUserId;

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

            public StringField ContractMnemonicId;
            public StringField ContractDescription;
            public DateTimeField ContractStartDate;
            public DateTimeField ContractEndDate;
            public Int32Field ContractCustomerId;
            public DecimalField ContractOrdinaryEarnRate;
            public DecimalField ContractOvertimeEarnRate;
            public DecimalField ContractNotWorking1EarnRate;
            public DecimalField ContractNotWorking2EarnRate;

            public StringField ParentActivityDescription;
            public StringField PriorityDescription;
            public StringField TimesheetStateTypeDescription;
            public StringField TagDescription;
        }
    }
}
