namespace TimeManager.Default {
    export interface TimesheetsRow {
        TimesheetId?: number;
        MnemonicId?: string;
        Description?: string;
        Date?: string;
        CustomerId?: number;
        EmployeeId?: number;
        ContractId?: number;
        TimesheetStateTypeId?: number;
        ActivityId?: number;
        Ordinary?: number;
        Overtime?: number;
        NotWorking1?: number;
        NotWorking2?: number;
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
        ContractMnemonicId?: string;
        ContractDescription?: string;
        ContractStartDate?: string;
        ContractEndDate?: string;
        ContractCustomerId?: number;
        ContractOrdinaryEarnRate?: number;
        ContractOvertimeEarnRate?: number;
        ContractNotWorking1EarnRate?: number;
        ContractNotWorking2EarnRate?: number;
        TimesheetStateTypeDescription?: string;
        ActivityMnemonicId?: string;
        ActivityDescription?: string;
        ActivityNote?: string;
        ActivityStartDate?: string;
        ActivityEndDate?: string;
        ActivityEmployeeId?: number;
        ActivityCustomerId?: number;
        ActivityContractId?: number;
        ActivityEstimatedWork?: number;
        ActivityActualWork?: number;
        ActivityRemainingWork?: number;
        ActivityAttachments?: string;
        ActivityTags?: string;
        ActivityParentActivityId?: number;
    }

    export namespace TimesheetsRow {
        export const idProperty = 'TimesheetId';
        export const nameProperty = 'MnemonicId';
        export const localTextPrefix = 'Default.Timesheets';
        export const deletePermission = 'Default:Timesheets:Delete';
        export const insertPermission = 'Default:Timesheets:Management';
        export const readPermission = 'Default:Timesheets:Read';
        export const updatePermission = 'Default:Timesheets:Management';

        export declare const enum Fields {
            TimesheetId = "TimesheetId",
            MnemonicId = "MnemonicId",
            Description = "Description",
            Date = "Date",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId",
            ContractId = "ContractId",
            TimesheetStateTypeId = "TimesheetStateTypeId",
            ActivityId = "ActivityId",
            Ordinary = "Ordinary",
            Overtime = "Overtime",
            NotWorking1 = "NotWorking1",
            NotWorking2 = "NotWorking2",
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
            ContractMnemonicId = "ContractMnemonicId",
            ContractDescription = "ContractDescription",
            ContractStartDate = "ContractStartDate",
            ContractEndDate = "ContractEndDate",
            ContractCustomerId = "ContractCustomerId",
            ContractOrdinaryEarnRate = "ContractOrdinaryEarnRate",
            ContractOvertimeEarnRate = "ContractOvertimeEarnRate",
            ContractNotWorking1EarnRate = "ContractNotWorking1EarnRate",
            ContractNotWorking2EarnRate = "ContractNotWorking2EarnRate",
            TimesheetStateTypeDescription = "TimesheetStateTypeDescription",
            ActivityMnemonicId = "ActivityMnemonicId",
            ActivityDescription = "ActivityDescription",
            ActivityNote = "ActivityNote",
            ActivityStartDate = "ActivityStartDate",
            ActivityEndDate = "ActivityEndDate",
            ActivityEmployeeId = "ActivityEmployeeId",
            ActivityCustomerId = "ActivityCustomerId",
            ActivityContractId = "ActivityContractId",
            ActivityEstimatedWork = "ActivityEstimatedWork",
            ActivityActualWork = "ActivityActualWork",
            ActivityRemainingWork = "ActivityRemainingWork",
            ActivityAttachments = "ActivityAttachments",
            ActivityTags = "ActivityTags",
            ActivityParentActivityId = "ActivityParentActivityId"
        }
    }
}

