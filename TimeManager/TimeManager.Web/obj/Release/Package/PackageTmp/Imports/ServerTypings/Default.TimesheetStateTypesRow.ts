namespace TimeManager.Default {
    export interface TimesheetStateTypesRow {
        TimesheetStateTypeId?: number;
        Description?: string;
    }

    export namespace TimesheetStateTypesRow {
        export const idProperty = 'TimesheetStateTypeId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Default.TimesheetStateTypes';
        export const lookupKey = 'Default.TimesheetStateTypes';

        export function getLookup(): Q.Lookup<TimesheetStateTypesRow> {
            return Q.getLookup<TimesheetStateTypesRow>('Default.TimesheetStateTypes');
        }
        export const deletePermission = 'Default:TimesheetStateTypes:Delete';
        export const insertPermission = 'Default:TimesheetStateTypes:Management';
        export const readPermission = 'Default:TimesheetStateTypes:Read';
        export const updatePermission = 'Default:TimesheetStateTypes:Management';

        export declare const enum Fields {
            TimesheetStateTypeId = "TimesheetStateTypeId",
            Description = "Description"
        }
    }
}

