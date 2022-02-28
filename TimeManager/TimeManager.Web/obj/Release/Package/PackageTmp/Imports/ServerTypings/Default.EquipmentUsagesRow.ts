namespace TimeManager.Default {
    export interface EquipmentUsagesRow {
        EquipmentUsageId?: number;
        MnemonicId?: string;
        Description?: string;
        Date?: string;
        CustomerId?: number;
        EquipmentId?: number;
        ContractId?: number;
        ActivityId?: number;
        TimesheetStateTypeId?: number;
        Quantity?: number;
        Distance?: number;
        Amount?: number;
        DistanceAmount?: number;
        Attachments?: string;
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
        EquipmentMnemonicId?: string;
        EquipmentDescription?: string;
        EquipmentNote?: string;
        EquipmentEquipmentTypeId?: number;
        EquipmentUnitOfMeasureId?: number;
        EquipmentEarnRate?: number;
        EquipmentCostRate?: number;
        EquipmentParentEquipmentId?: number;
        ContractMnemonicId?: string;
        ContractDescription?: string;
        ContractStartDate?: string;
        ContractEndDate?: string;
        ContractCustomerId?: number;
        ContractOrdinaryEarnRate?: number;
        ContractOvertimeEarnRate?: number;
        ContractNotWorking1EarnRate?: number;
        ContractNotWorking2EarnRate?: number;
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
        TimesheetStateTypeDescription?: string;
    }

    export namespace EquipmentUsagesRow {
        export const idProperty = 'EquipmentUsageId';
        export const nameProperty = 'MnemonicId';
        export const localTextPrefix = 'Default.EquipmentUsages';
        export const deletePermission = 'Default:EquipmentUsages:Delete';
        export const insertPermission = 'Default:EquipmentUsages:Management';
        export const readPermission = 'Default:EquipmentUsages:Read';
        export const updatePermission = 'Default:EquipmentUsages:Management';

        export declare const enum Fields {
            EquipmentUsageId = "EquipmentUsageId",
            MnemonicId = "MnemonicId",
            Description = "Description",
            Date = "Date",
            CustomerId = "CustomerId",
            EquipmentId = "EquipmentId",
            ContractId = "ContractId",
            ActivityId = "ActivityId",
            TimesheetStateTypeId = "TimesheetStateTypeId",
            Quantity = "Quantity",
            Distance = "Distance",
            Amount = "Amount",
            DistanceAmount = "DistanceAmount",
            Attachments = "Attachments",
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
            EquipmentMnemonicId = "EquipmentMnemonicId",
            EquipmentDescription = "EquipmentDescription",
            EquipmentNote = "EquipmentNote",
            EquipmentEquipmentTypeId = "EquipmentEquipmentTypeId",
            EquipmentUnitOfMeasureId = "EquipmentUnitOfMeasureId",
            EquipmentEarnRate = "EquipmentEarnRate",
            EquipmentCostRate = "EquipmentCostRate",
            EquipmentParentEquipmentId = "EquipmentParentEquipmentId",
            ContractMnemonicId = "ContractMnemonicId",
            ContractDescription = "ContractDescription",
            ContractStartDate = "ContractStartDate",
            ContractEndDate = "ContractEndDate",
            ContractCustomerId = "ContractCustomerId",
            ContractOrdinaryEarnRate = "ContractOrdinaryEarnRate",
            ContractOvertimeEarnRate = "ContractOvertimeEarnRate",
            ContractNotWorking1EarnRate = "ContractNotWorking1EarnRate",
            ContractNotWorking2EarnRate = "ContractNotWorking2EarnRate",
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
            ActivityParentActivityId = "ActivityParentActivityId",
            TimesheetStateTypeDescription = "TimesheetStateTypeDescription"
        }
    }
}

