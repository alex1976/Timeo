using FluentMigrator;
using System;

namespace TimeManager.Migrations.DefaultDB
{
    [Migration(20171009101000)]
    public class DefaultDB_20171009_101000_TimesheetTables : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Timesheets", "TimesheetId", s => s
                .WithColumn("MnemonicId").AsString(50).Nullable()
                .WithColumn("Description").AsString(250).Nullable()
                .WithColumn("Date").AsDateTime().Nullable()
                .WithColumn("CustomerId").AsInt32().NotNullable()
                   .ForeignKey("FK_Timesheet_CustomerId", "Customers", "CustomerId")
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                   .ForeignKey("FK_Timesheet_EmployeeId", "Employees", "EmployeeId")
                .WithColumn("ContractId").AsInt32().Nullable()
                   .ForeignKey("FK_Timesheet_ContractId", "Contracts", "ContractId")
                .WithColumn("TimesheetStateTypeId").AsInt32().Nullable()
                   .ForeignKey("FK_Timesheet_TimesheetStateTypeId", "TimesheetStateTypes", "TimesheetStateTypeId")
                .WithColumn("ActivityId").AsInt32().Nullable()
                   .ForeignKey("FK_Timesheet_ActivityId", "Activities", "ActivityId")
                .WithColumn("Ordinary").AsDecimal(28, 14).Nullable()
                .WithColumn("Overtime").AsDecimal(28, 14).Nullable()
                .WithColumn("NotWorking1").AsDecimal(28, 14).Nullable()
                .WithColumn("NotWorking2").AsDecimal(28, 14).Nullable()
                );
        }
        //public override void Down() { }
    }
}