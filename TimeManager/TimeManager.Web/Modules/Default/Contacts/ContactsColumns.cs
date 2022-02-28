
namespace TimeManager.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Contacts")]
    [BasedOnRow(typeof(Entities.ContactsRow), CheckNames = true)]
    public class ContactsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ContactId { get; set; }
        [EditLink]
        public String Title { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String Email { get; set; }
        public String IdentityNo { get; set; }
        public String UserUsername { get; set; }
    }
}