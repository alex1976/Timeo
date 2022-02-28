
namespace TimeManager.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Employees]")]
    [DisplayName("Employees"), InstanceName("Employees")]
    [ReadPermission(PermissionKeys.Employees.Read)]
    [ModifyPermission(PermissionKeys.Employees.Management)]
    [DeletePermission(PermissionKeys.Employees.Delete)]
    [LookupScript("Default.Employees")]
    public sealed class EmployeesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Employee Id"), Identity]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
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

        [DisplayName("Address"), Size(250)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Location"), Size(250)]
        public String Location
        {
            get { return Fields.Location[this]; }
            set { Fields.Location[this] = value; }
        }

        [DisplayName("Phone Number1"), Size(50)]
        public String PhoneNumber1
        {
            get { return Fields.PhoneNumber1[this]; }
            set { Fields.PhoneNumber1[this] = value; }
        }

        [DisplayName("Phone Number2"), Size(50)]
        public String PhoneNumber2
        {
            get { return Fields.PhoneNumber2[this]; }
            set { Fields.PhoneNumber2[this] = value; }
        }

        [DisplayName("Phone Number3"), Size(50)]
        public String PhoneNumber3
        {
            get { return Fields.PhoneNumber3[this]; }
            set { Fields.PhoneNumber3[this] = value; }
        }

        [DisplayName("E Mail"), Size(100)]
        public String EMail
        {
            get { return Fields.EMail[this]; }
            set { Fields.EMail[this] = value; }
        }

        [DisplayName("Ordinary Cost Rate"), Size(28), Scale(14)]
        public Decimal? OrdinaryCostRate
        {
            get { return Fields.OrdinaryCostRate[this]; }
            set { Fields.OrdinaryCostRate[this] = value; }
        }

        [DisplayName("Overtime Cost Rate"), Size(28), Scale(14)]
        public Decimal? OvertimeCostRate
        {
            get { return Fields.OvertimeCostRate[this]; }
            set { Fields.OvertimeCostRate[this] = value; }
        }

        [DisplayName("Not Working1 Cost Rate"), Size(28), Scale(14)]
        public Decimal? NotWorking1CostRate
        {
            get { return Fields.NotWorking1CostRate[this]; }
            set { Fields.NotWorking1CostRate[this] = value; }
        }

        [DisplayName("Not Working2 Cost Rate"), Size(28), Scale(14)]
        public Decimal? NotWorking2CostRate
        {
            get { return Fields.NotWorking2CostRate[this]; }
            set { Fields.NotWorking2CostRate[this] = value; }
        }

        [DisplayName("User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        [LookupEditor(typeof(Administration.Entities.UserRow))]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("User Username"), Expression("jUser.[Username]")]
        public String UserUsername
        {
            get { return Fields.UserUsername[this]; }
            set { Fields.UserUsername[this] = value; }
        }

        [DisplayName("User Display Name"), Expression("jUser.[DisplayName]")]
        public String UserDisplayName
        {
            get { return Fields.UserDisplayName[this]; }
            set { Fields.UserDisplayName[this] = value; }
        }

        [DisplayName("User Email"), Expression("jUser.[Email]")]
        public String UserEmail
        {
            get { return Fields.UserEmail[this]; }
            set { Fields.UserEmail[this] = value; }
        }

        [DisplayName("User Source"), Expression("jUser.[Source]")]
        public String UserSource
        {
            get { return Fields.UserSource[this]; }
            set { Fields.UserSource[this] = value; }
        }

        [DisplayName("User Password Hash"), Expression("jUser.[PasswordHash]")]
        public String UserPasswordHash
        {
            get { return Fields.UserPasswordHash[this]; }
            set { Fields.UserPasswordHash[this] = value; }
        }

        [DisplayName("User Password Salt"), Expression("jUser.[PasswordSalt]")]
        public String UserPasswordSalt
        {
            get { return Fields.UserPasswordSalt[this]; }
            set { Fields.UserPasswordSalt[this] = value; }
        }

        [DisplayName("User Last Directory Update"), Expression("jUser.[LastDirectoryUpdate]")]
        public DateTime? UserLastDirectoryUpdate
        {
            get { return Fields.UserLastDirectoryUpdate[this]; }
            set { Fields.UserLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("User User Image"), Expression("jUser.[UserImage]")]
        public String UserUserImage
        {
            get { return Fields.UserUserImage[this]; }
            set { Fields.UserUserImage[this] = value; }
        }

        [DisplayName("User Insert Date"), Expression("jUser.[InsertDate]")]
        public DateTime? UserInsertDate
        {
            get { return Fields.UserInsertDate[this]; }
            set { Fields.UserInsertDate[this] = value; }
        }

        [DisplayName("User Insert User Id"), Expression("jUser.[InsertUserId]")]
        public Int32? UserInsertUserId
        {
            get { return Fields.UserInsertUserId[this]; }
            set { Fields.UserInsertUserId[this] = value; }
        }

        [DisplayName("User Update Date"), Expression("jUser.[UpdateDate]")]
        public DateTime? UserUpdateDate
        {
            get { return Fields.UserUpdateDate[this]; }
            set { Fields.UserUpdateDate[this] = value; }
        }

        [DisplayName("User Update User Id"), Expression("jUser.[UpdateUserId]")]
        public Int32? UserUpdateUserId
        {
            get { return Fields.UserUpdateUserId[this]; }
            set { Fields.UserUpdateUserId[this] = value; }
        }

        [DisplayName("User Is Active"), Expression("jUser.[IsActive]")]
        public Int16? UserIsActive
        {
            get { return Fields.UserIsActive[this]; }
            set { Fields.UserIsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EmployeeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmployeeId;
            public StringField MnemonicId;
            public StringField Description;
            public StringField Address;
            public StringField Location;
            public StringField PhoneNumber1;
            public StringField PhoneNumber2;
            public StringField PhoneNumber3;
            public StringField EMail;
            public DecimalField OrdinaryCostRate;
            public DecimalField OvertimeCostRate;
            public DecimalField NotWorking1CostRate;
            public DecimalField NotWorking2CostRate;
            public Int32Field UserId;

            public StringField UserUsername;
            public StringField UserDisplayName;
            public StringField UserEmail;
            public StringField UserSource;
            public StringField UserPasswordHash;
            public StringField UserPasswordSalt;
            public DateTimeField UserLastDirectoryUpdate;
            public StringField UserUserImage;
            public DateTimeField UserInsertDate;
            public Int32Field UserInsertUserId;
            public DateTimeField UserUpdateDate;
            public Int32Field UserUpdateUserId;
            public Int16Field UserIsActive;
        }
    }
}
