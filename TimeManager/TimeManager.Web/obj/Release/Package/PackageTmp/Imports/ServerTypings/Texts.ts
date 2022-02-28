namespace TimeManager.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Default {

            namespace Activities {
                export const ActivityId: string;
                export const ActualWork: string;
                export const Attachments: string;
                export const ContractCustomerId: string;
                export const ContractDescription: string;
                export const ContractEndDate: string;
                export const ContractId: string;
                export const ContractMnemonicId: string;
                export const ContractNotWorking1EarnRate: string;
                export const ContractNotWorking2EarnRate: string;
                export const ContractOrdinaryEarnRate: string;
                export const ContractOvertimeEarnRate: string;
                export const ContractStartDate: string;
                export const CustomerAddress: string;
                export const CustomerDescription: string;
                export const CustomerEMail: string;
                export const CustomerFiscalCode: string;
                export const CustomerId: string;
                export const CustomerLocation: string;
                export const CustomerMnemonicId: string;
                export const CustomerPhoneNumber1: string;
                export const CustomerPhoneNumber2: string;
                export const CustomerPhoneNumber3: string;
                export const CustomerVatCode: string;
                export const Description: string;
                export const EmployeeAddress: string;
                export const EmployeeDescription: string;
                export const EmployeeEMail: string;
                export const EmployeeId: string;
                export const EmployeeLocation: string;
                export const EmployeeMnemonicId: string;
                export const EmployeeNotWorking1CostRate: string;
                export const EmployeeNotWorking2CostRate: string;
                export const EmployeeOrdinaryCostRate: string;
                export const EmployeeOvertimeCostRate: string;
                export const EmployeePhoneNumber1: string;
                export const EmployeePhoneNumber2: string;
                export const EmployeePhoneNumber3: string;
                export const EmployeeUserId: string;
                export const EndDate: string;
                export const EstimatedWork: string;
                export const MnemonicId: string;
                export const Note: string;
                export const ParentActivityDescription: string;
                export const ParentActivityId: string;
                export const RemainingWork: string;
                export const StartDate: string;
                export const Tags: string;
            }

            namespace BusinessUnits {
                export const Name: string;
                export const ParentUnitId: string;
                export const ParentUnitName: string;
                export const ParentUnitParentUnitId: string;
                export const UnitId: string;
            }

            namespace Contacts {
                export const ContactId: string;
                export const Email: string;
                export const FirstName: string;
                export const IdentityNo: string;
                export const LastName: string;
                export const Title: string;
                export const UserDisplayName: string;
                export const UserEmail: string;
                export const UserId: string;
                export const UserInsertDate: string;
                export const UserInsertUserId: string;
                export const UserIsActive: string;
                export const UserLastDirectoryUpdate: string;
                export const UserPasswordHash: string;
                export const UserPasswordSalt: string;
                export const UserSource: string;
                export const UserUpdateDate: string;
                export const UserUpdateUserId: string;
                export const UserUserImage: string;
                export const UserUsername: string;
            }

            namespace Contracts {
                export const ContractId: string;
                export const CustomerAddress: string;
                export const CustomerDescription: string;
                export const CustomerEMail: string;
                export const CustomerFiscalCode: string;
                export const CustomerId: string;
                export const CustomerLocation: string;
                export const CustomerMnemonicId: string;
                export const CustomerPhoneNumber1: string;
                export const CustomerPhoneNumber2: string;
                export const CustomerPhoneNumber3: string;
                export const CustomerVatCode: string;
                export const Description: string;
                export const EndDate: string;
                export const MnemonicId: string;
                export const NotWorking1EarnRate: string;
                export const NotWorking2EarnRate: string;
                export const OrdinaryEarnRate: string;
                export const OvertimeEarnRate: string;
                export const StartDate: string;
            }

            namespace Customers {
                export const Address: string;
                export const CustomerId: string;
                export const Description: string;
                export const EMail: string;
                export const FiscalCode: string;
                export const Location: string;
                export const MnemonicId: string;
                export const PhoneNumber1: string;
                export const PhoneNumber2: string;
                export const PhoneNumber3: string;
                export const VatCode: string;
            }

            namespace Employees {
                export const Address: string;
                export const Description: string;
                export const EMail: string;
                export const EmployeeId: string;
                export const Location: string;
                export const MnemonicId: string;
                export const NotWorking1CostRate: string;
                export const NotWorking2CostRate: string;
                export const OrdinaryCostRate: string;
                export const OvertimeCostRate: string;
                export const PhoneNumber1: string;
                export const PhoneNumber2: string;
                export const PhoneNumber3: string;
                export const UserDisplayName: string;
                export const UserEmail: string;
                export const UserId: string;
                export const UserInsertDate: string;
                export const UserInsertUserId: string;
                export const UserIsActive: string;
                export const UserLastDirectoryUpdate: string;
                export const UserPasswordHash: string;
                export const UserPasswordSalt: string;
                export const UserSource: string;
                export const UserUpdateDate: string;
                export const UserUpdateUserId: string;
                export const UserUserImage: string;
                export const UserUsername: string;
            }

            namespace EquipmentTypes {
                export const Description: string;
                export const EquipmentTypeId: string;
            }

            namespace EquipmentUsages {
                export const ActivityActualWork: string;
                export const ActivityAttachments: string;
                export const ActivityContractId: string;
                export const ActivityCustomerId: string;
                export const ActivityDescription: string;
                export const ActivityEmployeeId: string;
                export const ActivityEndDate: string;
                export const ActivityEstimatedWork: string;
                export const ActivityId: string;
                export const ActivityMnemonicId: string;
                export const ActivityNote: string;
                export const ActivityParentActivityId: string;
                export const ActivityRemainingWork: string;
                export const ActivityStartDate: string;
                export const ActivityTags: string;
                export const Amount: string;
                export const Attachments: string;
                export const ContractCustomerId: string;
                export const ContractDescription: string;
                export const ContractEndDate: string;
                export const ContractId: string;
                export const ContractMnemonicId: string;
                export const ContractNotWorking1EarnRate: string;
                export const ContractNotWorking2EarnRate: string;
                export const ContractOrdinaryEarnRate: string;
                export const ContractOvertimeEarnRate: string;
                export const ContractStartDate: string;
                export const CustomerAddress: string;
                export const CustomerDescription: string;
                export const CustomerEMail: string;
                export const CustomerFiscalCode: string;
                export const CustomerId: string;
                export const CustomerLocation: string;
                export const CustomerMnemonicId: string;
                export const CustomerPhoneNumber1: string;
                export const CustomerPhoneNumber2: string;
                export const CustomerPhoneNumber3: string;
                export const CustomerVatCode: string;
                export const Date: string;
                export const Description: string;
                export const Distance: string;
                export const DistanceAmount: string;
                export const EquipmentCostRate: string;
                export const EquipmentDescription: string;
                export const EquipmentEarnRate: string;
                export const EquipmentEquipmentTypeId: string;
                export const EquipmentId: string;
                export const EquipmentMnemonicId: string;
                export const EquipmentNote: string;
                export const EquipmentParentEquipmentId: string;
                export const EquipmentUnitOfMeasureId: string;
                export const EquipmentUsageId: string;
                export const MnemonicId: string;
                export const Quantity: string;
                export const TimesheetStateTypeDescription: string;
                export const TimesheetStateTypeId: string;
            }

            namespace Equipments {
                export const CostRate: string;
                export const Description: string;
                export const EarnRate: string;
                export const EquipmentId: string;
                export const EquipmentTypeDescription: string;
                export const EquipmentTypeId: string;
                export const MnemonicId: string;
                export const Note: string;
                export const ParentEquipmentCostRate: string;
                export const ParentEquipmentDescription: string;
                export const ParentEquipmentEarnRate: string;
                export const ParentEquipmentEquipmentTypeId: string;
                export const ParentEquipmentId: string;
                export const ParentEquipmentMnemonicId: string;
                export const ParentEquipmentNote: string;
                export const ParentEquipmentParentEquipmentId: string;
                export const ParentEquipmentUnitOfMeasureId: string;
                export const UnitOfMeasureDescription: string;
                export const UnitOfMeasureId: string;
            }

            namespace ReportOreClienteDipendente {
                export const CustomerDescription: string;
                export const Date: string;
                export const Description: string;
                export const EmployeeDescription: string;
                export const Ordinary: string;
                export const Overtime: string;
            }

            namespace ReportOreDipendenteCliente {
                export const CustomerDescription: string;
                export const Date: string;
                export const Description: string;
                export const EmployeeDescription: string;
                export const Ordinary: string;
                export const Overtime: string;
            }

            namespace Settings {
                export const Attachments: string;
                export const ClosingDate: string;
                export const CompanyAddress: string;
                export const CompanyDescription: string;
                export const CompanyLocation: string;
                export const CompanyMail: string;
                export const CompanyPhoneNumber1: string;
                export const CompanyPhoneNumber2: string;
                export const CompanyPhoneNumber3: string;
                export const Description: string;
                export const SettingsId: string;
            }

            namespace TimesheetStateTypes {
                export const Description: string;
                export const TimesheetStateTypeId: string;
            }

            namespace Timesheets {
                export const ActivityActualWork: string;
                export const ActivityAttachments: string;
                export const ActivityContractId: string;
                export const ActivityCustomerId: string;
                export const ActivityDescription: string;
                export const ActivityEmployeeId: string;
                export const ActivityEndDate: string;
                export const ActivityEstimatedWork: string;
                export const ActivityId: string;
                export const ActivityMnemonicId: string;
                export const ActivityNote: string;
                export const ActivityParentActivityId: string;
                export const ActivityRemainingWork: string;
                export const ActivityStartDate: string;
                export const ActivityTags: string;
                export const ContractCustomerId: string;
                export const ContractDescription: string;
                export const ContractEndDate: string;
                export const ContractId: string;
                export const ContractMnemonicId: string;
                export const ContractNotWorking1EarnRate: string;
                export const ContractNotWorking2EarnRate: string;
                export const ContractOrdinaryEarnRate: string;
                export const ContractOvertimeEarnRate: string;
                export const ContractStartDate: string;
                export const CustomerAddress: string;
                export const CustomerDescription: string;
                export const CustomerEMail: string;
                export const CustomerFiscalCode: string;
                export const CustomerId: string;
                export const CustomerLocation: string;
                export const CustomerMnemonicId: string;
                export const CustomerPhoneNumber1: string;
                export const CustomerPhoneNumber2: string;
                export const CustomerPhoneNumber3: string;
                export const CustomerVatCode: string;
                export const Date: string;
                export const Description: string;
                export const EmployeeAddress: string;
                export const EmployeeDescription: string;
                export const EmployeeEMail: string;
                export const EmployeeId: string;
                export const EmployeeLocation: string;
                export const EmployeeMnemonicId: string;
                export const EmployeeNotWorking1CostRate: string;
                export const EmployeeNotWorking2CostRate: string;
                export const EmployeeOrdinaryCostRate: string;
                export const EmployeeOvertimeCostRate: string;
                export const EmployeePhoneNumber1: string;
                export const EmployeePhoneNumber2: string;
                export const EmployeePhoneNumber3: string;
                export const EmployeeUserId: string;
                export const MnemonicId: string;
                export const NotWorking1: string;
                export const NotWorking2: string;
                export const Ordinary: string;
                export const Overtime: string;
                export const TimesheetId: string;
                export const TimesheetStateTypeDescription: string;
                export const TimesheetStateTypeId: string;
            }

            namespace UnitOfMeasures {
                export const Description: string;
                export const UnitOfMeasureId: string;
            }
        }
    }

    declare namespace Forms {

        namespace Activity {
            export const ActivityAttachments: string;
            export const ActivityData: string;
            export const ActivityWork: string;
        }

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }

        namespace Timesheet {
            export const InvalidDate: string;
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    TimeManager['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Default:{Activities:{ActivityId:1,ActualWork:1,Attachments:1,ContractCustomerId:1,ContractDescription:1,ContractEndDate:1,ContractId:1,ContractMnemonicId:1,ContractNotWorking1EarnRate:1,ContractNotWorking2EarnRate:1,ContractOrdinaryEarnRate:1,ContractOvertimeEarnRate:1,ContractStartDate:1,CustomerAddress:1,CustomerDescription:1,CustomerEMail:1,CustomerFiscalCode:1,CustomerId:1,CustomerLocation:1,CustomerMnemonicId:1,CustomerPhoneNumber1:1,CustomerPhoneNumber2:1,CustomerPhoneNumber3:1,CustomerVatCode:1,Description:1,EmployeeAddress:1,EmployeeDescription:1,EmployeeEMail:1,EmployeeId:1,EmployeeLocation:1,EmployeeMnemonicId:1,EmployeeNotWorking1CostRate:1,EmployeeNotWorking2CostRate:1,EmployeeOrdinaryCostRate:1,EmployeeOvertimeCostRate:1,EmployeePhoneNumber1:1,EmployeePhoneNumber2:1,EmployeePhoneNumber3:1,EmployeeUserId:1,EndDate:1,EstimatedWork:1,MnemonicId:1,Note:1,ParentActivityDescription:1,ParentActivityId:1,RemainingWork:1,StartDate:1,Tags:1},BusinessUnits:{Name:1,ParentUnitId:1,ParentUnitName:1,ParentUnitParentUnitId:1,UnitId:1},Contacts:{ContactId:1,Email:1,FirstName:1,IdentityNo:1,LastName:1,Title:1,UserDisplayName:1,UserEmail:1,UserId:1,UserInsertDate:1,UserInsertUserId:1,UserIsActive:1,UserLastDirectoryUpdate:1,UserPasswordHash:1,UserPasswordSalt:1,UserSource:1,UserUpdateDate:1,UserUpdateUserId:1,UserUserImage:1,UserUsername:1},Contracts:{ContractId:1,CustomerAddress:1,CustomerDescription:1,CustomerEMail:1,CustomerFiscalCode:1,CustomerId:1,CustomerLocation:1,CustomerMnemonicId:1,CustomerPhoneNumber1:1,CustomerPhoneNumber2:1,CustomerPhoneNumber3:1,CustomerVatCode:1,Description:1,EndDate:1,MnemonicId:1,NotWorking1EarnRate:1,NotWorking2EarnRate:1,OrdinaryEarnRate:1,OvertimeEarnRate:1,StartDate:1},Customers:{Address:1,CustomerId:1,Description:1,EMail:1,FiscalCode:1,Location:1,MnemonicId:1,PhoneNumber1:1,PhoneNumber2:1,PhoneNumber3:1,VatCode:1},Employees:{Address:1,Description:1,EMail:1,EmployeeId:1,Location:1,MnemonicId:1,NotWorking1CostRate:1,NotWorking2CostRate:1,OrdinaryCostRate:1,OvertimeCostRate:1,PhoneNumber1:1,PhoneNumber2:1,PhoneNumber3:1,UserDisplayName:1,UserEmail:1,UserId:1,UserInsertDate:1,UserInsertUserId:1,UserIsActive:1,UserLastDirectoryUpdate:1,UserPasswordHash:1,UserPasswordSalt:1,UserSource:1,UserUpdateDate:1,UserUpdateUserId:1,UserUserImage:1,UserUsername:1},EquipmentTypes:{Description:1,EquipmentTypeId:1},EquipmentUsages:{ActivityActualWork:1,ActivityAttachments:1,ActivityContractId:1,ActivityCustomerId:1,ActivityDescription:1,ActivityEmployeeId:1,ActivityEndDate:1,ActivityEstimatedWork:1,ActivityId:1,ActivityMnemonicId:1,ActivityNote:1,ActivityParentActivityId:1,ActivityRemainingWork:1,ActivityStartDate:1,ActivityTags:1,Amount:1,Attachments:1,ContractCustomerId:1,ContractDescription:1,ContractEndDate:1,ContractId:1,ContractMnemonicId:1,ContractNotWorking1EarnRate:1,ContractNotWorking2EarnRate:1,ContractOrdinaryEarnRate:1,ContractOvertimeEarnRate:1,ContractStartDate:1,CustomerAddress:1,CustomerDescription:1,CustomerEMail:1,CustomerFiscalCode:1,CustomerId:1,CustomerLocation:1,CustomerMnemonicId:1,CustomerPhoneNumber1:1,CustomerPhoneNumber2:1,CustomerPhoneNumber3:1,CustomerVatCode:1,Date:1,Description:1,Distance:1,DistanceAmount:1,EquipmentCostRate:1,EquipmentDescription:1,EquipmentEarnRate:1,EquipmentEquipmentTypeId:1,EquipmentId:1,EquipmentMnemonicId:1,EquipmentNote:1,EquipmentParentEquipmentId:1,EquipmentUnitOfMeasureId:1,EquipmentUsageId:1,MnemonicId:1,Quantity:1,TimesheetStateTypeDescription:1,TimesheetStateTypeId:1},Equipments:{CostRate:1,Description:1,EarnRate:1,EquipmentId:1,EquipmentTypeDescription:1,EquipmentTypeId:1,MnemonicId:1,Note:1,ParentEquipmentCostRate:1,ParentEquipmentDescription:1,ParentEquipmentEarnRate:1,ParentEquipmentEquipmentTypeId:1,ParentEquipmentId:1,ParentEquipmentMnemonicId:1,ParentEquipmentNote:1,ParentEquipmentParentEquipmentId:1,ParentEquipmentUnitOfMeasureId:1,UnitOfMeasureDescription:1,UnitOfMeasureId:1},ReportOreClienteDipendente:{CustomerDescription:1,Date:1,Description:1,EmployeeDescription:1,Ordinary:1,Overtime:1},ReportOreDipendenteCliente:{CustomerDescription:1,Date:1,Description:1,EmployeeDescription:1,Ordinary:1,Overtime:1},Settings:{Attachments:1,ClosingDate:1,CompanyAddress:1,CompanyDescription:1,CompanyLocation:1,CompanyMail:1,CompanyPhoneNumber1:1,CompanyPhoneNumber2:1,CompanyPhoneNumber3:1,Description:1,SettingsId:1},TimesheetStateTypes:{Description:1,TimesheetStateTypeId:1},Timesheets:{ActivityActualWork:1,ActivityAttachments:1,ActivityContractId:1,ActivityCustomerId:1,ActivityDescription:1,ActivityEmployeeId:1,ActivityEndDate:1,ActivityEstimatedWork:1,ActivityId:1,ActivityMnemonicId:1,ActivityNote:1,ActivityParentActivityId:1,ActivityRemainingWork:1,ActivityStartDate:1,ActivityTags:1,ContractCustomerId:1,ContractDescription:1,ContractEndDate:1,ContractId:1,ContractMnemonicId:1,ContractNotWorking1EarnRate:1,ContractNotWorking2EarnRate:1,ContractOrdinaryEarnRate:1,ContractOvertimeEarnRate:1,ContractStartDate:1,CustomerAddress:1,CustomerDescription:1,CustomerEMail:1,CustomerFiscalCode:1,CustomerId:1,CustomerLocation:1,CustomerMnemonicId:1,CustomerPhoneNumber1:1,CustomerPhoneNumber2:1,CustomerPhoneNumber3:1,CustomerVatCode:1,Date:1,Description:1,EmployeeAddress:1,EmployeeDescription:1,EmployeeEMail:1,EmployeeId:1,EmployeeLocation:1,EmployeeMnemonicId:1,EmployeeNotWorking1CostRate:1,EmployeeNotWorking2CostRate:1,EmployeeOrdinaryCostRate:1,EmployeeOvertimeCostRate:1,EmployeePhoneNumber1:1,EmployeePhoneNumber2:1,EmployeePhoneNumber3:1,EmployeeUserId:1,MnemonicId:1,NotWorking1:1,NotWorking2:1,Ordinary:1,Overtime:1,TimesheetId:1,TimesheetStateTypeDescription:1,TimesheetStateTypeId:1},UnitOfMeasures:{Description:1,UnitOfMeasureId:1}}},Forms:{Activity:{ActivityAttachments:1,ActivityData:1,ActivityWork:1},Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}},Timesheet:{InvalidDate:1}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

