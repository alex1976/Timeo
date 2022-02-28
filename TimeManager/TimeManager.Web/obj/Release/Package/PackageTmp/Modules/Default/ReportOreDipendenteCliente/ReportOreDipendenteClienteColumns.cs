namespace TimeManager.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.ReportOreDipendenteCliente")]
    [BasedOnRow(typeof(Entities.ReportOreDipendenteClienteRow))]
    public class ReportOreDipendenteClienteColumns
    {
        [Width(250)]
        public String EmployeeDescription { get; set; }
        [Width(250), SortOrder(1)]
        public String CustomerDescription { get; set; }
        [Width(150)]
        public DateTime Date { get; set; }
        [Width(150), AlignRight, SortOrder(2, descending: true), DisplayFormat("#,##0.00")]
        public Decimal Ordinary { get; set; }
        [Width(150), AlignRight, SortOrder(2, descending: true), DisplayFormat("#,##0.00")]
        public Decimal Overtime { get; set; }
        [Width(250)]
        public String Description { get; set; }
    }
}