using FluentMigrator;
using System;

namespace TimeManager.Migrations.DefaultDB
{
    [Migration(20210201093000)]
    public class DefaultDB_20210201_093000_EquipmentTablesExt : AutoReversingMigration
    {
        public override void Up()
        {
            //Nuovi attributi della tabella attività
            Alter.Table("Activities").AddColumn("Latitude").AsDouble().Nullable();
            Alter.Table("Activities").AddColumn("Longitude").AsDouble().Nullable();

            //Nuovi attributi della tabella rapportini
            Alter.Table("Timesheets").AddColumn("Latitude").AsDouble().Nullable();
            Alter.Table("Timesheets").AddColumn("Longitude").AsDouble().Nullable();
            Alter.Table("Timesheets").AddColumn("OrdinaryCostRate").AsDecimal(28, 14).Nullable();
            Alter.Table("Timesheets").AddColumn("OvertimeCostRate").AsDecimal(28, 14).Nullable();
            Alter.Table("Timesheets").AddColumn("NotWorking1CostRate").AsDecimal(28, 14).Nullable();
            Alter.Table("Timesheets").AddColumn("NotWorking2CostRate").AsDecimal(28, 14).Nullable();
            Alter.Table("Timesheets").AddColumn("OrdinaryEarnRate").AsDecimal(28, 14).Nullable();
            Alter.Table("Timesheets").AddColumn("OvertimeEarnRate").AsDecimal(28, 14).Nullable();
            Alter.Table("Timesheets").AddColumn("NotWorking1EarnRate").AsDecimal(28, 14).Nullable();
            Alter.Table("Timesheets").AddColumn("NotWorking2EarnRate").AsDecimal(28, 14).Nullable();

            //Nuovi attributi della tabella utilizzi
            Alter.Table("EquipmentUsages").AddColumn("CostRate").AsDecimal(28, 14).Nullable();
            Alter.Table("EquipmentUsages").AddColumn("EarnRate").AsDecimal(28, 14).Nullable();
            Alter.Table("EquipmentUsages").AddColumn("Latitude").AsDouble().Nullable();
            Alter.Table("EquipmentUsages").AddColumn("Longitude").AsDouble().Nullable();
        }

    }
}