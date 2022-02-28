
namespace TimeManager.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Timesheets]")]
    [DisplayName("Timesheets"), InstanceName("Timesheets")]
    [ReadPermission(PermissionKeys.Timesheets.Read)]
    [ModifyPermission(PermissionKeys.Timesheets.Management)]
    //[ReadPermission(PermissionKeys.General)]
    //[ModifyPermission(PermissionKeys.General)]
    [DeletePermission(PermissionKeys.Timesheets.Delete)]
    public sealed class TimesheetsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Timesheet Id"), Identity]
        public Int32? TimesheetId
        {
            get { return Fields.TimesheetId[this]; }
            set { Fields.TimesheetId[this] = value; }
        }

        [DisplayName("Mnemonic Id"), Size(50), QuickSearch]
        public String MnemonicId
        {
            get { return Fields.MnemonicId[this]; }
            set { Fields.MnemonicId[this] = value; }
        }

        [DisplayName("Description"), Size(250), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Date")]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Customer"), NotNull, ForeignKey("[dbo].[Customers]", "CustomerId"), LeftJoin("jCustomer"), TextualField("CustomerDescription")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = false /*, InplaceAddPermission = PermissionKeys.Timesheets.Management*/), QuickSearch, QuickFilter]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employees]", "EmployeeId"), LeftJoin("jEmployee"), TextualField("EmployeeDescription")]
        [LookupEditor(typeof(EmployeesRow), InplaceAdd = false /*, InplaceAddPermission = PermissionKeys.Timesheets.Management*/), QuickSearch, QuickFilter]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Contract"), ForeignKey("[dbo].[Contracts]", "ContractId"), LeftJoin("jContract"), TextualField("ContractMnemonicId")]
        public Int32? ContractId
        {
            get { return Fields.ContractId[this]; }
            set { Fields.ContractId[this] = value; }
        }

        [DisplayName("Timesheet State Type"), ForeignKey("[dbo].[TimesheetStateTypes]", "TimesheetStateTypeId"), LeftJoin("jTimesheetStateType"), TextualField("TimesheetStateTypeDescription")]
        [LookupEditor(typeof(TimesheetStateTypesRow), InplaceAdd = false)]
        public Int32? TimesheetStateTypeId
        {
            get { return Fields.TimesheetStateTypeId[this]; }
            set { Fields.TimesheetStateTypeId[this] = value; }
        }

        [DisplayName("Activity"), ForeignKey("[dbo].[Activities]", "ActivityId"), LeftJoin("jActivity"), TextualField("ActivityDescription")]
        [LookupEditor(typeof(ActivitiesRow), InplaceAdd = false), QuickSearch, QuickFilter]
        public Int32? ActivityId
        {
            get { return Fields.ActivityId[this]; }
            set { Fields.ActivityId[this] = value; }
        }

        [DisplayName("Ordinary"), Size(28), Scale(14)]
        public Decimal? Ordinary
        {
            get { return Fields.Ordinary[this]; }
            set { Fields.Ordinary[this] = value; }
        }

        [DisplayName("Overtime"), Size(28), Scale(14)]
        public Decimal? Overtime
        {
            get { return Fields.Overtime[this]; }
            set { Fields.Overtime[this] = value; }
        }

        [DisplayName("Not Working1"), Size(28), Scale(14)]
        public Decimal? NotWorking1
        {
            get { return Fields.NotWorking1[this]; }
            set { Fields.NotWorking1[this] = value; }
        }

        [DisplayName("Not Working2"), Size(28), Scale(14)]
        public Decimal? NotWorking2
        {
            get { return Fields.NotWorking2[this]; }
            set { Fields.NotWorking2[this] = value; }
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

        [DisplayName("Employee Mnemonic Id"), Expression("jEmployee.[MnemonicId]")]
        public String EmployeeMnemonicId
        {
            get { return Fields.EmployeeMnemonicId[this]; }
            set { Fields.EmployeeMnemonicId[this] = value; }
        }

        [DisplayName("Employee Description"), Expression("jEmployee.[Description]"), QuickSearch , QuickFilter]
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

        [DisplayName("Timesheet State Type Description"), Expression("jTimesheetStateType.[Description]")]
        public String TimesheetStateTypeDescription
        {
            get { return Fields.TimesheetStateTypeDescription[this]; }
            set { Fields.TimesheetStateTypeDescription[this] = value; }
        }

        [DisplayName("Activity Mnemonic Id"), Expression("jActivity.[MnemonicId]")]
        public String ActivityMnemonicId
        {
            get { return Fields.ActivityMnemonicId[this]; }
            set { Fields.ActivityMnemonicId[this] = value; }
        }

        [DisplayName("Activity Description"), Expression("jActivity.[Description]"), QuickSearch, QuickFilter]
        public String ActivityDescription
        {
            get { return Fields.ActivityDescription[this]; }
            set { Fields.ActivityDescription[this] = value; }
        }

        [DisplayName("Activity Note"), Expression("jActivity.[Note]")]
        public String ActivityNote
        {
            get { return Fields.ActivityNote[this]; }
            set { Fields.ActivityNote[this] = value; }
        }

        [DisplayName("Activity Start Date"), Expression("jActivity.[StartDate]")]
        public DateTime? ActivityStartDate
        {
            get { return Fields.ActivityStartDate[this]; }
            set { Fields.ActivityStartDate[this] = value; }
        }

        [DisplayName("Activity End Date"), Expression("jActivity.[EndDate]")]
        public DateTime? ActivityEndDate
        {
            get { return Fields.ActivityEndDate[this]; }
            set { Fields.ActivityEndDate[this] = value; }
        }

        [DisplayName("Activity Employee Id"), Expression("jActivity.[EmployeeId]")]
        public Int32? ActivityEmployeeId
        {
            get { return Fields.ActivityEmployeeId[this]; }
            set { Fields.ActivityEmployeeId[this] = value; }
        }

        [DisplayName("Activity Customer Id"), Expression("jActivity.[CustomerId]")]
        public Int32? ActivityCustomerId
        {
            get { return Fields.ActivityCustomerId[this]; }
            set { Fields.ActivityCustomerId[this] = value; }
        }

        [DisplayName("Activity Contract Id"), Expression("jActivity.[ContractId]")]
        public Int32? ActivityContractId
        {
            get { return Fields.ActivityContractId[this]; }
            set { Fields.ActivityContractId[this] = value; }
        }

        [DisplayName("Activity Estimated Work"), Expression("jActivity.[EstimatedWork]")]
        public Decimal? ActivityEstimatedWork
        {
            get { return Fields.ActivityEstimatedWork[this]; }
            set { Fields.ActivityEstimatedWork[this] = value; }
        }

        [DisplayName("Activity Actual Work"), Expression("jActivity.[ActualWork]")]
        public Decimal? ActivityActualWork
        {
            get { return Fields.ActivityActualWork[this]; }
            set { Fields.ActivityActualWork[this] = value; }
        }

        [DisplayName("Activity Remaining Work"), Expression("jActivity.[RemainingWork]")]
        public Decimal? ActivityRemainingWork
        {
            get { return Fields.ActivityRemainingWork[this]; }
            set { Fields.ActivityRemainingWork[this] = value; }
        }

        [DisplayName("Activity Attachments"), Expression("jActivity.[Attachments]")]
        public String ActivityAttachments
        {
            get { return Fields.ActivityAttachments[this]; }
            set { Fields.ActivityAttachments[this] = value; }
        }

        [DisplayName("Activity Tags"), Expression("jActivity.[Tags]")]
        public String ActivityTags
        {
            get { return Fields.ActivityTags[this]; }
            set { Fields.ActivityTags[this] = value; }
        }

        [DisplayName("Activity Parent Activity Id"), Expression("jActivity.[ParentActivityId]")]
        public Int32? ActivityParentActivityId
        {
            get { return Fields.ActivityParentActivityId[this]; }
            set { Fields.ActivityParentActivityId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TimesheetId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MnemonicId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TimesheetsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TimesheetId;
            public StringField MnemonicId;
            public StringField Description;
            public DateTimeField Date;
            public Int32Field CustomerId;
            public Int32Field EmployeeId;
            public Int32Field ContractId;
            public Int32Field TimesheetStateTypeId;
            public Int32Field ActivityId;
            public DecimalField Ordinary;
            public DecimalField Overtime;
            public DecimalField NotWorking1;
            public DecimalField NotWorking2;

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

            public StringField ContractMnemonicId;
            public StringField ContractDescription;
            public DateTimeField ContractStartDate;
            public DateTimeField ContractEndDate;
            public Int32Field ContractCustomerId;
            public DecimalField ContractOrdinaryEarnRate;
            public DecimalField ContractOvertimeEarnRate;
            public DecimalField ContractNotWorking1EarnRate;
            public DecimalField ContractNotWorking2EarnRate;

            public StringField TimesheetStateTypeDescription;

            public StringField ActivityMnemonicId;
            public StringField ActivityDescription;
            public StringField ActivityNote;
            public DateTimeField ActivityStartDate;
            public DateTimeField ActivityEndDate;
            public Int32Field ActivityEmployeeId;
            public Int32Field ActivityCustomerId;
            public Int32Field ActivityContractId;
            public DecimalField ActivityEstimatedWork;
            public DecimalField ActivityActualWork;
            public DecimalField ActivityRemainingWork;
            public StringField ActivityAttachments;
            public StringField ActivityTags;
            public Int32Field ActivityParentActivityId;
        }
    }
}
