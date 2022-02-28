
namespace TimeManager.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Equipments")]
    [BasedOnRow(typeof(Entities.EquipmentsRow), CheckNames = true)]
    public class EquipmentsForm
    {
        [Category("Anagrafica materiale/mezzo/attrezzatura")]
        public String MnemonicId { get; set; }
        [TextAreaEditor(Rows = 3)]
        [Placeholder("inserisci la descrizione del materiale/mezzo/attrezzatura ... ")]
        public String Description { get; set; }
        [TextAreaEditor(Rows = 5)]
        [Placeholder("inserisci eventuali note del materiale/mezzo/attrezzatura ... ")]
        public String Note { get; set; }
        public Int32 EquipmentTypeId { get; set; }
        public Int32 UnitOfMeasureId { get; set; }
        [DecimalEditor(Decimals = 2), AlignRight()]
        public Decimal EarnRate { get; set; }
        [DecimalEditor(Decimals = 2), AlignRight()]
        public Decimal CostRate { get; set; }
        //public Int32 ParentEquipmentId { get; set; }
    }
}