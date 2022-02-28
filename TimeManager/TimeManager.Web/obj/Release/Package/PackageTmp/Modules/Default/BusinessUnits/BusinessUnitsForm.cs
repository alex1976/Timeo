
namespace TimeManager.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.BusinessUnits")]
    [BasedOnRow(typeof(Entities.BusinessUnitsRow), CheckNames = true)]
    public class BusinessUnitsForm
    {
        public String Name { get; set; }
        public Int32 ParentUnitId { get; set; }
    }
}