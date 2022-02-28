namespace TimeManager.Default {
    export interface EmployeesForm {
        MnemonicId: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Address: Serenity.StringEditor;
        Location: Serenity.StringEditor;
        PhoneNumber1: Serenity.StringEditor;
        PhoneNumber2: Serenity.StringEditor;
        PhoneNumber3: Serenity.StringEditor;
        EMail: Serenity.EmailEditor;
        UserId: Serenity.LookupEditor;
    }

    export class EmployeesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Employees';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeesForm.init)  {
                EmployeesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.EmailEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(EmployeesForm, [
                    'MnemonicId', w0,
                    'Description', w1,
                    'Address', w0,
                    'Location', w0,
                    'PhoneNumber1', w0,
                    'PhoneNumber2', w0,
                    'PhoneNumber3', w0,
                    'EMail', w2,
                    'UserId', w3
                ]);
            }
        }
    }
}

