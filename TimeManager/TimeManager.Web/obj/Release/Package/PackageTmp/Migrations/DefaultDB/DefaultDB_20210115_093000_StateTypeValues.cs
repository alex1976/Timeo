using FluentMigrator;
using System;

namespace TimeManager.Migrations.DefaultDB
{
    [Migration(20210115093000)]
    public class DefaultDB_20210115_093000_StateTypeValues : AutoReversingMigration
    {
        public override void Up()
        {
           
            //Valori della tabella EquipmentTypes
            Insert.IntoTable("TimesheetStateTypes")
            .Row(new { Description = "Da fare" })
            .Row(new { Description = "In corso" })
            .Row(new { Description = "Fatto" });

        }

    }
}