
namespace TimeManager.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Equipments]")]
    [DisplayName("Equipments"), InstanceName("Equipments")]
    [ReadPermission(PermissionKeys.Equipments.Read)]
    [ModifyPermission(PermissionKeys.Equipments.Management)]
    [DeletePermission(PermissionKeys.Equipments.Delete)]
    [LookupScript("Default.Equipments")]
    public sealed class EquipmentsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Equipment Id"), Identity]
        public Int32? EquipmentId
        {
            get { return Fields.EquipmentId[this]; }
            set { Fields.EquipmentId[this] = value; }
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

        [DisplayName("Note"), Size(1000)]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("Equipment Type"), ForeignKey("[dbo].[EquipmentTypes]", "EquipmentTypeId"), LeftJoin("jEquipmentType"), TextualField("EquipmentTypeDescription")]
        [LookupEditor(typeof(EquipmentTypesRow), InplaceAdd = false /*, InplaceAddPermission = PermissionKeys.Timesheets.Management*/), QuickSearch, QuickFilter]
        public Int32? EquipmentTypeId
        {
            get { return Fields.EquipmentTypeId[this]; }
            set { Fields.EquipmentTypeId[this] = value; }
        }

        [DisplayName("Unit Of Measure"), ForeignKey("[dbo].[UnitOfMeasures]", "UnitOfMeasureId"), LeftJoin("jUnitOfMeasure"), TextualField("UnitOfMeasureDescription")]
        [LookupEditor(typeof(UnitOfMeasuresRow), InplaceAdd = false /*, InplaceAddPermission = PermissionKeys.Timesheets.Management*/)]
        public Int32? UnitOfMeasureId
        {
            get { return Fields.UnitOfMeasureId[this]; }
            set { Fields.UnitOfMeasureId[this] = value; }
        }

        [DisplayName("Earn Rate"), Size(28), Scale(14)]
        public Decimal? EarnRate
        {
            get { return Fields.EarnRate[this]; }
            set { Fields.EarnRate[this] = value; }
        }

        [DisplayName("Cost Rate"), Size(28), Scale(14)]
        public Decimal? CostRate
        {
            get { return Fields.CostRate[this]; }
            set { Fields.CostRate[this] = value; }
        }

        [DisplayName("Parent Equipment"), ForeignKey("[dbo].[Equipments]", "EquipmentId"), LeftJoin("jParentEquipment"), TextualField("ParentEquipmentMnemonicId")]
        public Int32? ParentEquipmentId
        {
            get { return Fields.ParentEquipmentId[this]; }
            set { Fields.ParentEquipmentId[this] = value; }
        }

        [DisplayName("Equipment Type Description"), Expression("jEquipmentType.[Description]")]
        public String EquipmentTypeDescription
        {
            get { return Fields.EquipmentTypeDescription[this]; }
            set { Fields.EquipmentTypeDescription[this] = value; }
        }

        [DisplayName("Unit Of Measure Description"), Expression("jUnitOfMeasure.[Description]")]
        public String UnitOfMeasureDescription
        {
            get { return Fields.UnitOfMeasureDescription[this]; }
            set { Fields.UnitOfMeasureDescription[this] = value; }
        }

        [DisplayName("Parent Equipment Mnemonic Id"), Expression("jParentEquipment.[MnemonicId]")]
        public String ParentEquipmentMnemonicId
        {
            get { return Fields.ParentEquipmentMnemonicId[this]; }
            set { Fields.ParentEquipmentMnemonicId[this] = value; }
        }

        [DisplayName("Parent Equipment Description"), Expression("jParentEquipment.[Description]")]
        public String ParentEquipmentDescription
        {
            get { return Fields.ParentEquipmentDescription[this]; }
            set { Fields.ParentEquipmentDescription[this] = value; }
        }

        [DisplayName("Parent Equipment Note"), Expression("jParentEquipment.[Note]")]
        public String ParentEquipmentNote
        {
            get { return Fields.ParentEquipmentNote[this]; }
            set { Fields.ParentEquipmentNote[this] = value; }
        }

        [DisplayName("Parent Equipment Equipment Type Id"), Expression("jParentEquipment.[EquipmentTypeId]")]
        public Int32? ParentEquipmentEquipmentTypeId
        {
            get { return Fields.ParentEquipmentEquipmentTypeId[this]; }
            set { Fields.ParentEquipmentEquipmentTypeId[this] = value; }
        }

        [DisplayName("Parent Equipment Unit Of Measure Id"), Expression("jParentEquipment.[UnitOfMeasureId]")]
        public Int32? ParentEquipmentUnitOfMeasureId
        {
            get { return Fields.ParentEquipmentUnitOfMeasureId[this]; }
            set { Fields.ParentEquipmentUnitOfMeasureId[this] = value; }
        }

        [DisplayName("Parent Equipment Earn Rate"), Expression("jParentEquipment.[EarnRate]")]
        public Decimal? ParentEquipmentEarnRate
        {
            get { return Fields.ParentEquipmentEarnRate[this]; }
            set { Fields.ParentEquipmentEarnRate[this] = value; }
        }

        [DisplayName("Parent Equipment Cost Rate"), Expression("jParentEquipment.[CostRate]")]
        public Decimal? ParentEquipmentCostRate
        {
            get { return Fields.ParentEquipmentCostRate[this]; }
            set { Fields.ParentEquipmentCostRate[this] = value; }
        }

        [DisplayName("Parent Equipment Parent Equipment Id"), Expression("jParentEquipment.[ParentEquipmentId]")]
        public Int32? ParentEquipmentParentEquipmentId
        {
            get { return Fields.ParentEquipmentParentEquipmentId[this]; }
            set { Fields.ParentEquipmentParentEquipmentId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EquipmentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EquipmentsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EquipmentId;
            public StringField MnemonicId;
            public StringField Description;
            public StringField Note;
            public Int32Field EquipmentTypeId;
            public Int32Field UnitOfMeasureId;
            public DecimalField EarnRate;
            public DecimalField CostRate;
            public Int32Field ParentEquipmentId;

            public StringField EquipmentTypeDescription;

            public StringField UnitOfMeasureDescription;

            public StringField ParentEquipmentMnemonicId;
            public StringField ParentEquipmentDescription;
            public StringField ParentEquipmentNote;
            public Int32Field ParentEquipmentEquipmentTypeId;
            public Int32Field ParentEquipmentUnitOfMeasureId;
            public DecimalField ParentEquipmentEarnRate;
            public DecimalField ParentEquipmentCostRate;
            public Int32Field ParentEquipmentParentEquipmentId;
        }
    }
}
