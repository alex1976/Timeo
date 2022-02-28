
namespace TimeManager.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[UnitOfMeasures]")]
    [DisplayName("Unit Of Measures"), InstanceName("Unit Of Measures")]
    [ReadPermission(PermissionKeys.UnitOfMeasures.Read)]
    [ModifyPermission(PermissionKeys.UnitOfMeasures.Management)]
    [DeletePermission(PermissionKeys.UnitOfMeasures.Delete)]
    [LookupScript("Default.UnitOfMeasures")]
    public sealed class UnitOfMeasuresRow : Row, IIdRow, INameRow
    {
        [DisplayName("Unit Of Measure Id"), Identity]
        public Int32? UnitOfMeasureId
        {
            get { return Fields.UnitOfMeasureId[this]; }
            set { Fields.UnitOfMeasureId[this] = value; }
        }

        [DisplayName("Description"), Size(250), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UnitOfMeasureId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UnitOfMeasuresRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UnitOfMeasureId;
            public StringField Description;
        }
    }
}
