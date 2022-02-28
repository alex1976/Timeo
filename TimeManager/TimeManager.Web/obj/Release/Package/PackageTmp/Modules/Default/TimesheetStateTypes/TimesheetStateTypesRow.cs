
namespace TimeManager.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[TimesheetStateTypes]")]
    [DisplayName("Timesheet State Types"), InstanceName("Timesheet State Types")]
    [ReadPermission(PermissionKeys.TimesheetStateTypes.Read)]
    [ModifyPermission(PermissionKeys.TimesheetStateTypes.Management)]
    [DeletePermission(PermissionKeys.TimesheetStateTypes.Delete)]
    [LookupScript("Default.TimesheetStateTypes")]
    public sealed class TimesheetStateTypesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Timesheet State Type Id"), Identity]
        public Int32? TimesheetStateTypeId
        {
            get { return Fields.TimesheetStateTypeId[this]; }
            set { Fields.TimesheetStateTypeId[this] = value; }
        }

        [DisplayName("Description"), Size(100), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TimesheetStateTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TimesheetStateTypesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TimesheetStateTypeId;
            public StringField Description;
        }
    }
}
