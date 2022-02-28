namespace TimeManager.Default {
    export interface EmployeesRow {
        EmployeeId?: number;
        MnemonicId?: string;
        Description?: string;
        Address?: string;
        Location?: string;
        PhoneNumber1?: string;
        PhoneNumber2?: string;
        PhoneNumber3?: string;
        EMail?: string;
        OrdinaryCostRate?: number;
        OvertimeCostRate?: number;
        NotWorking1CostRate?: number;
        NotWorking2CostRate?: number;
        UserId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
    }

    export namespace EmployeesRow {
        export const idProperty = 'EmployeeId';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Default.Employees';
        export const lookupKey = 'Default.Employees';

        export function getLookup(): Q.Lookup<EmployeesRow> {
            return Q.getLookup<EmployeesRow>('Default.Employees');
        }
        export const deletePermission = 'Default:Employees:Delete';
        export const insertPermission = 'Default:Employees:Management';
        export const readPermission = 'Default:Employees:Read';
        export const updatePermission = 'Default:Employees:Management';

        export declare const enum Fields {
            EmployeeId = "EmployeeId",
            MnemonicId = "MnemonicId",
            Description = "Description",
            Address = "Address",
            Location = "Location",
            PhoneNumber1 = "PhoneNumber1",
            PhoneNumber2 = "PhoneNumber2",
            PhoneNumber3 = "PhoneNumber3",
            EMail = "EMail",
            OrdinaryCostRate = "OrdinaryCostRate",
            OvertimeCostRate = "OvertimeCostRate",
            NotWorking1CostRate = "NotWorking1CostRate",
            NotWorking2CostRate = "NotWorking2CostRate",
            UserId = "UserId",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive"
        }
    }
}

