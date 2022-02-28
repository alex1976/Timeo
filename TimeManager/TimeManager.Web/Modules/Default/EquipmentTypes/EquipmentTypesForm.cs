
namespace TimeManager.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.EquipmentTypes")]
    [BasedOnRow(typeof(Entities.EquipmentTypesRow), CheckNames = true)]
    public class EquipmentTypesForm
    {
        public String Description { get; set; }
    }
}