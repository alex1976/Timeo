
namespace TimeManager.Default {
    export interface TagsRow {
        TagId?: number;
        Description?: string;
    }

    export namespace TagsRow {
        export const idProperty = 'TagId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Default.Tags';
        export const deletePermission = 'Default:Tags:Delete';
        export const insertPermission = 'Default:Tags:Management';
        export const readPermission = 'Default:Tags:Read';
        export const updatePermission = 'Default:Tags:Management';

        export namespace Fields {
            export declare const TagId;
            export declare const Description;
        }

        [
            'TagId',
            'Description'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}