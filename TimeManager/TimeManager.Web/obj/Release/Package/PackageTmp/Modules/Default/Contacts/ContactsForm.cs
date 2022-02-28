
namespace TimeManager.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Contacts")]
    [BasedOnRow(typeof(Entities.ContactsRow), CheckNames = true)]
    public class ContactsForm
    {
        public String Title { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String Email { get; set; }
        public String IdentityNo { get; set; }
        public Int32 UserId { get; set; }
    }
}