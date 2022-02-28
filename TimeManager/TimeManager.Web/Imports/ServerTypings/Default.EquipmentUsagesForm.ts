namespace TimeManager.Default {
    export interface EquipmentUsagesForm {
        Date: Serenity.DateEditor;
        CustomerId: Serenity.LookupEditor;
        EquipmentId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        Distance: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }

    export class EquipmentUsagesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.EquipmentUsages';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EquipmentUsagesForm.init)  {
                EquipmentUsagesForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.MultipleImageUploadEditor;

                Q.initFormType(EquipmentUsagesForm, [
                    'Date', w0,
                    'CustomerId', w1,
                    'EquipmentId', w1,
                    'Quantity', w2,
                    'Distance', w2,
                    'Description', w3,
                    'Attachments', w4
                ]);
            }
        }
    }
}

