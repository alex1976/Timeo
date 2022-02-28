namespace TimeManager.Default {
    export interface SettingsForm {
        Description: Serenity.StringEditor;
        CompanyDescription: Serenity.StringEditor;
        CompanyAddress: Serenity.StringEditor;
        CompanyLocation: Serenity.StringEditor;
        CompanyPhoneNumber1: Serenity.StringEditor;
        CompanyPhoneNumber2: Serenity.StringEditor;
        CompanyPhoneNumber3: Serenity.StringEditor;
        CompanyMail: Serenity.StringEditor;
        Attachments: Serenity.StringEditor;
        ClosingDate: Serenity.DateEditor;
    }

    export class SettingsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Settings';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SettingsForm.init)  {
                SettingsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(SettingsForm, [
                    'Description', w0,
                    'CompanyDescription', w0,
                    'CompanyAddress', w0,
                    'CompanyLocation', w0,
                    'CompanyPhoneNumber1', w0,
                    'CompanyPhoneNumber2', w0,
                    'CompanyPhoneNumber3', w0,
                    'CompanyMail', w0,
                    'Attachments', w0,
                    'ClosingDate', w1
                ]);
            }
        }
    }
}

