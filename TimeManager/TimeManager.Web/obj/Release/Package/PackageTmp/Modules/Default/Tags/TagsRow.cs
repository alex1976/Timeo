
namespace TimeManager.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Tags]")]
    [DisplayName("Tags"), InstanceName("Tags")]
    [ReadPermission(PermissionKeys.Tags.Read)]
    [ModifyPermission(PermissionKeys.Tags.Management)]
    [DeletePermission(PermissionKeys.Tags.Delete)]
    [LookupScript("Default.Tags")]
    public sealed class TagsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tag Id"), Identity]
        public Int32? TagId
        {
            get { return Fields.TagId[this]; }
            set { Fields.TagId[this] = value; }
        }

        [DisplayName("Description"), Size(100), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TagId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TagsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TagId;
            public StringField Description;
        }
    }
}
