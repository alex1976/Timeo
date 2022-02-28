namespace TimeManager.Default {
    export interface EquipmentTypesRow {
        EquipmentTypeId?: number;
        Description?: string;
    }

    export namespace EquipmentTypesRow {
        export const idProperty = 'EquipmentTypeId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Default.EquipmentTypes';
        export const lookupKey = 'Default.EquipmentTypes';

        export function getLookup(): Q.Lookup<EquipmentTypesRow> {
            return Q.getLookup<EquipmentTypesRow>('Default.EquipmentTypes');
        }
        export const deletePermission = 'Default:EquipmentTypes:Delete';
        export const insertPermission = 'Default:EquipmentTypes:Management';
        export const readPermission = 'Default:EquipmentTypes:Read';
        export const updatePermission = 'Default:EquipmentTypes:Management';

        export declare const enum Fields {
            EquipmentTypeId = "EquipmentTypeId",
            Description = "Description"
        }
    }
}

