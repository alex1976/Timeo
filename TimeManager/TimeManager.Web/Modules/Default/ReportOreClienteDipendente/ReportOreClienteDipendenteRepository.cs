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
    using MyRow = Entities.ReportOreClienteDipendenteRow;
    using TimeManager.Administration;
    using TimeManager.Membership;
    using TimeManager.Default.Entities;
    public class ReportOreClienteDipendenteRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}