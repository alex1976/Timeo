
namespace TimeManager.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.EquipmentUsages")]
    [BasedOnRow(typeof(Entities.EquipmentUsagesRow), CheckNames = true)]
    public class EquipmentUsagesForm
    {
        [Category("Registrazione utilizzo mezzo/materiale")]
        [DefaultValue("now")]
        public DateTime Date { get; set; }
        //public String MnemonicId { get; set; }
        public Int32 EquipmentId { get; set; }
        public Int32 CustomerId { get; set; }
        public Int32 ActivityId { get; set; }
        //public String EquipmentUnitOfMeasureDescription { get; set; }
        [DecimalEditor(Decimals = 3), AlignRight()]
        public Decimal Quantity { get; set; }
        [DecimalEditor(Decimals = 3), AlignRight()]
        public Decimal CostRate { get; set; }
        [DecimalEditor(Decimals = 2), AlignRight()]
        public Decimal Amount { get; set; }
        [DecimalEditor(Decimals = 2), AlignRight()]
        public Decimal Distance { get; set; }
        [TextAreaEditor(Rows = 3)]
        [Placeholder("inserisci la descrizione o eventuali dettagli aggiuntivi ... ")]
        public String Description { get; set; }
        //public Int32 ContractId { get; set; }
        //public Int32 ActivityId { get; set; }
        [Category("Allegati")]
        public String Attachments { get; set; }
    }
}