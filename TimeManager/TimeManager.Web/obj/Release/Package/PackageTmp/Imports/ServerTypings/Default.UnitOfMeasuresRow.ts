namespace TimeManager.Default {
    export interface UnitOfMeasuresRow {
        UnitOfMeasureId?: number;
        Description?: string;
    }

    export namespace UnitOfMeasuresRow {
        export const idProperty = 'UnitOfMeasureId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Default.UnitOfMeasures';
        export const lookupKey = 'Default.UnitOfMeasures';

        export function getLookup(): Q.Lookup<UnitOfMeasuresRow> {
            return Q.getLookup<UnitOfMeasuresRow>('Default.UnitOfMeasures');
        }
        export const deletePermission = 'Default:UnitOfMeasures:Delete';
        export const insertPermission = 'Default:UnitOfMeasures:Management';
        export const readPermission = 'Default:UnitOfMeasures:Read';
        export const updatePermission = 'Default:UnitOfMeasures:Management';

        export declare const enum Fields {
            UnitOfMeasureId = "UnitOfMeasureId",
            Description = "Description"
        }
    }
}

