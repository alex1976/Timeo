namespace TimeManager.Default {
    export interface UnitOfMeasuresForm {
        Description: Serenity.StringEditor;
    }

    export class UnitOfMeasuresForm extends Serenity.PrefixedContext {
        static formKey = 'Default.UnitOfMeasures';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UnitOfMeasuresForm.init)  {
                UnitOfMeasuresForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(UnitOfMeasuresForm, [
                    'Description', w0
                ]);
            }
        }
    }
}

