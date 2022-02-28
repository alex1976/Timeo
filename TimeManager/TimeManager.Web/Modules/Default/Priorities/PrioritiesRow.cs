
namespace TimeManager.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Priorities]")]
    [DisplayName("Priorities"), InstanceName("Priorities")]
    [ReadPermission(PermissionKeys.Priorities.Read)]
    [ModifyPermission(PermissionKeys.Priorities.Management)]
    [DeletePermission(PermissionKeys.Priorities.Delete)]
    [LookupScript("Default.Priorities")]
    public sealed class PrioritiesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Priority Id"), Identity]
        public Int32? PriorityId
        {
            get { return Fields.PriorityId[this]; }
            set { Fields.PriorityId[this] = value; }
        }

        [DisplayName("Description"), Size(100), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PriorityId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PrioritiesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PriorityId;
            public StringField Description;
        }
    }
}
