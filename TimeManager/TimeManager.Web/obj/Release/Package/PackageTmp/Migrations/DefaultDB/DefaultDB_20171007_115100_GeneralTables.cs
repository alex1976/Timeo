using FluentMigrator;
using System;

namespace TimeManager.Migrations.DefaultDB
{
    [Migration(20171007115100)]
    public class DefaultDB_20171007_115100_GeneralTables : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Customers", "CustomerId", s => s
                .WithColumn("MnemonicId").AsString(50).Nullable()
                .WithColumn("Description").AsString(250).NotNullable()
                .WithColumn("FiscalCode").AsString(50).Nullable()
                .WithColumn("VatCode").AsString(50).Nullable()
                .WithColumn("Address").AsString(250).Nullable()
                .WithColumn("Location").AsString(250).Nullable()
                .WithColumn("PhoneNumber1").AsString(50).Nullable()
                .WithColumn("PhoneNumber2").AsString(50).Nullable()
                .WithColumn("PhoneNumber3").AsString(50).Nullable()
                .WithColumn("EMail").AsString(100).Nullable()
                );

            this.CreateTableWithId32("Employees", "EmployeeId", s => s
                .WithColumn("MnemonicId").AsString(50).Nullable()
                .WithColumn("Description").AsString(250).NotNullable()
                .WithColumn("Address").AsString(250).Nullable()
                .WithColumn("Location").AsString(250).Nullable()
                .WithColumn("PhoneNumber1").AsString(50).Nullable()
                .WithColumn("PhoneNumber2").AsString(50).Nullable()
                .WithColumn("PhoneNumber3").AsString(50).Nullable()
                .WithColumn("EMail").AsString(100).Nullable()
                .WithColumn("OrdinaryCostRate").AsDecimal(28, 14).Nullable()
                .WithColumn("OvertimeCostRate").AsDecimal(28, 14).Nullable()
                .WithColumn("NotWorking1CostRate").AsDecimal(28, 14).Nullable()
                .WithColumn("NotWorking2CostRate").AsDecimal(28, 14).Nullable()
                .WithColumn("UserId").AsInt32().Nullable()
                    .ForeignKey("FK_Employee_UserId", "Users", "UserId")
                );

            this.CreateTableWithId32("Contracts", "ContractId", s => s
                .WithColumn("MnemonicId").AsString(50).Nullable()
                .WithColumn("Description").AsString(250).NotNullable()
                .WithColumn("StartDate").AsDateTime().Nullable()
                .WithColumn("EndDate").AsDateTime().Nullable()
                .WithColumn("CustomerId").AsInt32().Nullable()
                   .ForeignKey("FK_Contract_CustomerId", "Customers", "CustomerId")
                .WithColumn("OrdinaryEarnRate").AsDecimal(28,14).Nullable()
                .WithColumn("OvertimeEarnRate").AsDecimal(28, 14).Nullable()
                .WithColumn("NotWorking1EarnRate").AsDecimal(28, 14).Nullable()
                .WithColumn("NotWorking2EarnRate").AsDecimal(28, 14).Nullable()
                );

            this.CreateTableWithId32("Activities", "ActivityId", s => s
               .WithColumn("MnemonicId").AsString(50).Nullable()
               .WithColumn("Description").AsString(250).NotNullable()
               .WithColumn("Note").AsString(1000).Nullable()
               .WithColumn("StartDate").AsDateTime().Nullable()
               .WithColumn("EndDate").AsDateTime().Nullable()
               .WithColumn("EmployeeId").AsInt32().Nullable()
                   .ForeignKey("FK_Activity_EmployeeId", "Employees", "EmployeeId")
               .WithColumn("CustomerId").AsInt32().Nullable()
                   .ForeignKey("FK_Activity_CustomerId", "Customers", "CustomerId")
               .WithColumn("ContractId").AsInt32().Nullable()
                   .ForeignKey("FK_Activity_ContractId", "Contracts", "ContractId")
               .WithColumn("EstimatedWork").AsDecimal(28, 14).Nullable()
               .WithColumn("ActualWork").AsDecimal(28, 14).Nullable()
               .WithColumn("RemainingWork").AsDecimal(28, 14).Nullable()
               .WithColumn("Attachments").AsString(int.MaxValue).Nullable()
               .WithColumn("Tags").AsString(int.MaxValue).Nullable()
               .WithColumn("ParentActivityId").AsInt32().Nullable()
                    .ForeignKey("FK_Activity_ParentActivity", "Activities", "ActivityId"), checkExists: true
               );

            this.CreateTableWithId32("TimesheetStateTypes", "TimesheetStateTypeId", s => s
                .WithColumn("Description").AsString(100).NotNullable()
                );
        }
        //public override void Down() { }
    }
}