﻿namespace TimeManager.Default.Entities
{
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), DisplayName("ReportOreClienteDipendente"), InstanceName("ReportOreClienteDipendente"), TwoLevelCached]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class ReportOreClienteDipendenteRow : Row, INameRow
    {
        
        [DisplayName("CustomerDescription"), Size(250), NotNull, QuickSearch]
        public String CustomerDescription
        {
            get { return Fields.CustomerDescription[this]; }
            set { Fields.CustomerDescription[this] = value; }
        }

        [DisplayName("EmployeeDescription"), Size(150), NotNull, QuickSearch]
        public String EmployeeDescription
        {
            get { return Fields.EmployeeDescription[this]; }
            set { Fields.EmployeeDescription[this] = value; }
        }

        [DisplayName("Date"), Size(150)]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Ordinary"), Size(20), Scale(4)]
        public Decimal? Ordinary
        {
            get { return Fields.Ordinary[this]; }
            set { Fields.Ordinary[this] = value; }
        }

        [DisplayName("Overtime"), Size(20), Scale(4)]
        public Decimal? Overtime
        {
            get { return Fields.Overtime[this]; }
            set { Fields.Overtime[this] = value; }
        }

        [DisplayName("Description"), Size(250), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CustomerDescription; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ReportOreClienteDipendenteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField CustomerDescription;
            public StringField EmployeeDescription;
            public DateTimeField Date;
            public DecimalField Ordinary;
            public DecimalField Overtime;
            public StringField Description;

            public RowFields()
                : base("[ReportOreClienteDipendente]")
            {
                LocalTextPrefix = "Default.ReportOreClienteDipendente";
            }
        }
    }
}