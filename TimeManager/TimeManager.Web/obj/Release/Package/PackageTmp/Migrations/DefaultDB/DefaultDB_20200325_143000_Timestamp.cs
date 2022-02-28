using FluentMigrator;
using System;

namespace TimeManager.Migrations.DefaultDB
{
    [Migration(20200325143000)]
    public class DefaultDB_20200325_143000_Timestamp: AutoReversingMigration
    {
        public override void Up()
        {
            //Nuovi attributi della tabella attività
            Alter.Table("Activities").AddColumn("TimesheetStateTypeId").AsInt32().Nullable()
                .ForeignKey("FK_Activity_TimesheetStateTypeId", "TimesheetStateTypes", "TimesheetStateTypeId");
            Alter.Table("Activities").AddColumn("InsertDate").AsDateTime().Nullable();
            Alter.Table("Activities").AddColumn("InsertUserId").AsInt32().Nullable();
            Alter.Table("Activities").AddColumn("UpdateDate").AsDateTime().Nullable();
            Alter.Table("Activities").AddColumn("UpdateUserId").AsInt32().Nullable();

            //Nuovi attributi della tabella rapportini
            Alter.Table("Timesheets").AddColumn("InsertDate").AsDateTime().Nullable();
            Alter.Table("Timesheets").AddColumn("InsertUserId").AsInt32().Nullable();
            Alter.Table("Timesheets").AddColumn("UpdateDate").AsDateTime().Nullable();
            Alter.Table("Timesheets").AddColumn("UpdateUserId").AsInt32().Nullable();

            //Nuovi attributi della tabella dipendenti
            Alter.Table("Employees").AddColumn("InsertDate").AsDateTime().Nullable();
            Alter.Table("Employees").AddColumn("InsertUserId").AsInt32().Nullable();
            Alter.Table("Employees").AddColumn("UpdateDate").AsDateTime().Nullable();
            Alter.Table("Employees").AddColumn("UpdateUserId").AsInt32().Nullable();

            //Nuovi attributi della tabella utilizzi
            Alter.Table("EquipmentUsages").AddColumn("InsertDate").AsDateTime().Nullable();
            Alter.Table("EquipmentUsages").AddColumn("InsertUserId").AsInt32().Nullable();
            Alter.Table("EquipmentUsages").AddColumn("UpdateDate").AsDateTime().Nullable();
            Alter.Table("EquipmentUsages").AddColumn("UpdateUserId").AsInt32().Nullable();

            //Nuovi attributi della tabella mezzi/attrezzature
            Alter.Table("Equipments").AddColumn("InsertDate").AsDateTime().Nullable();
            Alter.Table("Equipments").AddColumn("InsertUserId").AsInt32().Nullable();
            Alter.Table("Equipments").AddColumn("UpdateDate").AsDateTime().Nullable();
            Alter.Table("Equipments").AddColumn("UpdateUserId").AsInt32().Nullable();
        }

    }
}