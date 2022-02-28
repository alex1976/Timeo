
namespace TimeManager.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Contracts")]
    [BasedOnRow(typeof(Entities.ContractsRow), CheckNames = true)]
    public class ContractsForm
    {
        public String MnemonicId { get; set; }
        [TextAreaEditor(Rows = 3)]
        [Placeholder("inserisci la descrizione del contratto/commessa ... ")]
        public String Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Int32 CustomerId { get; set; }
        //public Decimal OrdinaryEarnRate { get; set; }
        //public Decimal OvertimeEarnRate { get; set; }
        //public Decimal NotWorking1EarnRate { get; set; }
        //public Decimal NotWorking2EarnRate { get; set; }
    }
}