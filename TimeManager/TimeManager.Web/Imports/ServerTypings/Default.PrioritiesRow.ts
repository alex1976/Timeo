
namespace TimeManager.Default {
    export interface PrioritiesRow {
        PriorityId?: number;
        Description?: string;
    }

    export namespace PrioritiesRow {
        export const idProperty = 'PriorityId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Default.Priorities';
        export const deletePermission = 'Default:Priorities:Delete';
        export const insertPermission = 'Default:Priorities:Management';
        export const readPermission = 'Default:Priorities:Read';
        export const updatePermission = 'Default:Priorities:Management';

        export namespace Fields {
            export declare const PriorityId;
            export declare const Description;
        }

        [
            'PriorityId',
            'Description'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}