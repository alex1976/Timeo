namespace TimeManager.Default {
    export interface ReportOreDipendenteClienteRow {
        EmployeeDescription?: string;
        CustomerDescription?: string;
        Date?: string;
        Ordinary?: number;
        Overtime?: number;
        Description?: string;
    }

    export namespace ReportOreDipendenteClienteRow {
        export const nameProperty = 'CustomerDescription';
        export const localTextPrefix = 'Default.ReportOreDipendenteCliente';
        export const deletePermission = 'Default:General';
        export const insertPermission = 'Default:General';
        export const readPermission = 'Default:General';
        export const updatePermission = 'Default:General';

        export declare const enum Fields {
            EmployeeDescription = "EmployeeDescription",
            CustomerDescription = "CustomerDescription",
            Date = "Date",
            Ordinary = "Ordinary",
            Overtime = "Overtime",
            Description = "Description"
        }
    }
}

