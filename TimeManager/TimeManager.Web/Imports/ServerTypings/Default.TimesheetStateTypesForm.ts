namespace TimeManager.Default {
    export interface TimesheetStateTypesForm {
        Description: Serenity.StringEditor;
    }

    export class TimesheetStateTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TimesheetStateTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TimesheetStateTypesForm.init)  {
                TimesheetStateTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TimesheetStateTypesForm, [
                    'Description', w0
                ]);
            }
        }
    }
}

