
namespace TimeManager.Default.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Collections.Generic;
    using System.Linq;
    using MyRow = Entities.EquipmentUsagesRow;
    using TimeManager.Default.Entities;

    public class EquipmentUsagesRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            
            //Calcolo importo
            {
                var connection = SqlConnections.NewFor<EquipmentsRow>();
                var t = EquipmentsRow.Fields;
                var costRate = request.Entity.EquipmentCostRate;
                String Expression = "";
                Expression = "T0.[EquipmentId] = " + request.Entity.EquipmentId;

                //recupero il costo unitario
                foreach (var equipment in connection.Query<EquipmentsRow>(new SqlQuery().Select("CostRate").From(t).Where(Expression)))
                {
                    if (equipment.CostRate != null)
                    {
                        if (request.Entity.CostRate == null)
                            request.Entity.CostRate = equipment.CostRate;

                        if (request.Entity.Quantity != null)
                            request.Entity.Amount = request.Entity.Quantity * request.Entity.CostRate;
                    }
                    else
                    {
                        if (request.Entity.Quantity != null && request.Entity.CostRate != null)
                            request.Entity.Amount = request.Entity.Quantity * request.Entity.CostRate;
                    }
                }

            }

            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //Calcolo importo
            {
                var connection = SqlConnections.NewFor<EquipmentsRow>();
                var t = EquipmentsRow.Fields;
                var costRate = request.Entity.EquipmentCostRate;
                String Expression = "";
                Expression = "T0.[EquipmentId] = " + request.Entity.EquipmentId;

                //recupero il costo unitario
                foreach (var equipment in connection.Query<EquipmentsRow>(new SqlQuery().Select("CostRate").From(t).Where(Expression)))
                {
                    if (equipment.CostRate != null)
                    {
                        if (request.Entity.CostRate == null)
                            request.Entity.CostRate = equipment.CostRate;

                        if (request.Entity.Quantity != null)
                            request.Entity.Amount = request.Entity.Quantity * request.Entity.CostRate;
                    }
                    else
                    {
                        if (request.Entity.Quantity != null && request.Entity.CostRate != null)
                            request.Entity.Amount = request.Entity.Quantity * request.Entity.CostRate;
                    }
                }

            }

            //non viene accettata una modifica del record se la data è minore o uguale a quella di chiusura
            {
                var t = SettingsRow.Fields;
                var connection = SqlConnections.NewFor<SettingsRow>();
                foreach (var stg in connection.Query<SettingsRow>(new SqlQuery().Select("ClosingDate").From(t)))
                {
                    if (request.Entity.Date <= stg.ClosingDate)
                    {
                        //throw new System.ArgumentException("Invalid date, registration is closed");
                        throw new System.InvalidOperationException("Invalid date, registration is closed");
                        //return new SaveResponse();
                    }
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

            //protected override void ApplyFilters(SqlQuery query)
            //{

            //    base.ApplyFilters(query);

            //    //recupero dati utente corrente
            //    string UserId = Authorization.UserId;
            //    string Username = Authorization.Username;

            //    //recupero dipendente collegato ad utente corrente e impostazione del filtro
            //    if (Username != "admin" && Username != "Admin")
            //    {
            //        String Expression = "";
            //        var u = EmployeesRow.Fields;
            //        IDictionary<int, int> employeeNames;
            //        using (var connection = SqlConnections.NewFor<EmployeesRow>())
            //            employeeNames = connection.Query(new SqlQuery()
            //                    .From(u)
            //                    .Select(u.EmployeeId)
            //                    .Select(u.UserId)
            //                    .Where(u.UserDisplayName == Username))
            //                    .ToDictionary(x => (int)x.EmployeeId, x => (int)x.UserId);

            //        Expression = "T0.[EmployeeId] = " + employeeNames.Keys.ElementAt(0);
            //        query.Where(Expression).ToString();
            //    }

            //}

        }
    }
}