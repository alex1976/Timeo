namespace TimeManager.Default {
    export interface ContractsRow {
        ContractId?: number;
        MnemonicId?: string;
        Description?: string;
        StartDate?: string;
        EndDate?: string;
        CustomerId?: number;
        OrdinaryEarnRate?: number;
        OvertimeEarnRate?: number;
        NotWorking1EarnRate?: number;
        NotWorking2EarnRate?: number;
        CustomerMnemonicId?: string;
        CustomerDescription?: string;
        CustomerFiscalCode?: string;
        CustomerVatCode?: string;
        CustomerAddress?: string;
        CustomerLocation?: string;
        CustomerPhoneNumber1?: string;
        CustomerPhoneNumber2?: string;
        CustomerPhoneNumber3?: string;
        CustomerEMail?: string;
    }

    export namespace ContractsRow {
        export const idProperty = 'ContractId';
        export const nameProperty = 'MnemonicId';
        export const localTextPrefix = 'Default.Contracts';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ContractId = "ContractId",
            MnemonicId = "MnemonicId",
            Description = "Description",
            StartDate = "StartDate",
            EndDate = "EndDate",
            CustomerId = "CustomerId",
            OrdinaryEarnRate = "OrdinaryEarnRate",
            OvertimeEarnRate = "OvertimeEarnRate",
            NotWorking1EarnRate = "NotWorking1EarnRate",
            NotWorking2EarnRate = "NotWorking2EarnRate",
            CustomerMnemonicId = "CustomerMnemonicId",
            CustomerDescription = "CustomerDescription",
            CustomerFiscalCode = "CustomerFiscalCode",
            CustomerVatCode = "CustomerVatCode",
            CustomerAddress = "CustomerAddress",
            CustomerLocation = "CustomerLocation",
            CustomerPhoneNumber1 = "CustomerPhoneNumber1",
            CustomerPhoneNumber2 = "CustomerPhoneNumber2",
            CustomerPhoneNumber3 = "CustomerPhoneNumber3",
            CustomerEMail = "CustomerEMail"
        }
    }
}

