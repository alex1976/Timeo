namespace TimeManager.Default {
    export interface ContractsForm {
        MnemonicId: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        CustomerId: Serenity.IntegerEditor;
        OrdinaryEarnRate: Serenity.DecimalEditor;
        OvertimeEarnRate: Serenity.DecimalEditor;
        NotWorking1EarnRate: Serenity.DecimalEditor;
        NotWorking2EarnRate: Serenity.DecimalEditor;
    }

    export class ContractsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Contracts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ContractsForm.init)  {
                ContractsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(ContractsForm, [
                    'MnemonicId', w0,
                    'Description', w0,
                    'StartDate', w1,
                    'EndDate', w1,
                    'CustomerId', w2,
                    'OrdinaryEarnRate', w3,
                    'OvertimeEarnRate', w3,
                    'NotWorking1EarnRate', w3,
                    'NotWorking2EarnRate', w3
                ]);
            }
        }
    }
}

