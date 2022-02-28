namespace TimeManager.Default {
    export interface SettingsRow {
        SettingsId?: number;
        Description?: string;
        CompanyDescription?: string;
        CompanyAddress?: string;
        CompanyLocation?: string;
        CompanyPhoneNumber1?: string;
        CompanyPhoneNumber2?: string;
        CompanyPhoneNumber3?: string;
        CompanyMail?: string;
        Attachments?: string;
        ClosingDate?: string;
    }

    export namespace SettingsRow {
        export const idProperty = 'SettingsId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Default.Settings';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SettingsId = "SettingsId",
            Description = "Description",
            CompanyDescription = "CompanyDescription",
            CompanyAddress = "CompanyAddress",
            CompanyLocation = "CompanyLocation",
            CompanyPhoneNumber1 = "CompanyPhoneNumber1",
            CompanyPhoneNumber2 = "CompanyPhoneNumber2",
            CompanyPhoneNumber3 = "CompanyPhoneNumber3",
            CompanyMail = "CompanyMail",
            Attachments = "Attachments",
            ClosingDate = "ClosingDate"
        }
    }
}

