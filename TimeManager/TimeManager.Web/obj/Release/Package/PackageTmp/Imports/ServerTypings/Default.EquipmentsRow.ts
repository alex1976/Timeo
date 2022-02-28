namespace TimeManager.Default {
    export interface EquipmentsRow {
        EquipmentId?: number;
        MnemonicId?: string;
        Description?: string;
        Note?: string;
        EquipmentTypeId?: number;
        UnitOfMeasureId?: number;
        EarnRate?: number;
        CostRate?: number;
        ParentEquipmentId?: number;
        EquipmentTypeDescription?: string;
        UnitOfMeasureDescription?: string;
        ParentEquipmentMnemonicId?: string;
        ParentEquipmentDescription?: string;
        ParentEquipmentNote?: string;
        ParentEquipmentEquipmentTypeId?: number;
        ParentEquipmentUnitOfMeasureId?: number;
        ParentEquipmentEarnRate?: number;
        ParentEquipmentCostRate?: number;
        ParentEquipmentParentEquipmentId?: number;
    }

    export namespace EquipmentsRow {
        export const idProperty = 'EquipmentId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Default.Equipments';
        export const lookupKey = 'Default.Equipments';

        export function getLookup(): Q.Lookup<EquipmentsRow> {
            return Q.getLookup<EquipmentsRow>('Default.Equipments');
        }
        export const deletePermission = 'Default:Equipments:Delete';
        export const insertPermission = 'Default:Equipments:Management';
        export const readPermission = 'Default:Equipments:Read';
        export const updatePermission = 'Default:Equipments:Management';

        export declare const enum Fields {
            EquipmentId = "EquipmentId",
            MnemonicId = "MnemonicId",
            Description = "Description",
            Note = "Note",
            EquipmentTypeId = "EquipmentTypeId",
            UnitOfMeasureId = "UnitOfMeasureId",
            EarnRate = "EarnRate",
            CostRate = "CostRate",
            ParentEquipmentId = "ParentEquipmentId",
            EquipmentTypeDescription = "EquipmentTypeDescription",
            UnitOfMeasureDescription = "UnitOfMeasureDescription",
            ParentEquipmentMnemonicId = "ParentEquipmentMnemonicId",
            ParentEquipmentDescription = "ParentEquipmentDescription",
            ParentEquipmentNote = "ParentEquipmentNote",
            ParentEquipmentEquipmentTypeId = "ParentEquipmentEquipmentTypeId",
            ParentEquipmentUnitOfMeasureId = "ParentEquipmentUnitOfMeasureId",
            ParentEquipmentEarnRate = "ParentEquipmentEarnRate",
            ParentEquipmentCostRate = "ParentEquipmentCostRate",
            ParentEquipmentParentEquipmentId = "ParentEquipmentParentEquipmentId"
        }
    }
}

