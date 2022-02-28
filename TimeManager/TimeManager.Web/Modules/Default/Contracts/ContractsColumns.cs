
namespace TimeManager.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Contracts")]
    [BasedOnRow(typeof(Entities.ContractsRow), CheckNames = true)]
    public class ContractsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ContractId { get; set; }
        [EditLink]
        public String MnemonicId { get; set; }
        public String Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public String CustomerMnemonicId { get; set; }
        //public Decimal OrdinaryEarnRate { get; set; }
        //public Decimal OvertimeEarnRate { get; set; }
        //public Decimal NotWorking1EarnRate { get; set; }
        //public Decimal NotWorking2EarnRate { get; set; }
    }
}