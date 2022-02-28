namespace TimeManager.Default.Entities
{
    using Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [Report, RequiredPermission(PermissionKeys.General)]
    [Category("TimeManager/Reports"), DisplayName("Ore per cliente e dipendente")]
    public class ReportOreClienteDipendente : IReport, IDataOnlyReport
    {
        [DisplayName("Cliente")]
        public String Cliente { get; set; }

        [DisplayName("Data inizio")]
        public DateTime? StartDate { get; set; }

        [DisplayName("Data fine")]
        public DateTime? EndDate { get; set; }
        public object GetData()
        {
            using (var connection = SqlConnections.NewFor<Entities.ReportOreClienteDipendenteRow>())
            {
                //var s = ReportOreClienteDipendenteRow.Fields;
                //return connection.List<ReportOreClienteDipendenteRow>();

                //recupero dati utente corrente
                string UserId = Authorization.UserId;
                string Username = Authorization.Username;
                bool Admin = Authorization.HasPermission("Administration:Security");

                //recupero dipendente collegato ad utente corrente per verifica inserimento
                if (Admin)
                {
                    return connection.Query<Item>("ReportOreClienteDipendente",
                         param: new
                         {
                             cliente = Cliente,
                             DataInizio = StartDate,
                             DataFine = EndDate
                         },
                        commandType: System.Data.CommandType.StoredProcedure);
                }

                return null;
            }
        }

        public List<ReportColumn> GetColumnList()
        {
            return ReportColumnConverter.ObjectTypeToList(typeof(Item));
        }

        [BasedOnRow(typeof(Entities.ReportOreClienteDipendenteRow))]
        public class Item
        {
            public String Cliente { get; set; }
            public String Dipendente { get; set; }
            public DateTime Data { get; set; }
            public Decimal Ordinario { get; set; }
            public Decimal Extra { get; set; }
            public String Descrizione { get; set; }
        }
    }
}