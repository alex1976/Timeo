
namespace TimeManager.Default.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Collections.Generic;
    using System.Linq;
    using MyRow = Entities.TimesheetsRow;
    using TimeManager.Default.Entities;

    public class TimesheetsRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //ricalcolo dell'avanzamento sull'attività collegata
            {

                var t = ActivitiesRow.Fields;
                var activityId = request.Entity.ActivityId;

                if (activityId != null)
                {
                    var actualwork = request.Entity.Ordinary / 60;
                    String Expression = "[ActivityId] = " + activityId;
                    var connection = SqlConnections.NewFor<ActivitiesRow>();

                    //recupero vecchio valore di actual
                    foreach (var activity in connection.Query<ActivitiesRow>(new SqlQuery().Select("MnemonicId").Select("ActualWork").From(t).Where(Expression)))
                    {
                        if (activity.ActualWork != null)
                            actualwork += activity.ActualWork;

                    }

                    //aggiorno il valore di actual
                    connection.UpdateById(new ActivitiesRow
                    {
                        ActivityId = activityId,
                        ActualWork = actualwork,
                    }) ;
                }

            }

            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //non viene accettata una modifica del record se la data è minore o uguale a quella di chiusura           
            {
                var t = SettingsRow.Fields;
                var connection = SqlConnections.NewFor<SettingsRow>();
                foreach (var stg in connection.Query<SettingsRow>(new SqlQuery().Select("ClosingDate").From(t)))
                {
                    if (request.Entity.Date <= stg.ClosingDate)
                    {
                        //throw new System.ArgumentException("Invalid date, registration is closed");
                        throw new System.InvalidOperationException(Texts.Forms.Timesheet.InvalidDate);
                        //return new SaveResponse();
                    }
                }
            }

            //ricalcolo dell'avanzamento sull'attività collegata
            {

                var t = ActivitiesRow.Fields;
                var t2 = TimesheetsRow.Fields;
                var activityId = request.Entity.ActivityId;

                if (activityId != null)
                {
                    var actualwork = request.Entity.Ordinary / 60;
                    String Expression = "[ActivityId] = " + activityId;
                    string Expression2 = "[TimesheetId] = " + request.Entity.TimesheetId;
                    var connection = SqlConnections.NewFor<ActivitiesRow>();

                    //recupero il vecchio valore della riga corrente da sottrarre per il successivo aggiornamento
                    foreach (var timesheet in connection.Query<TimesheetsRow>(new SqlQuery().Select("Ordinary").From(t2).Where(Expression2)))
                    {
                        if (timesheet.Ordinary != null)
                            actualwork -= timesheet.Ordinary / 60;
                    }

                    //recupero vecchio valore di actual
                    foreach (var activity in connection.Query<ActivitiesRow>(new SqlQuery().Select("MnemonicId").Select("ActualWork").From(t).Where(Expression)))
                    {
                        if (activity.ActualWork != null)
                            actualwork += activity.ActualWork;
                    }

                    //aggiorno il valore di actual
                    connection.UpdateById(new ActivitiesRow
                    {
                        ActivityId = activityId,
                        ActualWork = actualwork,
                    });
                }

            }

            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> {

            protected override void ApplyFilters(SqlQuery query)
            {

                base.ApplyFilters(query);

                //recupero dati utente corrente
                string UserId = Authorization.UserId;
                string Username = Authorization.Username;
                bool Admin = Authorization.HasPermission("Administration:Security");

                //recupero dipendente collegato ad utente corrente e impostazione del filtro
                if (!Admin)
                {
                    String Expression = "";
                    var u = EmployeesRow.Fields;
                    IDictionary<int, int> employeeNames;
                    using (var connection = SqlConnections.NewFor<EmployeesRow>())
                        employeeNames = connection.Query(new SqlQuery()
                                .From(u)
                                .Select(u.EmployeeId)
                                .Select(u.UserId)
                                .Where(u.UserDisplayName == Username))
                                .ToDictionary(x => (int)x.EmployeeId, x => (int)x.UserId);

                    Expression = "T0.[EmployeeId] = " + employeeNames.Keys.ElementAt(0);
                    query.Where(Expression).ToString();
                }

            }
        }
    }
}