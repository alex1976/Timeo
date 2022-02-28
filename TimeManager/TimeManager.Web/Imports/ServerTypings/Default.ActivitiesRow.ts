namespace TimeManager.Default {
    export interface ActivitiesRow {
        ActivityId?: number;
        MnemonicId?: string;
        Description?: string;
        Note?: string;
        StartDate?: string;
        EndDate?: string;
        EmployeeId?: number;
        CustomerId?: number;
        ContractId?: number;
        EstimatedWork?: number;
        ActualWork?: number;
        RemainingWork?: number;
        Attachments?: string;
        Tags?: string;
        ParentActivityId?: number;
        EmployeeMnemonicId?: string;
        EmployeeDescription?: string;
        EmployeeAddress?: string;
        EmployeeLocation?: string;
        EmployeePhoneNumber1?: string;
        EmployeePhoneNumber2?: string;
        EmployeePhoneNumber3?: string;
        EmployeeEMail?: string;
        EmployeeOrdinaryCostRate?: number;
        EmployeeOvertimeCostRate?: number;
        EmployeeNotWorking1CostRate?: number;
        EmployeeNotWorking2CostRate?: number;
        EmployeeUserId?: number;
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
        ContractMnemonicId?: string;
        ContractDescription?: string;
        ContractStartDate?: string;
        ContractEndDate?: string;
        ContractCustomerId?: number;
        ContractOrdinaryEarnRate?: number;
        ContractOvertimeEarnRate?: number;
        ContractNotWorking1EarnRate?: number;
        ContractNotWorking2EarnRate?: number;
        ParentActivityDescription?: string;
    }

    export namespace ActivitiesRow {
        export const idProperty = 'ActivityId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Default.Activities';
        export const lookupKey = 'Default.Activities';

        export function getLookup(): Q.Lookup<ActivitiesRow> {
            return Q.getLookup<ActivitiesRow>('Default.Activities');
        }
        export const deletePermission = 'Default:Activities:Delete';
        export const insertPermission = 'Default:Activities:Management';
        export const readPermission = 'Default:Activities:Read';
        export const updatePermission = 'Default:Activities:Management';

        export declare const enum Fields {
            ActivityId = "ActivityId",
            MnemonicId = "MnemonicId",
            Description = "Description",
            Note = "Note",
            StartDate = "StartDate",
            EndDate = "EndDate",
            EmployeeId = "EmployeeId",
            CustomerId = "CustomerId",
            ContractId = "ContractId",
            EstimatedWork = "EstimatedWork",
            ActualWork = "ActualWork",
            RemainingWork = "RemainingWork",
            Attachments = "Attachments",
            Tags = "Tags",
            ParentActivityId = "ParentActivityId",
            EmployeeMnemonicId = "EmployeeMnemonicId",
            EmployeeDescription = "EmployeeDescription",
            EmployeeAddress = "EmployeeAddress",
            EmployeeLocation = "EmployeeLocation",
            EmployeePhoneNumber1 = "EmployeePhoneNumber1",
            EmployeePhoneNumber2 = "EmployeePhoneNumber2",
            EmployeePhoneNumber3 = "EmployeePhoneNumber3",
            EmployeeEMail = "EmployeeEMail",
            EmployeeOrdinaryCostRate = "EmployeeOrdinaryCostRate",
            EmployeeOvertimeCostRate = "EmployeeOvertimeCostRate",
            EmployeeNotWorking1CostRate = "EmployeeNotWorking1CostRate",
            EmployeeNotWorking2CostRate = "EmployeeNotWorking2CostRate",
            EmployeeUserId = "EmployeeUserId",
            CustomerMnemonicId = "CustomerMnemonicId",
            CustomerDescription = "CustomerDescription",
            CustomerFiscalCode = "CustomerFiscalCode",
            CustomerVatCode = "CustomerVatCode",
            CustomerAddress = "CustomerAddress",
            CustomerLocation = "CustomerLocation",
            CustomerPhoneNumber1 = "CustomerPhoneNumber1",
            CustomerPhoneNumber2 = "CustomerPhoneNumber2",
            CustomerPhoneNumber3 = "CustomerPhoneNumber3",
            CustomerEMail = "CustomerEMail",
            ContractMnemonicId = "ContractMnemonicId",
            ContractDescription = "ContractDescription",
            ContractStartDate = "ContractStartDate",
            ContractEndDate = "ContractEndDate",
            ContractCustomerId = "ContractCustomerId",
            ContractOrdinaryEarnRate = "ContractOrdinaryEarnRate",
            ContractOvertimeEarnRate = "ContractOvertimeEarnRate",
            ContractNotWorking1EarnRate = "ContractNotWorking1EarnRate",
            ContractNotWorking2EarnRate = "ContractNotWorking2EarnRate",
            ParentActivityDescription = "ParentActivityDescription"
        }
    }
}

