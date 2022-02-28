
namespace TimeManager.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Activities")]
    [BasedOnRow(typeof(Entities.ActivitiesRow), CheckNames = true)]
    public class ActivitiesForm
    {
        [Tab("DATI ATTIVITA'")]
        [Category("Generale")]
        [Placeholder("inserisci il codice attività ... es. anno.mese.giorno")]
        public String MnemonicId { get; set; }
        [TextAreaEditor(Rows = 3)]
        [Placeholder("inserisci la descrizione attività ... ")]
        public String Description { get; set; }
        [TextAreaEditor(Rows = 3)]
        [Placeholder("inserisci eventuali note per l'attività ... ")]
        public String Note { get; set; }
        //[TextAreaEditor(Rows = 3)]
        [Placeholder("inserisci link prelevato da google map e altro sistema ... ")]
        [UrlFormatter()]
        public String MapUrl { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Int32 CustomerId { get; set; }
        public Int32 EmployeeId { get; set; }
        public Int32 PriorityId { get; set; }
        //public Int32 TagId { get; set; }
        //public Int32 ContractId { get; set; }
        public Int32 TimesheetStateTypeId { get; set; }

        //public String Tags { get; set; }
        //public Int32 ParentActivityId { get; set; }

        [Category("Rilevamento lavoro")]
        //public Int32 ContractId { get; set; }
        [DecimalEditor(Decimals = 2)]
        public Decimal EstimatedWork { get; set; }
        [DecimalEditor(Decimals = 2)]
        public Decimal ActualWork { get; set; }
        [DecimalEditor(Decimals = 2)]
        public Decimal RemainingWork { get; set; }

        [Tab("ALLEGATI")]
        [Category("Documenti/Foto")]
        public String Attachments { get; set; }
    }
}