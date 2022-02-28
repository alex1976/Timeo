
namespace TimeManager.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[BusinessUnits]")]
    [DisplayName("Business Units"), InstanceName("Business Units")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BusinessUnitsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Unit Id"), Identity]
        public Int32? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Parent Unit"), ForeignKey("[dbo].[BusinessUnits]", "UnitId"), LeftJoin("jParentUnit"), TextualField("ParentUnitName")]
        public Int32? ParentUnitId
        {
            get { return Fields.ParentUnitId[this]; }
            set { Fields.ParentUnitId[this] = value; }
        }

        [DisplayName("Parent Unit Name"), Expression("jParentUnit.[Name]")]
        public String ParentUnitName
        {
            get { return Fields.ParentUnitName[this]; }
            set { Fields.ParentUnitName[this] = value; }
        }

        [DisplayName("Parent Unit Parent Unit Id"), Expression("jParentUnit.[ParentUnitId]")]
        public Int32? ParentUnitParentUnitId
        {
            get { return Fields.ParentUnitParentUnitId[this]; }
            set { Fields.ParentUnitParentUnitId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UnitId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BusinessUnitsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UnitId;
            public StringField Name;
            public Int32Field ParentUnitId;

            public StringField ParentUnitName;
            public Int32Field ParentUnitParentUnitId;
        }
    }
}
