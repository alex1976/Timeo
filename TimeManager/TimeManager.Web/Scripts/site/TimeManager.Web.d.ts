/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace TimeManager.Administration {
}
declare namespace TimeManager.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace TimeManager.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace TimeManager.Administration {
}
declare namespace TimeManager.Administration {
}
declare namespace TimeManager.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace TimeManager.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace TimeManager.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace TimeManager.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace TimeManager.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace TimeManager.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace TimeManager.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace TimeManager.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace TimeManager.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace TimeManager.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace TimeManager.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace TimeManager.Administration {
}
declare namespace TimeManager.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace TimeManager.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace TimeManager.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace TimeManager.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace TimeManager.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace TimeManager.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace TimeManager.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace TimeManager.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace TimeManager.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace TimeManager.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace TimeManager.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace TimeManager.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace TimeManager.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace TimeManager.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace TimeManager.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace TimeManager.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    interface ActivitiesForm {
        MnemonicId: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Note: Serenity.TextAreaEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        CustomerId: Serenity.LookupEditor;
        Tags: Serenity.StringEditor;
        ParentActivityId: Serenity.LookupEditor;
        EstimatedWork: Serenity.DecimalEditor;
        ActualWork: Serenity.DecimalEditor;
        RemainingWork: Serenity.DecimalEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }
    class ActivitiesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Default {
    interface ActivitiesRow {
        ActivityId?: number;
        MnemonicId?: string;
        Description?: string;
        Note?: string;
        StartDate?: string;
        EndDate?: string;
        EmployeeId?: number;
        CustomerId?: number;
        ContractId?: number;
        EstimatedWork?: number;
        ActualWork?: number;
        RemainingWork?: number;
        Attachments?: string;
        Tags?: string;
        ParentActivityId?: number;
        EmployeeMnemonicId?: string;
        EmployeeDescription?: string;
        EmployeeAddress?: string;
        EmployeeLocation?: string;
        EmployeePhoneNumber1?: string;
        EmployeePhoneNumber2?: string;
        EmployeePhoneNumber3?: string;
        EmployeeEMail?: string;
        EmployeeOrdinaryCostRate?: number;
        EmployeeOvertimeCostRate?: number;
        EmployeeNotWorking1CostRate?: number;
        EmployeeNotWorking2CostRate?: number;
        EmployeeUserId?: number;
        CustomerMnemonicId?: string;
        CustomerDescription?: string;
        CustomerFiscalCode?: string;
        CustomerVatCode?: string;
        CustomerAddress?: string;
        CustomerLocation?: string;
        CustomerPhoneNumber1?: string;
        CustomerPhoneNumber2?: string;
        CustomerPhoneNumber3?: string;
        CustomerEMail?: string;
        ContractMnemonicId?: string;
        ContractDescription?: string;
        ContractStartDate?: string;
        ContractEndDate?: string;
        ContractCustomerId?: number;
        ContractOrdinaryEarnRate?: number;
        ContractOvertimeEarnRate?: number;
        ContractNotWorking1EarnRate?: number;
        ContractNotWorking2EarnRate?: number;
        ParentActivityDescription?: string;
    }
    namespace ActivitiesRow {
        const idProperty = "ActivityId";
        const nameProperty = "Description";
        const localTextPrefix = "Default.Activities";
        const lookupKey = "Default.Activities";
        function getLookup(): Q.Lookup<ActivitiesRow>;
        const deletePermission = "Default:Activities:Delete";
        const insertPermission = "Default:Activities:Management";
        const readPermission = "Default:Activities:Read";
        const updatePermission = "Default:Activities:Management";
        const enum Fields {
            ActivityId = "ActivityId",
            MnemonicId = "MnemonicId",
            Description = "Description",
            Note = "Note",
            StartDate = "StartDate",
            EndDate = "EndDate",
            EmployeeId = "EmployeeId",
            CustomerId = "CustomerId",
            ContractId = "ContractId",
            EstimatedWork = "EstimatedWork",
            ActualWork = "ActualWork",
            RemainingWork = "RemainingWork",
            Attachments = "Attachments",
            Tags = "Tags",
            ParentActivityId = "ParentActivityId",
            EmployeeMnemonicId = "EmployeeMnemonicId",
            EmployeeDescription = "EmployeeDescription",
            EmployeeAddress = "EmployeeAddress",
            EmployeeLocation = "EmployeeLocation",
            EmployeePhoneNumber1 = "EmployeePhoneNumber1",
            EmployeePhoneNumber2 = "EmployeePhoneNumber2",
            EmployeePhoneNumber3 = "EmployeePhoneNumber3",
            EmployeeEMail = "EmployeeEMail",
            EmployeeOrdinaryCostRate = "EmployeeOrdinaryCostRate",
            EmployeeOvertimeCostRate = "EmployeeOvertimeCostRate",
            EmployeeNotWorking1CostRate = "EmployeeNotWorking1CostRate",
            EmployeeNotWorking2CostRate = "EmployeeNotWorking2CostRate",
            EmployeeUserId = "EmployeeUserId",
            CustomerMnemonicId = "CustomerMnemonicId",
            CustomerDescription = "CustomerDescription",
            CustomerFiscalCode = "CustomerFiscalCode",
            CustomerVatCode = "CustomerVatCode",
            CustomerAddress = "CustomerAddress",
            CustomerLocation = "CustomerLocation",
            CustomerPhoneNumber1 = "CustomerPhoneNumber1",
            CustomerPhoneNumber2 = "CustomerPhoneNumber2",
            CustomerPhoneNumber3 = "CustomerPhoneNumber3",
            CustomerEMail = "CustomerEMail",
            ContractMnemonicId = "ContractMnemonicId",
            ContractDescription = "ContractDescription",
            ContractStartDate = "ContractStartDate",
            ContractEndDate = "ContractEndDate",
            ContractCustomerId = "ContractCustomerId",
            ContractOrdinaryEarnRate = "ContractOrdinaryEarnRate",
            ContractOvertimeEarnRate = "ContractOvertimeEarnRate",
            ContractNotWorking1EarnRate = "ContractNotWorking1EarnRate",
            ContractNotWorking2EarnRate = "ContractNotWorking2EarnRate",
            ParentActivityDescription = "ParentActivityDescription"
        }
    }
}
declare namespace TimeManager.Default {
    namespace ActivitiesService {
        const baseUrl = "Default/Activities";
        function Create(request: Serenity.SaveRequest<ActivitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ActivitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ActivitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ActivitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Activities/Create",
            Update = "Default/Activities/Update",
            Delete = "Default/Activities/Delete",
            Retrieve = "Default/Activities/Retrieve",
            List = "Default/Activities/List"
        }
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    interface BusinessUnitsForm {
        Name: Serenity.StringEditor;
        ParentUnitId: Serenity.IntegerEditor;
    }
    class BusinessUnitsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Default {
    interface BusinessUnitsRow {
        UnitId?: number;
        Name?: string;
        ParentUnitId?: number;
        ParentUnitName?: string;
        ParentUnitParentUnitId?: number;
    }
    namespace BusinessUnitsRow {
        const idProperty = "UnitId";
        const nameProperty = "Name";
        const localTextPrefix = "Default.BusinessUnits";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            UnitId = "UnitId",
            Name = "Name",
            ParentUnitId = "ParentUnitId",
            ParentUnitName = "ParentUnitName",
            ParentUnitParentUnitId = "ParentUnitParentUnitId"
        }
    }
}
declare namespace TimeManager.Default {
    namespace BusinessUnitsService {
        const baseUrl = "Default/BusinessUnits";
        function Create(request: Serenity.SaveRequest<BusinessUnitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BusinessUnitsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BusinessUnitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BusinessUnitsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/BusinessUnits/Create",
            Update = "Default/BusinessUnits/Update",
            Delete = "Default/BusinessUnits/Delete",
            Retrieve = "Default/BusinessUnits/Retrieve",
            List = "Default/BusinessUnits/List"
        }
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    interface ContactsForm {
        Title: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        IdentityNo: Serenity.StringEditor;
        UserId: Serenity.IntegerEditor;
    }
    class ContactsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Default {
    interface ContactsRow {
        ContactId?: number;
        Title?: string;
        FirstName?: string;
        LastName?: string;
        Email?: string;
        IdentityNo?: string;
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
    namespace ContactsRow {
        const idProperty = "ContactId";
        const nameProperty = "Title";
        const localTextPrefix = "Default.Contacts";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ContactId = "ContactId",
            Title = "Title",
            FirstName = "FirstName",
            LastName = "LastName",
            Email = "Email",
            IdentityNo = "IdentityNo",
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
declare namespace TimeManager.Default {
    namespace ContactsService {
        const baseUrl = "Default/Contacts";
        function Create(request: Serenity.SaveRequest<ContactsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ContactsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContactsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContactsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Contacts/Create",
            Update = "Default/Contacts/Update",
            Delete = "Default/Contacts/Delete",
            Retrieve = "Default/Contacts/Retrieve",
            List = "Default/Contacts/List"
        }
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    interface ContractsForm {
        MnemonicId: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        CustomerId: Serenity.IntegerEditor;
        OrdinaryEarnRate: Serenity.DecimalEditor;
        OvertimeEarnRate: Serenity.DecimalEditor;
        NotWorking1EarnRate: Serenity.DecimalEditor;
        NotWorking2EarnRate: Serenity.DecimalEditor;
    }
    class ContractsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Default {
    interface ContractsRow {
        ContractId?: number;
        MnemonicId?: string;
        Description?: string;
        StartDate?: string;
        EndDate?: string;
        CustomerId?: number;
        OrdinaryEarnRate?: number;
        OvertimeEarnRate?: number;
        NotWorking1EarnRate?: number;
        NotWorking2EarnRate?: number;
        CustomerMnemonicId?: string;
        CustomerDescription?: string;
        CustomerFiscalCode?: string;
        CustomerVatCode?: string;
        CustomerAddress?: string;
        CustomerLocation?: string;
        CustomerPhoneNumber1?: string;
        CustomerPhoneNumber2?: string;
        CustomerPhoneNumber3?: string;
        CustomerEMail?: string;
    }
    namespace ContractsRow {
        const idProperty = "ContractId";
        const nameProperty = "MnemonicId";
        const localTextPrefix = "Default.Contracts";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ContractId = "ContractId",
            MnemonicId = "MnemonicId",
            Description = "Description",
            StartDate = "StartDate",
            EndDate = "EndDate",
            CustomerId = "CustomerId",
            OrdinaryEarnRate = "OrdinaryEarnRate",
            OvertimeEarnRate = "OvertimeEarnRate",
            NotWorking1EarnRate = "NotWorking1EarnRate",
            NotWorking2EarnRate = "NotWorking2EarnRate",
            CustomerMnemonicId = "CustomerMnemonicId",
            CustomerDescription = "CustomerDescription",
            CustomerFiscalCode = "CustomerFiscalCode",
            CustomerVatCode = "CustomerVatCode",
            CustomerAddress = "CustomerAddress",
            CustomerLocation = "CustomerLocation",
            CustomerPhoneNumber1 = "CustomerPhoneNumber1",
            CustomerPhoneNumber2 = "CustomerPhoneNumber2",
            CustomerPhoneNumber3 = "CustomerPhoneNumber3",
            CustomerEMail = "CustomerEMail"
        }
    }
}
declare namespace TimeManager.Default {
    namespace ContractsService {
        const baseUrl = "Default/Contracts";
        function Create(request: Serenity.SaveRequest<ContractsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ContractsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContractsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContractsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Contracts/Create",
            Update = "Default/Contracts/Update",
            Delete = "Default/Contracts/Delete",
            Retrieve = "Default/Contracts/Retrieve",
            List = "Default/Contracts/List"
        }
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    interface CustomersForm {
        MnemonicId: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        FiscalCode: Serenity.StringEditor;
        VatCode: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Location: Serenity.StringEditor;
        PhoneNumber1: Serenity.StringEditor;
        PhoneNumber2: Serenity.StringEditor;
        PhoneNumber3: Serenity.StringEditor;
        EMail: Serenity.EmailEditor;
    }
    class CustomersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Default {
    interface CustomersRow {
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
    namespace CustomersRow {
        const idProperty = "CustomerId";
        const nameProperty = "Description";
        const localTextPrefix = "Default.Customers";
        const lookupKey = "Default.Customers";
        function getLookup(): Q.Lookup<CustomersRow>;
        const deletePermission = "Default:Customers:Delete";
        const insertPermission = "Default:Customers:Management";
        const readPermission = "Default:Customers:Read";
        const updatePermission = "Default:Customers:Management";
        const enum Fields {
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
declare namespace TimeManager.Default {
    namespace CustomersService {
        const baseUrl = "Default/Customers";
        function Create(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Customers/Create",
            Update = "Default/Customers/Update",
            Delete = "Default/Customers/Delete",
            Retrieve = "Default/Customers/Retrieve",
            List = "Default/Customers/List"
        }
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    interface EmployeesForm {
        MnemonicId: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Address: Serenity.StringEditor;
        Location: Serenity.StringEditor;
        PhoneNumber1: Serenity.StringEditor;
        PhoneNumber2: Serenity.StringEditor;
        PhoneNumber3: Serenity.StringEditor;
        EMail: Serenity.EmailEditor;
        UserId: Serenity.LookupEditor;
    }
    class EmployeesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Default {
    interface EmployeesRow {
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
    namespace EmployeesRow {
        const idProperty = "EmployeeId";
        const nameProperty = "Description";
        const localTextPrefix = "Default.Employees";
        const lookupKey = "Default.Employees";
        function getLookup(): Q.Lookup<EmployeesRow>;
        const deletePermission = "Default:Employees:Delete";
        const insertPermission = "Default:Employees:Management";
        const readPermission = "Default:Employees:Read";
        const updatePermission = "Default:Employees:Management";
        const enum Fields {
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
declare namespace TimeManager.Default {
    namespace EmployeesService {
        const baseUrl = "Default/Employees";
        function Create(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Employees/Create",
            Update = "Default/Employees/Update",
            Delete = "Default/Employees/Delete",
            Retrieve = "Default/Employees/Retrieve",
            List = "Default/Employees/List"
        }
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    interface EquipmentTypesForm {
        Description: Serenity.StringEditor;
    }
    class EquipmentTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Default {
    interface EquipmentTypesRow {
        EquipmentTypeId?: number;
        Description?: string;
    }
    namespace EquipmentTypesRow {
        const idProperty = "EquipmentTypeId";
        const nameProperty = "Description";
        const localTextPrefix = "Default.EquipmentTypes";
        const lookupKey = "Default.EquipmentTypes";
        function getLookup(): Q.Lookup<EquipmentTypesRow>;
        const deletePermission = "Default:EquipmentTypes:Delete";
        const insertPermission = "Default:EquipmentTypes:Management";
        const readPermission = "Default:EquipmentTypes:Read";
        const updatePermission = "Default:EquipmentTypes:Management";
        const enum Fields {
            EquipmentTypeId = "EquipmentTypeId",
            Description = "Description"
        }
    }
}
declare namespace TimeManager.Default {
    namespace EquipmentTypesService {
        const baseUrl = "Default/EquipmentTypes";
        function Create(request: Serenity.SaveRequest<EquipmentTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EquipmentTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EquipmentTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EquipmentTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/EquipmentTypes/Create",
            Update = "Default/EquipmentTypes/Update",
            Delete = "Default/EquipmentTypes/Delete",
            Retrieve = "Default/EquipmentTypes/Retrieve",
            List = "Default/EquipmentTypes/List"
        }
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    interface EquipmentUsagesForm {
        Date: Serenity.DateEditor;
        CustomerId: Serenity.LookupEditor;
        EquipmentId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        Distance: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
    }
    class EquipmentUsagesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Default {
    interface EquipmentUsagesRow {
        EquipmentUsageId?: number;
        MnemonicId?: string;
        Description?: string;
        Date?: string;
        CustomerId?: number;
        EquipmentId?: number;
        ContractId?: number;
        ActivityId?: number;
        TimesheetStateTypeId?: number;
        Quantity?: number;
        Distance?: number;
        Amount?: number;
        DistanceAmount?: number;
        Attachments?: string;
        CustomerMnemonicId?: string;
        CustomerDescription?: string;
        CustomerFiscalCode?: string;
        CustomerVatCode?: string;
        CustomerAddress?: string;
        CustomerLocation?: string;
        CustomerPhoneNumber1?: string;
        CustomerPhoneNumber2?: string;
        CustomerPhoneNumber3?: string;
        CustomerEMail?: string;
        EquipmentMnemonicId?: string;
        EquipmentDescription?: string;
        EquipmentNote?: string;
        EquipmentEquipmentTypeId?: number;
        EquipmentUnitOfMeasureId?: number;
        EquipmentEarnRate?: number;
        EquipmentCostRate?: number;
        EquipmentParentEquipmentId?: number;
        ContractMnemonicId?: string;
        ContractDescription?: string;
        ContractStartDate?: string;
        ContractEndDate?: string;
        ContractCustomerId?: number;
        ContractOrdinaryEarnRate?: number;
        ContractOvertimeEarnRate?: number;
        ContractNotWorking1EarnRate?: number;
        ContractNotWorking2EarnRate?: number;
        ActivityMnemonicId?: string;
        ActivityDescription?: string;
        ActivityNote?: string;
        ActivityStartDate?: string;
        ActivityEndDate?: string;
        ActivityEmployeeId?: number;
        ActivityCustomerId?: number;
        ActivityContractId?: number;
        ActivityEstimatedWork?: number;
        ActivityActualWork?: number;
        ActivityRemainingWork?: number;
        ActivityAttachments?: string;
        ActivityTags?: string;
        ActivityParentActivityId?: number;
        TimesheetStateTypeDescription?: string;
    }
    namespace EquipmentUsagesRow {
        const idProperty = "EquipmentUsageId";
        const nameProperty = "MnemonicId";
        const localTextPrefix = "Default.EquipmentUsages";
        const deletePermission = "Default:EquipmentUsages:Delete";
        const insertPermission = "Default:EquipmentUsages:Management";
        const readPermission = "Default:EquipmentUsages:Read";
        const updatePermission = "Default:EquipmentUsages:Management";
        const enum Fields {
            EquipmentUsageId = "EquipmentUsageId",
            MnemonicId = "MnemonicId",
            Description = "Description",
            Date = "Date",
            CustomerId = "CustomerId",
            EquipmentId = "EquipmentId",
            ContractId = "ContractId",
            ActivityId = "ActivityId",
            TimesheetStateTypeId = "TimesheetStateTypeId",
            Quantity = "Quantity",
            Distance = "Distance",
            Amount = "Amount",
            DistanceAmount = "DistanceAmount",
            Attachments = "Attachments",
            CustomerMnemonicId = "CustomerMnemonicId",
            CustomerDescription = "CustomerDescription",
            CustomerFiscalCode = "CustomerFiscalCode",
            CustomerVatCode = "CustomerVatCode",
            CustomerAddress = "CustomerAddress",
            CustomerLocation = "CustomerLocation",
            CustomerPhoneNumber1 = "CustomerPhoneNumber1",
            CustomerPhoneNumber2 = "CustomerPhoneNumber2",
            CustomerPhoneNumber3 = "CustomerPhoneNumber3",
            CustomerEMail = "CustomerEMail",
            EquipmentMnemonicId = "EquipmentMnemonicId",
            EquipmentDescription = "EquipmentDescription",
            EquipmentNote = "EquipmentNote",
            EquipmentEquipmentTypeId = "EquipmentEquipmentTypeId",
            EquipmentUnitOfMeasureId = "EquipmentUnitOfMeasureId",
            EquipmentEarnRate = "EquipmentEarnRate",
            EquipmentCostRate = "EquipmentCostRate",
            EquipmentParentEquipmentId = "EquipmentParentEquipmentId",
            ContractMnemonicId = "ContractMnemonicId",
            ContractDescription = "ContractDescription",
            ContractStartDate = "ContractStartDate",
            ContractEndDate = "ContractEndDate",
            ContractCustomerId = "ContractCustomerId",
            ContractOrdinaryEarnRate = "ContractOrdinaryEarnRate",
            ContractOvertimeEarnRate = "ContractOvertimeEarnRate",
            ContractNotWorking1EarnRate = "ContractNotWorking1EarnRate",
            ContractNotWorking2EarnRate = "ContractNotWorking2EarnRate",
            ActivityMnemonicId = "ActivityMnemonicId",
            ActivityDescription = "ActivityDescription",
            ActivityNote = "ActivityNote",
            ActivityStartDate = "ActivityStartDate",
            ActivityEndDate = "ActivityEndDate",
            ActivityEmployeeId = "ActivityEmployeeId",
            ActivityCustomerId = "ActivityCustomerId",
            ActivityContractId = "ActivityContractId",
            ActivityEstimatedWork = "ActivityEstimatedWork",
            ActivityActualWork = "ActivityActualWork",
            ActivityRemainingWork = "ActivityRemainingWork",
            ActivityAttachments = "ActivityAttachments",
            ActivityTags = "ActivityTags",
            ActivityParentActivityId = "ActivityParentActivityId",
            TimesheetStateTypeDescription = "TimesheetStateTypeDescription"
        }
    }
}
declare namespace TimeManager.Default {
    namespace EquipmentUsagesService {
        const baseUrl = "Default/EquipmentUsages";
        function Create(request: Serenity.SaveRequest<EquipmentUsagesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EquipmentUsagesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EquipmentUsagesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EquipmentUsagesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/EquipmentUsages/Create",
            Update = "Default/EquipmentUsages/Update",
            Delete = "Default/EquipmentUsages/Delete",
            Retrieve = "Default/EquipmentUsages/Retrieve",
            List = "Default/EquipmentUsages/List"
        }
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    interface EquipmentsForm {
        MnemonicId: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Note: Serenity.TextAreaEditor;
        EquipmentTypeId: Serenity.LookupEditor;
        UnitOfMeasureId: Serenity.LookupEditor;
        EarnRate: Serenity.DecimalEditor;
        CostRate: Serenity.DecimalEditor;
    }
    class EquipmentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Default {
    interface EquipmentsRow {
        EquipmentId?: number;
        MnemonicId?: string;
        Description?: string;
        Note?: string;
        EquipmentTypeId?: number;
        UnitOfMeasureId?: number;
        EarnRate?: number;
        CostRate?: number;
        ParentEquipmentId?: number;
        EquipmentTypeDescription?: string;
        UnitOfMeasureDescription?: string;
        ParentEquipmentMnemonicId?: string;
        ParentEquipmentDescription?: string;
        ParentEquipmentNote?: string;
        ParentEquipmentEquipmentTypeId?: number;
        ParentEquipmentUnitOfMeasureId?: number;
        ParentEquipmentEarnRate?: number;
        ParentEquipmentCostRate?: number;
        ParentEquipmentParentEquipmentId?: number;
    }
    namespace EquipmentsRow {
        const idProperty = "EquipmentId";
        const nameProperty = "Description";
        const localTextPrefix = "Default.Equipments";
        const lookupKey = "Default.Equipments";
        function getLookup(): Q.Lookup<EquipmentsRow>;
        const deletePermission = "Default:Equipments:Delete";
        const insertPermission = "Default:Equipments:Management";
        const readPermission = "Default:Equipments:Read";
        const updatePermission = "Default:Equipments:Management";
        const enum Fields {
            EquipmentId = "EquipmentId",
            MnemonicId = "MnemonicId",
            Description = "Description",
            Note = "Note",
            EquipmentTypeId = "EquipmentTypeId",
            UnitOfMeasureId = "UnitOfMeasureId",
            EarnRate = "EarnRate",
            CostRate = "CostRate",
            ParentEquipmentId = "ParentEquipmentId",
            EquipmentTypeDescription = "EquipmentTypeDescription",
            UnitOfMeasureDescription = "UnitOfMeasureDescription",
            ParentEquipmentMnemonicId = "ParentEquipmentMnemonicId",
            ParentEquipmentDescription = "ParentEquipmentDescription",
            ParentEquipmentNote = "ParentEquipmentNote",
            ParentEquipmentEquipmentTypeId = "ParentEquipmentEquipmentTypeId",
            ParentEquipmentUnitOfMeasureId = "ParentEquipmentUnitOfMeasureId",
            ParentEquipmentEarnRate = "ParentEquipmentEarnRate",
            ParentEquipmentCostRate = "ParentEquipmentCostRate",
            ParentEquipmentParentEquipmentId = "ParentEquipmentParentEquipmentId"
        }
    }
}
declare namespace TimeManager.Default {
    namespace EquipmentsService {
        const baseUrl = "Default/Equipments";
        function Create(request: Serenity.SaveRequest<EquipmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EquipmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EquipmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EquipmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Equipments/Create",
            Update = "Default/Equipments/Update",
            Delete = "Default/Equipments/Delete",
            Retrieve = "Default/Equipments/Retrieve",
            List = "Default/Equipments/List"
        }
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    class PrioritiesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PrioritiesForm {
        Description: Serenity.StringEditor;
    }
}
declare namespace TimeManager.Default {
    interface PrioritiesRow {
        PriorityId?: number;
        Description?: string;
    }
    namespace PrioritiesRow {
        const idProperty = "PriorityId";
        const nameProperty = "Description";
        const localTextPrefix = "Default.Priorities";
        const deletePermission = "Default:Priorities:Delete";
        const insertPermission = "Default:Priorities:Management";
        const readPermission = "Default:Priorities:Read";
        const updatePermission = "Default:Priorities:Management";
        namespace Fields {
            const PriorityId: any;
            const Description: any;
        }
    }
}
declare namespace TimeManager.Default {
    namespace PrioritiesService {
        const baseUrl = "Default/Priorities";
        function Create(request: Serenity.SaveRequest<PrioritiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PrioritiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PrioritiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PrioritiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    interface ReportOreClienteDipendenteRow {
        CustomerDescription?: string;
        EmployeeDescription?: string;
        Date?: string;
        Ordinary?: number;
        Overtime?: number;
        Description?: string;
    }
    namespace ReportOreClienteDipendenteRow {
        const nameProperty = "CustomerDescription";
        const localTextPrefix = "Default.ReportOreClienteDipendente";
        const deletePermission = "Default:General";
        const insertPermission = "Default:General";
        const readPermission = "Default:General";
        const updatePermission = "Default:General";
        const enum Fields {
            CustomerDescription = "CustomerDescription",
            EmployeeDescription = "EmployeeDescription",
            Date = "Date",
            Ordinary = "Ordinary",
            Overtime = "Overtime",
            Description = "Description"
        }
    }
}
declare namespace TimeManager.Default {
    namespace ReportOreClienteDipendenteService {
        const baseUrl = "Default/Reports";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReportOreClienteDipendenteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Default/Reports/List"
        }
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    interface ReportOreDipendenteClienteRow {
        EmployeeDescription?: string;
        CustomerDescription?: string;
        Date?: string;
        Ordinary?: number;
        Overtime?: number;
        Description?: string;
    }
    namespace ReportOreDipendenteClienteRow {
        const nameProperty = "CustomerDescription";
        const localTextPrefix = "Default.ReportOreDipendenteCliente";
        const deletePermission = "Default:General";
        const insertPermission = "Default:General";
        const readPermission = "Default:General";
        const updatePermission = "Default:General";
        const enum Fields {
            EmployeeDescription = "EmployeeDescription",
            CustomerDescription = "CustomerDescription",
            Date = "Date",
            Ordinary = "Ordinary",
            Overtime = "Overtime",
            Description = "Description"
        }
    }
}
declare namespace TimeManager.Default {
    namespace ReportOreDipendenteClienteService {
        const baseUrl = "Default/Reports";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReportOreDipendenteClienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Default/Reports/List"
        }
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    interface SettingsForm {
        Description: Serenity.StringEditor;
        CompanyDescription: Serenity.StringEditor;
        CompanyAddress: Serenity.StringEditor;
        CompanyLocation: Serenity.StringEditor;
        CompanyPhoneNumber1: Serenity.StringEditor;
        CompanyPhoneNumber2: Serenity.StringEditor;
        CompanyPhoneNumber3: Serenity.StringEditor;
        CompanyMail: Serenity.StringEditor;
        Attachments: Serenity.StringEditor;
        ClosingDate: Serenity.DateEditor;
    }
    class SettingsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Default {
    interface SettingsRow {
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
    namespace SettingsRow {
        const idProperty = "SettingsId";
        const nameProperty = "Description";
        const localTextPrefix = "Default.Settings";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace TimeManager.Default {
    namespace SettingsService {
        const baseUrl = "Default/Settings";
        function Create(request: Serenity.SaveRequest<SettingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SettingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SettingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SettingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Settings/Create",
            Update = "Default/Settings/Update",
            Delete = "Default/Settings/Delete",
            Retrieve = "Default/Settings/Retrieve",
            List = "Default/Settings/List"
        }
    }
}
declare namespace TimeManager.Default {
    class TagsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TagsForm {
        Description: Serenity.StringEditor;
    }
}
declare namespace TimeManager.Default {
    interface TagsRow {
        TagId?: number;
        Description?: string;
    }
    namespace TagsRow {
        const idProperty = "TagId";
        const nameProperty = "Description";
        const localTextPrefix = "Default.Tags";
        const deletePermission = "Default:Tags:Delete";
        const insertPermission = "Default:Tags:Management";
        const readPermission = "Default:Tags:Read";
        const updatePermission = "Default:Tags:Management";
        namespace Fields {
            const TagId: any;
            const Description: any;
        }
    }
}
declare namespace TimeManager.Default {
    namespace TagsService {
        const baseUrl = "Default/Tags";
        function Create(request: Serenity.SaveRequest<TagsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TagsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TagsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TagsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    interface TimesheetStateTypesForm {
        Description: Serenity.StringEditor;
    }
    class TimesheetStateTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Default {
    interface TimesheetStateTypesRow {
        TimesheetStateTypeId?: number;
        Description?: string;
    }
    namespace TimesheetStateTypesRow {
        const idProperty = "TimesheetStateTypeId";
        const nameProperty = "Description";
        const localTextPrefix = "Default.TimesheetStateTypes";
        const lookupKey = "Default.TimesheetStateTypes";
        function getLookup(): Q.Lookup<TimesheetStateTypesRow>;
        const deletePermission = "Default:TimesheetStateTypes:Delete";
        const insertPermission = "Default:TimesheetStateTypes:Management";
        const readPermission = "Default:TimesheetStateTypes:Read";
        const updatePermission = "Default:TimesheetStateTypes:Management";
        const enum Fields {
            TimesheetStateTypeId = "TimesheetStateTypeId",
            Description = "Description"
        }
    }
}
declare namespace TimeManager.Default {
    namespace TimesheetStateTypesService {
        const baseUrl = "Default/TimesheetStateTypes";
        function Create(request: Serenity.SaveRequest<TimesheetStateTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TimesheetStateTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TimesheetStateTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TimesheetStateTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/TimesheetStateTypes/Create",
            Update = "Default/TimesheetStateTypes/Update",
            Delete = "Default/TimesheetStateTypes/Delete",
            Retrieve = "Default/TimesheetStateTypes/Retrieve",
            List = "Default/TimesheetStateTypes/List"
        }
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    interface TimesheetsForm {
        Date: Serenity.DateEditor;
        CustomerId: Serenity.LookupEditor;
        EmployeeId: Serenity.LookupEditor;
        ActivityId: Serenity.LookupEditor;
        Ordinary: Serenity.TimeEditor;
        Overtime: Serenity.TimeEditor;
        NotWorking1: Serenity.TimeEditor;
        Description: Serenity.TextAreaEditor;
    }
    class TimesheetsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Default {
    interface TimesheetsRow {
        TimesheetId?: number;
        MnemonicId?: string;
        Description?: string;
        Date?: string;
        CustomerId?: number;
        EmployeeId?: number;
        ContractId?: number;
        TimesheetStateTypeId?: number;
        ActivityId?: number;
        Ordinary?: number;
        Overtime?: number;
        NotWorking1?: number;
        NotWorking2?: number;
        CustomerMnemonicId?: string;
        CustomerDescription?: string;
        CustomerFiscalCode?: string;
        CustomerVatCode?: string;
        CustomerAddress?: string;
        CustomerLocation?: string;
        CustomerPhoneNumber1?: string;
        CustomerPhoneNumber2?: string;
        CustomerPhoneNumber3?: string;
        CustomerEMail?: string;
        EmployeeMnemonicId?: string;
        EmployeeDescription?: string;
        EmployeeAddress?: string;
        EmployeeLocation?: string;
        EmployeePhoneNumber1?: string;
        EmployeePhoneNumber2?: string;
        EmployeePhoneNumber3?: string;
        EmployeeEMail?: string;
        EmployeeOrdinaryCostRate?: number;
        EmployeeOvertimeCostRate?: number;
        EmployeeNotWorking1CostRate?: number;
        EmployeeNotWorking2CostRate?: number;
        EmployeeUserId?: number;
        ContractMnemonicId?: string;
        ContractDescription?: string;
        ContractStartDate?: string;
        ContractEndDate?: string;
        ContractCustomerId?: number;
        ContractOrdinaryEarnRate?: number;
        ContractOvertimeEarnRate?: number;
        ContractNotWorking1EarnRate?: number;
        ContractNotWorking2EarnRate?: number;
        TimesheetStateTypeDescription?: string;
        ActivityMnemonicId?: string;
        ActivityDescription?: string;
        ActivityNote?: string;
        ActivityStartDate?: string;
        ActivityEndDate?: string;
        ActivityEmployeeId?: number;
        ActivityCustomerId?: number;
        ActivityContractId?: number;
        ActivityEstimatedWork?: number;
        ActivityActualWork?: number;
        ActivityRemainingWork?: number;
        ActivityAttachments?: string;
        ActivityTags?: string;
        ActivityParentActivityId?: number;
    }
    namespace TimesheetsRow {
        const idProperty = "TimesheetId";
        const nameProperty = "MnemonicId";
        const localTextPrefix = "Default.Timesheets";
        const deletePermission = "Default:Timesheets:Delete";
        const insertPermission = "Default:Timesheets:Management";
        const readPermission = "Default:Timesheets:Read";
        const updatePermission = "Default:Timesheets:Management";
        const enum Fields {
            TimesheetId = "TimesheetId",
            MnemonicId = "MnemonicId",
            Description = "Description",
            Date = "Date",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId",
            ContractId = "ContractId",
            TimesheetStateTypeId = "TimesheetStateTypeId",
            ActivityId = "ActivityId",
            Ordinary = "Ordinary",
            Overtime = "Overtime",
            NotWorking1 = "NotWorking1",
            NotWorking2 = "NotWorking2",
            CustomerMnemonicId = "CustomerMnemonicId",
            CustomerDescription = "CustomerDescription",
            CustomerFiscalCode = "CustomerFiscalCode",
            CustomerVatCode = "CustomerVatCode",
            CustomerAddress = "CustomerAddress",
            CustomerLocation = "CustomerLocation",
            CustomerPhoneNumber1 = "CustomerPhoneNumber1",
            CustomerPhoneNumber2 = "CustomerPhoneNumber2",
            CustomerPhoneNumber3 = "CustomerPhoneNumber3",
            CustomerEMail = "CustomerEMail",
            EmployeeMnemonicId = "EmployeeMnemonicId",
            EmployeeDescription = "EmployeeDescription",
            EmployeeAddress = "EmployeeAddress",
            EmployeeLocation = "EmployeeLocation",
            EmployeePhoneNumber1 = "EmployeePhoneNumber1",
            EmployeePhoneNumber2 = "EmployeePhoneNumber2",
            EmployeePhoneNumber3 = "EmployeePhoneNumber3",
            EmployeeEMail = "EmployeeEMail",
            EmployeeOrdinaryCostRate = "EmployeeOrdinaryCostRate",
            EmployeeOvertimeCostRate = "EmployeeOvertimeCostRate",
            EmployeeNotWorking1CostRate = "EmployeeNotWorking1CostRate",
            EmployeeNotWorking2CostRate = "EmployeeNotWorking2CostRate",
            EmployeeUserId = "EmployeeUserId",
            ContractMnemonicId = "ContractMnemonicId",
            ContractDescription = "ContractDescription",
            ContractStartDate = "ContractStartDate",
            ContractEndDate = "ContractEndDate",
            ContractCustomerId = "ContractCustomerId",
            ContractOrdinaryEarnRate = "ContractOrdinaryEarnRate",
            ContractOvertimeEarnRate = "ContractOvertimeEarnRate",
            ContractNotWorking1EarnRate = "ContractNotWorking1EarnRate",
            ContractNotWorking2EarnRate = "ContractNotWorking2EarnRate",
            TimesheetStateTypeDescription = "TimesheetStateTypeDescription",
            ActivityMnemonicId = "ActivityMnemonicId",
            ActivityDescription = "ActivityDescription",
            ActivityNote = "ActivityNote",
            ActivityStartDate = "ActivityStartDate",
            ActivityEndDate = "ActivityEndDate",
            ActivityEmployeeId = "ActivityEmployeeId",
            ActivityCustomerId = "ActivityCustomerId",
            ActivityContractId = "ActivityContractId",
            ActivityEstimatedWork = "ActivityEstimatedWork",
            ActivityActualWork = "ActivityActualWork",
            ActivityRemainingWork = "ActivityRemainingWork",
            ActivityAttachments = "ActivityAttachments",
            ActivityTags = "ActivityTags",
            ActivityParentActivityId = "ActivityParentActivityId"
        }
    }
}
declare namespace TimeManager.Default {
    namespace TimesheetsService {
        const baseUrl = "Default/Timesheets";
        function Create(request: Serenity.SaveRequest<TimesheetsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TimesheetsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TimesheetsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TimesheetsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Timesheets/Create",
            Update = "Default/Timesheets/Update",
            Delete = "Default/Timesheets/Delete",
            Retrieve = "Default/Timesheets/Retrieve",
            List = "Default/Timesheets/List"
        }
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    interface UnitOfMeasuresForm {
        Description: Serenity.StringEditor;
    }
    class UnitOfMeasuresForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Default {
    interface UnitOfMeasuresRow {
        UnitOfMeasureId?: number;
        Description?: string;
    }
    namespace UnitOfMeasuresRow {
        const idProperty = "UnitOfMeasureId";
        const nameProperty = "Description";
        const localTextPrefix = "Default.UnitOfMeasures";
        const lookupKey = "Default.UnitOfMeasures";
        function getLookup(): Q.Lookup<UnitOfMeasuresRow>;
        const deletePermission = "Default:UnitOfMeasures:Delete";
        const insertPermission = "Default:UnitOfMeasures:Management";
        const readPermission = "Default:UnitOfMeasures:Read";
        const updatePermission = "Default:UnitOfMeasures:Management";
        const enum Fields {
            UnitOfMeasureId = "UnitOfMeasureId",
            Description = "Description"
        }
    }
}
declare namespace TimeManager.Default {
    namespace UnitOfMeasuresService {
        const baseUrl = "Default/UnitOfMeasures";
        function Create(request: Serenity.SaveRequest<UnitOfMeasuresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UnitOfMeasuresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UnitOfMeasuresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UnitOfMeasuresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/UnitOfMeasures/Create",
            Update = "Default/UnitOfMeasures/Update",
            Delete = "Default/UnitOfMeasures/Delete",
            Retrieve = "Default/UnitOfMeasures/Retrieve",
            List = "Default/UnitOfMeasures/List"
        }
    }
}
declare namespace TimeManager {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace TimeManager {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace TimeManager {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace TimeManager {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace TimeManager.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace TimeManager.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace TimeManager.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace TimeManager.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace TimeManager.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace TimeManager.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace TimeManager {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace TimeManager.Texts {
}
declare namespace TimeManager.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace TimeManager.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace TimeManager.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace TimeManager.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace TimeManager.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace TimeManager.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace TimeManager.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace TimeManager.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace TimeManager.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace TimeManager.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace TimeManager.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace TimeManager.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace TimeManager.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace TimeManager.LanguageList {
    function getValue(): string[][];
}
declare namespace TimeManager.ScriptInitialization {
}
declare namespace TimeManager {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace TimeManager.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace TimeManager.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace TimeManager.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace TimeManager.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace TimeManager.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace TimeManager.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace TimeManager {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace TimeManager.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace TimeManager.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace TimeManager.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace TimeManager.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace TimeManager.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace TimeManager.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace TimeManager.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace TimeManager.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace TimeManager.Default {
    class ActivitiesDialog extends Serenity.EntityDialog<ActivitiesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ActivitiesForm;
    }
}
declare namespace TimeManager.Default {
    class ActivitiesGrid extends Serenity.EntityGrid<ActivitiesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ActivitiesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace TimeManager.Default {
    class BusinessUnitsDialog extends Serenity.EntityDialog<BusinessUnitsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BusinessUnitsForm;
    }
}
declare namespace TimeManager.Default {
    class BusinessUnitsGrid extends Serenity.EntityGrid<BusinessUnitsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BusinessUnitsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace TimeManager.Default {
    class ContactsDialog extends Serenity.EntityDialog<ContactsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ContactsForm;
    }
}
declare namespace TimeManager.Default {
    class ContactsGrid extends Serenity.EntityGrid<ContactsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContactsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace TimeManager.Default {
    class ContractsDialog extends Serenity.EntityDialog<ContractsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ContractsForm;
    }
}
declare namespace TimeManager.Default {
    class ContractsGrid extends Serenity.EntityGrid<ContractsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContractsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace TimeManager.Default {
    class CustomersDialog extends Serenity.EntityDialog<CustomersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomersForm;
    }
}
declare namespace TimeManager.Default {
    class CustomersGrid extends Serenity.EntityGrid<CustomersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace TimeManager.Default {
    class EmployeesDialog extends Serenity.EntityDialog<EmployeesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmployeesForm;
    }
}
declare namespace TimeManager.Default {
    class EmployeesGrid extends Serenity.EntityGrid<EmployeesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace TimeManager.Default {
    class EquipmentTypesDialog extends Serenity.EntityDialog<EquipmentTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EquipmentTypesForm;
    }
}
declare namespace TimeManager.Default {
    class EquipmentTypesGrid extends Serenity.EntityGrid<EquipmentTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EquipmentTypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace TimeManager.Default {
    class EquipmentUsagesDialog extends Serenity.EntityDialog<EquipmentUsagesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EquipmentUsagesForm;
    }
}
declare namespace TimeManager.Default {
    class EquipmentUsagesGrid extends Serenity.EntityGrid<EquipmentUsagesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EquipmentUsagesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace TimeManager.Default {
    class EquipmentsDialog extends Serenity.EntityDialog<EquipmentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EquipmentsForm;
    }
}
declare namespace TimeManager.Default {
}
declare namespace TimeManager.Default {
    class EquipmentsGrid extends Serenity.EntityGrid<EquipmentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EquipmentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace TimeManager.Default {
    class PrioritiesDialog extends Serenity.EntityDialog<PrioritiesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PrioritiesForm;
    }
}
declare namespace TimeManager.Default {
    class PrioritiesGrid extends Serenity.EntityGrid<PrioritiesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PrioritiesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace TimeManager.Default {
    class SettingsDialog extends Serenity.EntityDialog<SettingsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SettingsForm;
    }
}
declare namespace TimeManager.Default {
    class SettingsGrid extends Serenity.EntityGrid<SettingsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SettingsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace TimeManager.Default {
    class TagsDialog extends Serenity.EntityDialog<TagsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TagsForm;
    }
}
declare namespace TimeManager.Default {
    class TagsGrid extends Serenity.EntityGrid<TagsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TagsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace TimeManager.Default {
    class TimesheetStateTypesDialog extends Serenity.EntityDialog<TimesheetStateTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TimesheetStateTypesForm;
    }
}
declare namespace TimeManager.Default {
    class TimesheetStateTypesGrid extends Serenity.EntityGrid<TimesheetStateTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TimesheetStateTypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace TimeManager.Default {
    class TimesheetsDialog extends Serenity.EntityDialog<TimesheetsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TimesheetsForm;
    }
}
declare namespace TimeManager.Default {
    class TimesheetsGrid extends Serenity.EntityGrid<TimesheetsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TimesheetsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace TimeManager.Default {
    class UnitOfMeasuresDialog extends Serenity.EntityDialog<UnitOfMeasuresRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UnitOfMeasuresForm;
    }
}
declare namespace TimeManager.Default {
    class UnitOfMeasuresGrid extends Serenity.EntityGrid<UnitOfMeasuresRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UnitOfMeasuresDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace TimeManager.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace TimeManager.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace TimeManager.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace TimeManager.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
