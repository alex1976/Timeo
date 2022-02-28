namespace TimeManager.Default {
    export interface ContactsForm {
        Title: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        IdentityNo: Serenity.StringEditor;
        UserId: Serenity.IntegerEditor;
    }

    export class ContactsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Contacts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ContactsForm.init)  {
                ContactsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(ContactsForm, [
                    'Title', w0,
                    'FirstName', w0,
                    'LastName', w0,
                    'Email', w0,
                    'IdentityNo', w0,
                    'UserId', w1
                ]);
            }
        }
    }
}

