namespace TimeManager.Default {
    export interface BusinessUnitsForm {
        Name: Serenity.StringEditor;
        ParentUnitId: Serenity.IntegerEditor;
    }

    export class BusinessUnitsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.BusinessUnits';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BusinessUnitsForm.init)  {
                BusinessUnitsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(BusinessUnitsForm, [
                    'Name', w0,
                    'ParentUnitId', w1
                ]);
            }
        }
    }
}

