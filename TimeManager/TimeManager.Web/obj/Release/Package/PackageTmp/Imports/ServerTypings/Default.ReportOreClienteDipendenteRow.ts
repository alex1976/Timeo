namespace TimeManager.Default {
    export interface ReportOreClienteDipendenteRow {
        CustomerDescription?: string;
        EmployeeDescription?: string;
        Date?: string;
        Ordinary?: number;
        Overtime?: number;
        Description?: string;
    }

    export namespace ReportOreClienteDipendenteRow {
        export const nameProperty = 'CustomerDescription';
        export const localTextPrefix = 'Default.ReportOreClienteDipendente';
        export const deletePermission = 'Default:General';
        export const insertPermission = 'Default:General';
        export const readPermission = 'Default:General';
        export const updatePermission = 'Default:General';

        export declare const enum Fields {
            CustomerDescription = "CustomerDescription",
            EmployeeDescription = "EmployeeDescription",
            Date = "Date",
            Ordinary = "Ordinary",
            Overtime = "Overtime",
            Description = "Description"
        }
    }
}

