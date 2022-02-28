
namespace TimeManager.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[EquipmentUsages]"), TwoLevelCached]
    [DisplayName("Equipment Usages"), InstanceName("Equipment Usages")]
    [ReadPermission(PermissionKeys.EquipmentUsages.Read)]
    [ModifyPermission(PermissionKeys.EquipmentUsages.Management)]
    [DeletePermission(PermissionKeys.EquipmentUsages.Delete)]
    //[ReadPermission(PermissionKeys.General)]
    //[ModifyPermission(PermissionKeys.General)]
    public sealed class EquipmentUsagesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Equipment Usage Id"), Identity]
        public Int32? EquipmentUsageId
        {
            get { return Fields.EquipmentUsageId[this]; }
            set { Fields.EquipmentUsageId[this] = value; }
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

        [DisplayName("Customer"), ForeignKey("[dbo].[Customers]", "CustomerId"), LeftJoin("jCustomer"), TextualField("CustomerMnemonicId")]
        [LookupEditor(typeof(CustomersRow), InplaceAdd = false /*, InplaceAddPermission = PermissionKeys.Timesheets.Management*/), QuickSearch, QuickFilter]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Equipment"), NotNull, ForeignKey("[dbo].[Equipments]", "EquipmentId"), LeftJoin("jEquipment"), TextualField("EquipmentMnemonicId")]
        [LookupEditor(typeof(EquipmentsRow), InplaceAdd = false /*, InplaceAddPermission = PermissionKeys.Timesheets.Management*/), QuickSearch, QuickFilter]
        //[LKCodeDescr(typeof(Scripts.EquipmentsLookup), CodeName = "MnemonicId", DescrName = "Description")]
        public Int32? EquipmentId
        {
            get { return Fields.EquipmentId[this]; }
            set { Fields.EquipmentId[this] = value; }
        }

        [DisplayName("Contract"), ForeignKey("[dbo].[Contracts]", "ContractId"), LeftJoin("jContract"), TextualField("ContractMnemonicId")]
        public Int32? ContractId
        {
            get { return Fields.ContractId[this]; }
            set { Fields.ContractId[this] = value; }
        }

        [DisplayName("Activity"), ForeignKey("[dbo].[Activities]", "ActivityId"), LeftJoin("jActivity"), TextualField("ActivityMnemonicId")]
        [LookupEditor(typeof(ActivitiesRow), InplaceAdd = false /*, InplaceAddPermission = PermissionKeys.Timesheets.Management*/), QuickSearch, QuickFilter]
        public Int32? ActivityId
        {
            get { return Fields.ActivityId[this]; }
            set { Fields.ActivityId[this] = value; }
        }

        [DisplayName("Timesheet State Type"), ForeignKey("[dbo].[TimesheetStateTypes]", "TimesheetStateTypeId"), LeftJoin("jTimesheetStateType"), TextualField("TimesheetStateTypeDescription")]
        public Int32? TimesheetStateTypeId
        {
            get { return Fields.TimesheetStateTypeId[this]; }
            set { Fields.TimesheetStateTypeId[this] = value; }
        }

        [DisplayName("Quantity"), Size(28), Scale(14)]
        public Decimal? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Distance"), Size(28), Scale(14)]
        public Decimal? Distance
        {
            get { return Fields.Distance[this]; }
            set { Fields.Distance[this] = value; }
        }

        [DisplayName("CostRate"), Size(28), Scale(14)]
        public Decimal? CostRate
        {
            get { return Fields.CostRate[this]; }
            set { Fields.CostRate[this] = value; }
        }

        [DisplayName("Amount"), Size(28), Scale(14)]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }

        [DisplayName("Distance Amount"), Size(28), Scale(14)]
        public Decimal? DistanceAmount
        {
            get { return Fields.DistanceAmount[this]; }
            set { Fields.DistanceAmount[this] = value; }
        }

        [DisplayName("Attachments"), MultipleFileUploadEditor(FilenameFormat = "EquipmentUsages/Attachments/~")]
        public String Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
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

        [DisplayName("Equipment Mnemonic Id"), Expression("jEquipment.[MnemonicId]")]
        public String EquipmentMnemonicId
        {
            get { return Fields.EquipmentMnemonicId[this]; }
            set { Fields.EquipmentMnemonicId[this] = value; }
        }

        [DisplayName("Equipment Description"), Expression("jEquipment.[Description]"), QuickSearch, QuickFilter]
        public String EquipmentDescription
        {
            get { return Fields.EquipmentDescription[this]; }
            set { Fields.EquipmentDescription[this] = value; }
        }

        [DisplayName("Equipment Note"), Expression("jEquipment.[Note]")]
        public String EquipmentNote
        {
            get { return Fields.EquipmentNote[this]; }
            set { Fields.EquipmentNote[this] = value; }
        }

        [DisplayName("Equipment Equipment Type Id"), Expression("jEquipment.[EquipmentTypeId]")]
        public Int32? EquipmentEquipmentTypeId
        {
            get { return Fields.EquipmentEquipmentTypeId[this]; }
            set { Fields.EquipmentEquipmentTypeId[this] = value; }
        }

        [DisplayName("Equipment Unit Of Measure Id"), Expression("jEquipment.[UnitOfMeasureId]")]
        public Int32? EquipmentUnitOfMeasureId
        {
            get { return Fields.EquipmentUnitOfMeasureId[this]; }
            set { Fields.EquipmentUnitOfMeasureId[this] = value; }
        }

        [DisplayName("Equipment Earn Rate"), Expression("jEquipment.[EarnRate]")]
        public Decimal? EquipmentEarnRate
        {
            get { return Fields.EquipmentEarnRate[this]; }
            set { Fields.EquipmentEarnRate[this] = value; }
        }

        [DisplayName("Equipment Cost Rate"), Expression("jEquipment.[CostRate]")]
        public Decimal? EquipmentCostRate
        {
            get { return Fields.EquipmentCostRate[this]; }
            set { Fields.EquipmentCostRate[this] = value; }
        }

        [DisplayName("Equipment Parent Equipment Id"), Expression("jEquipment.[ParentEquipmentId]")]
        public Int32? EquipmentParentEquipmentId
        {
            get { return Fields.EquipmentParentEquipmentId[this]; }
            set { Fields.EquipmentParentEquipmentId[this] = value; }
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

        [DisplayName("Timesheet State Type Description"), Expression("jTimesheetStateType.[Description]")]
        public String TimesheetStateTypeDescription
        {
            get { return Fields.TimesheetStateTypeDescription[this]; }
            set { Fields.TimesheetStateTypeDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EquipmentUsageId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MnemonicId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EquipmentUsagesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EquipmentUsageId;
            public StringField MnemonicId;
            public StringField Description;
            public DateTimeField Date;
            public Int32Field CustomerId;
            public Int32Field EquipmentId;
            public Int32Field ContractId;
            public Int32Field ActivityId;
            public Int32Field TimesheetStateTypeId;
            public DecimalField Quantity;
            public DecimalField Distance;
            public DecimalField CostRate;
            public DecimalField Amount;
            public DecimalField DistanceAmount;
            public StringField Attachments;

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

            public StringField EquipmentMnemonicId;
            public StringField EquipmentDescription;
            public StringField EquipmentNote;
            public Int32Field EquipmentEquipmentTypeId;
            public Int32Field EquipmentUnitOfMeasureId;
            public DecimalField EquipmentEarnRate;
            public DecimalField EquipmentCostRate;
            public Int32Field EquipmentParentEquipmentId;

            public StringField ContractMnemonicId;
            public StringField ContractDescription;
            public DateTimeField ContractStartDate;
            public DateTimeField ContractEndDate;
            public Int32Field ContractCustomerId;
            public DecimalField ContractOrdinaryEarnRate;
            public DecimalField ContractOvertimeEarnRate;
            public DecimalField ContractNotWorking1EarnRate;
            public DecimalField ContractNotWorking2EarnRate;

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

            public StringField TimesheetStateTypeDescription;
        }
    }
}
