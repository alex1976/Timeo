using FluentMigrator;
using System;

namespace TimeManager.Migrations.DefaultDB
{
    [Migration(20200225143000)]
    public class DefaultDB_20200225_143000_SettingTables : AutoReversingMigration
    {
        public override void Up()
        {
            //Impostazioni generali
            this.CreateTableWithId32("Settings", "SettingsId", s => s
                .WithColumn("Description").AsString(250).Nullable()
                .WithColumn("CompanyDescription").AsString(250).Nullable()
                .WithColumn("CompanyAddress").AsString(250).Nullable()
                .WithColumn("CompanyLocation").AsString(250).Nullable()
                .WithColumn("CompanyPhoneNumber1").AsString(250).Nullable()
                .WithColumn("CompanyPhoneNumber2").AsString(250).Nullable()
                .WithColumn("CompanyPhoneNumber3").AsString(250).Nullable()
                .WithColumn("CompanyMail").AsString(250).Nullable()
                .WithColumn("Attachments").AsString(int.MaxValue).Nullable()
                .WithColumn("ClosingDate").AsDateTime().Nullable()
                );

            Insert.IntoTable("Settings")
           .Row(new { Description = "Impostazioni generali" });
        }
    }
}