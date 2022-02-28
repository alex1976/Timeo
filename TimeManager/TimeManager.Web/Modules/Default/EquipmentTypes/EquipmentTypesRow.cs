
namespace TimeManager.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[EquipmentTypes]")]
    [DisplayName("Equipment Types"), InstanceName("Equipment Types")]
    [ReadPermission(PermissionKeys.EquipmentTypes.Read)]
    [ModifyPermission(PermissionKeys.EquipmentTypes.Management)]
    [DeletePermission(PermissionKeys.EquipmentTypes.Delete)]
    [LookupScript("Default.EquipmentTypes")]
    public sealed class EquipmentTypesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Equipment Type Id"), Identity]
        public Int32? EquipmentTypeId
        {
            get { return Fields.EquipmentTypeId[this]; }
            set { Fields.EquipmentTypeId[this] = value; }
        }

        [DisplayName("Description"), Size(250), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EquipmentTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EquipmentTypesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EquipmentTypeId;
            public StringField Description;
        }
    }
}
