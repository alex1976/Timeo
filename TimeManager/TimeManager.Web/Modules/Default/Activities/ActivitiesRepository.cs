
namespace TimeManager.Default.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Core;
    using System;
    using System.Data;
    using System.Collections.Generic;
    using System.Linq;
    using MyRow = Entities.ActivitiesRow;
    using TimeManager.Default.Entities;

    public class ActivitiesRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
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
                                .Where(u.UserId== UserId))
                                .ToDictionary(x => (int)x.EmployeeId, x => (int)x.UserId);

                    //solo utente corrente o null
                    if (employeeNames != null)
                        Expression = "(T0.[EmployeeId] = " + employeeNames.Keys.ElementAt(0) + " OR T0.[EmployeeId] is null)";

                    //escludo attività in stato "fatto"
                    Expression += " AND (T0.[TimesheetStateTypeId] is null OR T0.[TimesheetStateTypeId] <> 3)";

                    query.Where(Expression).ToString();
                }

            }
        }
    }
}