namespace TimeManager.Default {
    export interface CustomersRow {
        CustomerId?: number;
        MnemonicId?: string;
        Description?: string;
        FiscalCode?: string;
        VatCode?: string;
        Address?: string;
        Location?: string;
        PhoneNumber1?: string;
        PhoneNumber2?: string;
        PhoneNumber3?: string;
        EMail?: string;
    }

    export namespace CustomersRow {
        export const idProperty = 'CustomerId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Default.Customers';
        export const lookupKey = 'Default.Customers';

        export function getLookup(): Q.Lookup<CustomersRow> {
            return Q.getLookup<CustomersRow>('Default.Customers');
        }
        export const deletePermission = 'Default:Customers:Delete';
        export const insertPermission = 'Default:Customers:Management';
        export const readPermission = 'Default:Customers:Read';
        export const updatePermission = 'Default:Customers:Management';

        export declare const enum Fields {
            CustomerId = "CustomerId",
            MnemonicId = "MnemonicId",
            Description = "Description",
            FiscalCode = "FiscalCode",
            VatCode = "VatCode",
            Address = "Address",
            Location = "Location",
            PhoneNumber1 = "PhoneNumber1",
            PhoneNumber2 = "PhoneNumber2",
            PhoneNumber3 = "PhoneNumber3",
            EMail = "EMail"
        }
    }
}

