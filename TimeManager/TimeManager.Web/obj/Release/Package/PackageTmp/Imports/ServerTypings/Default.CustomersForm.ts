namespace TimeManager.Default {
    export interface CustomersForm {
        MnemonicId: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        FiscalCode: Serenity.StringEditor;
        VatCode: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Location: Serenity.StringEditor;
        PhoneNumber1: Serenity.StringEditor;
        PhoneNumber2: Serenity.StringEditor;
        PhoneNumber3: Serenity.StringEditor;
        EMail: Serenity.EmailEditor;
    }

    export class CustomersForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Customers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomersForm.init)  {
                CustomersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.EmailEditor;

                Q.initFormType(CustomersForm, [
                    'MnemonicId', w0,
                    'Description', w1,
                    'FiscalCode', w0,
                    'VatCode', w0,
                    'Address', w0,
                    'Location', w0,
                    'PhoneNumber1', w0,
                    'PhoneNumber2', w0,
                    'PhoneNumber3', w0,
                    'EMail', w2
                ]);
            }
        }
    }
}

