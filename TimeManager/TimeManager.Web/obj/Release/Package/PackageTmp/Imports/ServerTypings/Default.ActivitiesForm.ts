namespace TimeManager.Default {
    export interface ActivitiesForm {
        MnemonicId: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Note: Serenity.TextAreaEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        CustomerId: Serenity.LookupEditor;
        Tags: Serenity.StringEditor;
        ParentActivityId: Serenity.LookupEditor;
        EstimatedWork: Serenity.DecimalEditor;
        ActualWork: Serenity.DecimalEditor;
        RemainingWork: Serenity.DecimalEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }

    export class ActivitiesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Activities';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ActivitiesForm.init)  {
                ActivitiesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.MultipleImageUploadEditor;

                Q.initFormType(ActivitiesForm, [
                    'MnemonicId', w0,
                    'Description', w1,
                    'Note', w1,
                    'StartDate', w2,
                    'EndDate', w2,
                    'CustomerId', w3,
                    'Tags', w0,
                    'ParentActivityId', w3,
                    'EstimatedWork', w4,
                    'ActualWork', w4,
                    'RemainingWork', w4,
                    'Attachments', w5
                ]);
            }
        }
    }
}

