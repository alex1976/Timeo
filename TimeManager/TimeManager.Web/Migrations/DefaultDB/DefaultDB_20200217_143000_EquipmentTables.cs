using FluentMigrator;
using System;


namespace TimeManager.Migrations.DefaultDB
{
    [Migration(20200217143000)]
    public class DefaultDB_20200217_143000_EquipmentTables : AutoReversingMigration
    {
        public override void Up()
        {
            //Tipo mezzo/attrezzatura/materiale
            this.CreateTableWithId32("EquipmentTypes", "EquipmentTypeId", s => s
               .WithColumn("Description").AsString(250).NotNullable()
             );

            //Valori della tabella EquipmentTypes
            Insert.IntoTable("EquipmentTypes")
            .Row(new { Description = "Attrezzatura" })
            .Row(new { Description = "Materiale" })
            .Row(new { Description = "Mezzo" });

            //Unita di misura
            this.CreateTableWithId32("UnitOfMeasures", "UnitOfMeasureId", s => s
              .WithColumn("Description").AsString(250).NotNullable()
            );

            //Valori della tabella UnitOfMeasures
            Insert.IntoTable("UnitOfMeasures")
            .Row(new { Description = "H" })
            .Row(new { Description = "L" })
            .Row(new { Description = "MT" })
            .Row(new { Description = "MC" })
            .Row(new { Description = "MQ" })
            .Row(new { Description = "KG" })
            .Row(new { Description = "KM" });

            //Anagrafica di attrezzature/mezzi/materiali
            this.CreateTableWithId32("Equipments", "EquipmentId", s => s
                .WithColumn("MnemonicId").AsString(50).Nullable()
                .WithColumn("Description").AsString(250).Nullable()
                .WithColumn("Note").AsString(1000).Nullable()
                .WithColumn("EquipmentTypeId").AsInt32().Nullable()
                   .ForeignKey("FK_Equipment_EquipmentTypeId", "EquipmentTypes", "EquipmentTypeId")
                .WithColumn("UnitOfMeasureId").AsInt32().Nullable()
                   .ForeignKey("FK_Equipment_UnitOfMeasureId", "UnitOfMeasures", "UnitOfMeasureId")
                .WithColumn("EarnRate").AsDecimal(28, 14).Nullable()
                .WithColumn("CostRate").AsDecimal(28, 14).Nullable()
                .WithColumn("ParentEquipmentId").AsInt32().Nullable()
                   .ForeignKey("FK_Equipment_ParentEquipment", "Equipments", "EquipmentId"), checkExists: true
              );

            //Utilizzo di attrezzature e mezzi
            this.CreateTableWithId32("EquipmentUsages", "EquipmentUsageId", s => s
                .WithColumn("MnemonicId").AsString(50).Nullable()
                .WithColumn("Description").AsString(250).Nullable()
                .WithColumn("Date").AsDateTime().Nullable()
                .WithColumn("CustomerId").AsInt32().Nullable()
                   .ForeignKey("FK_CustomerId", "Customers", "CustomerId")
                .WithColumn("EquipmentId").AsInt32().NotNullable()
                   .ForeignKey("FK_EquipmentUsage_EquipmentId", "Equipments", "EquipmentId")
                .WithColumn("ContractId").AsInt32().Nullable()
                   .ForeignKey("FK_EquipmentUsage_ContractId", "Contracts", "ContractId")
                .WithColumn("ActivityId").AsInt32().Nullable()
                   .ForeignKey("FK_EquipmentUsage_ActivityId", "Activities", "ActivityId")
                .WithColumn("TimesheetStateTypeId").AsInt32().Nullable()
                   .ForeignKey("FK_EquipmentUsage_TimesheetStateTypeId", "TimesheetStateTypes", "TimesheetStateTypeId")
                .WithColumn("Quantity").AsDecimal(28, 14).Nullable()
                .WithColumn("Distance").AsDecimal(28, 14).Nullable()
                .WithColumn("Amount").AsDecimal(28, 14).Nullable()
                .WithColumn("DistanceAmount").AsDecimal(28, 14).Nullable()
                .WithColumn("Attachments").AsString(int.MaxValue).Nullable()
                );
        }
        //public override void Down() { }
    }
}