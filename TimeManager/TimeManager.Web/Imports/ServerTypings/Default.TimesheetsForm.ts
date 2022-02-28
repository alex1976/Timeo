namespace TimeManager.Default {
    export interface TimesheetsForm {
        Date: Serenity.DateEditor;
        CustomerId: Serenity.LookupEditor;
        EmployeeId: Serenity.LookupEditor;
        ActivityId: Serenity.LookupEditor;
        Ordinary: Serenity.TimeEditor;
        Overtime: Serenity.TimeEditor;
        NotWorking1: Serenity.TimeEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class TimesheetsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Timesheets';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TimesheetsForm.init)  {
                TimesheetsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.TimeEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(TimesheetsForm, [
                    'Date', w0,
                    'CustomerId', w1,
                    'EmployeeId', w1,
                    'ActivityId', w1,
                    'Ordinary', w2,
                    'Overtime', w2,
                    'NotWorking1', w2,
                    'Description', w3
                ]);
            }
        }
    }
}

