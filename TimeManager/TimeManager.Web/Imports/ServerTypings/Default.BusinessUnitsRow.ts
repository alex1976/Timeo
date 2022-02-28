namespace TimeManager.Default {
    export interface BusinessUnitsRow {
        UnitId?: number;
        Name?: string;
        ParentUnitId?: number;
        ParentUnitName?: string;
        ParentUnitParentUnitId?: number;
    }

    export namespace BusinessUnitsRow {
        export const idProperty = 'UnitId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.BusinessUnits';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            UnitId = "UnitId",
            Name = "Name",
            ParentUnitId = "ParentUnitId",
            ParentUnitName = "ParentUnitName",
            ParentUnitParentUnitId = "ParentUnitParentUnitId"
        }
    }
}

