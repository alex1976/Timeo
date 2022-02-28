namespace TimeManager.Default {
    export interface EquipmentTypesForm {
        Description: Serenity.StringEditor;
    }

    export class EquipmentTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.EquipmentTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EquipmentTypesForm.init)  {
                EquipmentTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(EquipmentTypesForm, [
                    'Description', w0
                ]);
            }
        }
    }
}

