
namespace TimeManager.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Employees")]
    [BasedOnRow(typeof(Entities.EmployeesRow), CheckNames = true)]
    public class EmployeesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmployeeId { get; set; }
        [EditLink, Width(50)]
        public String MnemonicId { get; set; }
        [EditLink, Width(250)]
        public String Description { get; set; }
        [Width(100)]
        public String Address { get; set; }
        [Width(100)]
        public String Location { get; set; }
        [Width(100)]
        public String PhoneNumber1 { get; set; }
        [Width(100)]
        public String PhoneNumber2 { get; set; }
        [Width(100)]
        public String PhoneNumber3 { get; set; }
        public String UserDisplayName { get; set; }
    }
}