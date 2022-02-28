using FluentMigrator;
using System;

namespace TimeManager.Migrations.DefaultDB
{
    [Migration(20200331093000)]
    public class DefaultDB_20200331_093000_Geolocalization : AutoReversingMigration
    {
        public override void Up()
        {
            //Tags
            this.CreateTableWithId32("Tags", "TagId", s => s
               .WithColumn("Description").AsString(100).NotNullable()
               );

            //Priority
            this.CreateTableWithId32("Priorities", "PriorityId", s => s
               .WithColumn("Description").AsString(100).NotNullable()
               );

            //Valori della tabella EquipmentTypes
            Insert.IntoTable("Priorities")
            .Row(new { Description = "Alta" })
            .Row(new { Description = "Normale" })
            .Row(new { Description = "Bassa" });

            //Nuovi attributi della tabella attività
            Alter.Table("Activities").AddColumn("TagId").AsInt32().Nullable()
                .ForeignKey("FK_Activity_TagId", "Tags", "TagId");
            Alter.Table("Activities").AddColumn("PriorityId").AsInt32().Nullable()
                .ForeignKey("FK_Activity_PriorityId", "Priorities", "PriorityId");
            Alter.Table("Activities").AddColumn("MapUrl").AsString(1000).Nullable();
            Alter.Table("Activities").AddColumn("Color").AsString(50).Nullable();

            //Nuovi attributi della tabella rapportini
            Alter.Table("Timesheets").AddColumn("MapUrl").AsString(1000).Nullable();

            //Nuovi attributi della tabella utilizzi
            Alter.Table("EquipmentUsages").AddColumn("MapUrl").AsString(1000).Nullable();
        }

    }
}