namespace TimeManager.Default {
    export interface EquipmentsForm {
        MnemonicId: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Note: Serenity.TextAreaEditor;
        EquipmentTypeId: Serenity.LookupEditor;
        UnitOfMeasureId: Serenity.LookupEditor;
        EarnRate: Serenity.DecimalEditor;
        CostRate: Serenity.DecimalEditor;
    }

    export class EquipmentsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Equipments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EquipmentsForm.init)  {
                EquipmentsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(EquipmentsForm, [
                    'MnemonicId', w0,
                    'Description', w1,
                    'Note', w1,
                    'EquipmentTypeId', w2,
                    'UnitOfMeasureId', w2,
                    'EarnRate', w3,
                    'CostRate', w3
                ]);
            }
        }
    }
}

