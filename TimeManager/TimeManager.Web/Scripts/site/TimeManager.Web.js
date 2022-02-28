var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = TimeManager.Common || (TimeManager.Common = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = TimeManager.Common || (TimeManager.Common = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ActivitiesForm = /** @class */ (function (_super) {
            __extends(ActivitiesForm, _super);
            function ActivitiesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ActivitiesForm.init) {
                    ActivitiesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.MultipleImageUploadEditor;
                    Q.initFormType(ActivitiesForm, [
                        'MnemonicId', w0,
                        'Description', w1,
                        'Note', w1,
                        'StartDate', w2,
                        'EndDate', w2,
                        'CustomerId', w3,
                        'Tags', w0,
                        'ParentActivityId', w3,
                        'EstimatedWork', w4,
                        'ActualWork', w4,
                        'RemainingWork', w4,
                        'Attachments', w5
                    ]);
                }
                return _this;
            }
            ActivitiesForm.formKey = 'Default.Activities';
            return ActivitiesForm;
        }(Serenity.PrefixedContext));
        Default.ActivitiesForm = ActivitiesForm;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ActivitiesRow;
        (function (ActivitiesRow) {
            ActivitiesRow.idProperty = 'ActivityId';
            ActivitiesRow.nameProperty = 'Description';
            ActivitiesRow.localTextPrefix = 'Default.Activities';
            ActivitiesRow.lookupKey = 'Default.Activities';
            function getLookup() {
                return Q.getLookup('Default.Activities');
            }
            ActivitiesRow.getLookup = getLookup;
            ActivitiesRow.deletePermission = 'Default:Activities:Delete';
            ActivitiesRow.insertPermission = 'Default:Activities:Management';
            ActivitiesRow.readPermission = 'Default:Activities:Read';
            ActivitiesRow.updatePermission = 'Default:Activities:Management';
        })(ActivitiesRow = Default.ActivitiesRow || (Default.ActivitiesRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ActivitiesService;
        (function (ActivitiesService) {
            ActivitiesService.baseUrl = 'Default/Activities';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ActivitiesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ActivitiesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ActivitiesService = Default.ActivitiesService || (Default.ActivitiesService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var BusinessUnitsForm = /** @class */ (function (_super) {
            __extends(BusinessUnitsForm, _super);
            function BusinessUnitsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BusinessUnitsForm.init) {
                    BusinessUnitsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(BusinessUnitsForm, [
                        'Name', w0,
                        'ParentUnitId', w1
                    ]);
                }
                return _this;
            }
            BusinessUnitsForm.formKey = 'Default.BusinessUnits';
            return BusinessUnitsForm;
        }(Serenity.PrefixedContext));
        Default.BusinessUnitsForm = BusinessUnitsForm;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var BusinessUnitsRow;
        (function (BusinessUnitsRow) {
            BusinessUnitsRow.idProperty = 'UnitId';
            BusinessUnitsRow.nameProperty = 'Name';
            BusinessUnitsRow.localTextPrefix = 'Default.BusinessUnits';
            BusinessUnitsRow.deletePermission = 'Administration:General';
            BusinessUnitsRow.insertPermission = 'Administration:General';
            BusinessUnitsRow.readPermission = 'Administration:General';
            BusinessUnitsRow.updatePermission = 'Administration:General';
        })(BusinessUnitsRow = Default.BusinessUnitsRow || (Default.BusinessUnitsRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var BusinessUnitsService;
        (function (BusinessUnitsService) {
            BusinessUnitsService.baseUrl = 'Default/BusinessUnits';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BusinessUnitsService[x] = function (r, s, o) {
                    return Q.serviceRequest(BusinessUnitsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BusinessUnitsService = Default.BusinessUnitsService || (Default.BusinessUnitsService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ContactsForm = /** @class */ (function (_super) {
            __extends(ContactsForm, _super);
            function ContactsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ContactsForm.init) {
                    ContactsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(ContactsForm, [
                        'Title', w0,
                        'FirstName', w0,
                        'LastName', w0,
                        'Email', w0,
                        'IdentityNo', w0,
                        'UserId', w1
                    ]);
                }
                return _this;
            }
            ContactsForm.formKey = 'Default.Contacts';
            return ContactsForm;
        }(Serenity.PrefixedContext));
        Default.ContactsForm = ContactsForm;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ContactsRow;
        (function (ContactsRow) {
            ContactsRow.idProperty = 'ContactId';
            ContactsRow.nameProperty = 'Title';
            ContactsRow.localTextPrefix = 'Default.Contacts';
            ContactsRow.deletePermission = 'Administration:General';
            ContactsRow.insertPermission = 'Administration:General';
            ContactsRow.readPermission = 'Administration:General';
            ContactsRow.updatePermission = 'Administration:General';
        })(ContactsRow = Default.ContactsRow || (Default.ContactsRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ContactsService;
        (function (ContactsService) {
            ContactsService.baseUrl = 'Default/Contacts';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ContactsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ContactsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ContactsService = Default.ContactsService || (Default.ContactsService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ContractsForm = /** @class */ (function (_super) {
            __extends(ContractsForm, _super);
            function ContractsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ContractsForm.init) {
                    ContractsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(ContractsForm, [
                        'MnemonicId', w0,
                        'Description', w0,
                        'StartDate', w1,
                        'EndDate', w1,
                        'CustomerId', w2,
                        'OrdinaryEarnRate', w3,
                        'OvertimeEarnRate', w3,
                        'NotWorking1EarnRate', w3,
                        'NotWorking2EarnRate', w3
                    ]);
                }
                return _this;
            }
            ContractsForm.formKey = 'Default.Contracts';
            return ContractsForm;
        }(Serenity.PrefixedContext));
        Default.ContractsForm = ContractsForm;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ContractsRow;
        (function (ContractsRow) {
            ContractsRow.idProperty = 'ContractId';
            ContractsRow.nameProperty = 'MnemonicId';
            ContractsRow.localTextPrefix = 'Default.Contracts';
            ContractsRow.deletePermission = 'Administration:General';
            ContractsRow.insertPermission = 'Administration:General';
            ContractsRow.readPermission = 'Administration:General';
            ContractsRow.updatePermission = 'Administration:General';
        })(ContractsRow = Default.ContractsRow || (Default.ContractsRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ContractsService;
        (function (ContractsService) {
            ContractsService.baseUrl = 'Default/Contracts';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ContractsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ContractsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ContractsService = Default.ContractsService || (Default.ContractsService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var CustomersForm = /** @class */ (function (_super) {
            __extends(CustomersForm, _super);
            function CustomersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomersForm.init) {
                    CustomersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.EmailEditor;
                    Q.initFormType(CustomersForm, [
                        'MnemonicId', w0,
                        'Description', w1,
                        'FiscalCode', w0,
                        'VatCode', w0,
                        'Address', w0,
                        'Location', w0,
                        'PhoneNumber1', w0,
                        'PhoneNumber2', w0,
                        'PhoneNumber3', w0,
                        'EMail', w2
                    ]);
                }
                return _this;
            }
            CustomersForm.formKey = 'Default.Customers';
            return CustomersForm;
        }(Serenity.PrefixedContext));
        Default.CustomersForm = CustomersForm;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var CustomersRow;
        (function (CustomersRow) {
            CustomersRow.idProperty = 'CustomerId';
            CustomersRow.nameProperty = 'Description';
            CustomersRow.localTextPrefix = 'Default.Customers';
            CustomersRow.lookupKey = 'Default.Customers';
            function getLookup() {
                return Q.getLookup('Default.Customers');
            }
            CustomersRow.getLookup = getLookup;
            CustomersRow.deletePermission = 'Default:Customers:Delete';
            CustomersRow.insertPermission = 'Default:Customers:Management';
            CustomersRow.readPermission = 'Default:Customers:Read';
            CustomersRow.updatePermission = 'Default:Customers:Management';
        })(CustomersRow = Default.CustomersRow || (Default.CustomersRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var CustomersService;
        (function (CustomersService) {
            CustomersService.baseUrl = 'Default/Customers';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomersService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomersService = Default.CustomersService || (Default.CustomersService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EmployeesForm = /** @class */ (function (_super) {
            __extends(EmployeesForm, _super);
            function EmployeesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmployeesForm.init) {
                    EmployeesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.EmailEditor;
                    var w3 = s.LookupEditor;
                    Q.initFormType(EmployeesForm, [
                        'MnemonicId', w0,
                        'Description', w1,
                        'Address', w0,
                        'Location', w0,
                        'PhoneNumber1', w0,
                        'PhoneNumber2', w0,
                        'PhoneNumber3', w0,
                        'EMail', w2,
                        'UserId', w3
                    ]);
                }
                return _this;
            }
            EmployeesForm.formKey = 'Default.Employees';
            return EmployeesForm;
        }(Serenity.PrefixedContext));
        Default.EmployeesForm = EmployeesForm;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EmployeesRow;
        (function (EmployeesRow) {
            EmployeesRow.idProperty = 'EmployeeId';
            EmployeesRow.nameProperty = 'Description';
            EmployeesRow.localTextPrefix = 'Default.Employees';
            EmployeesRow.lookupKey = 'Default.Employees';
            function getLookup() {
                return Q.getLookup('Default.Employees');
            }
            EmployeesRow.getLookup = getLookup;
            EmployeesRow.deletePermission = 'Default:Employees:Delete';
            EmployeesRow.insertPermission = 'Default:Employees:Management';
            EmployeesRow.readPermission = 'Default:Employees:Read';
            EmployeesRow.updatePermission = 'Default:Employees:Management';
        })(EmployeesRow = Default.EmployeesRow || (Default.EmployeesRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EmployeesService;
        (function (EmployeesService) {
            EmployeesService.baseUrl = 'Default/Employees';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeesService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmployeesService = Default.EmployeesService || (Default.EmployeesService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EquipmentTypesForm = /** @class */ (function (_super) {
            __extends(EquipmentTypesForm, _super);
            function EquipmentTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EquipmentTypesForm.init) {
                    EquipmentTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(EquipmentTypesForm, [
                        'Description', w0
                    ]);
                }
                return _this;
            }
            EquipmentTypesForm.formKey = 'Default.EquipmentTypes';
            return EquipmentTypesForm;
        }(Serenity.PrefixedContext));
        Default.EquipmentTypesForm = EquipmentTypesForm;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EquipmentTypesRow;
        (function (EquipmentTypesRow) {
            EquipmentTypesRow.idProperty = 'EquipmentTypeId';
            EquipmentTypesRow.nameProperty = 'Description';
            EquipmentTypesRow.localTextPrefix = 'Default.EquipmentTypes';
            EquipmentTypesRow.lookupKey = 'Default.EquipmentTypes';
            function getLookup() {
                return Q.getLookup('Default.EquipmentTypes');
            }
            EquipmentTypesRow.getLookup = getLookup;
            EquipmentTypesRow.deletePermission = 'Default:EquipmentTypes:Delete';
            EquipmentTypesRow.insertPermission = 'Default:EquipmentTypes:Management';
            EquipmentTypesRow.readPermission = 'Default:EquipmentTypes:Read';
            EquipmentTypesRow.updatePermission = 'Default:EquipmentTypes:Management';
        })(EquipmentTypesRow = Default.EquipmentTypesRow || (Default.EquipmentTypesRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EquipmentTypesService;
        (function (EquipmentTypesService) {
            EquipmentTypesService.baseUrl = 'Default/EquipmentTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EquipmentTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(EquipmentTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EquipmentTypesService = Default.EquipmentTypesService || (Default.EquipmentTypesService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EquipmentUsagesForm = /** @class */ (function (_super) {
            __extends(EquipmentUsagesForm, _super);
            function EquipmentUsagesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EquipmentUsagesForm.init) {
                    EquipmentUsagesForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.MultipleImageUploadEditor;
                    Q.initFormType(EquipmentUsagesForm, [
                        'Date', w0,
                        'CustomerId', w1,
                        'EquipmentId', w1,
                        'Quantity', w2,
                        'Distance', w2,
                        'Description', w3,
                        'Attachments', w4
                    ]);
                }
                return _this;
            }
            EquipmentUsagesForm.formKey = 'Default.EquipmentUsages';
            return EquipmentUsagesForm;
        }(Serenity.PrefixedContext));
        Default.EquipmentUsagesForm = EquipmentUsagesForm;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EquipmentUsagesRow;
        (function (EquipmentUsagesRow) {
            EquipmentUsagesRow.idProperty = 'EquipmentUsageId';
            EquipmentUsagesRow.nameProperty = 'MnemonicId';
            EquipmentUsagesRow.localTextPrefix = 'Default.EquipmentUsages';
            EquipmentUsagesRow.deletePermission = 'Default:EquipmentUsages:Delete';
            EquipmentUsagesRow.insertPermission = 'Default:EquipmentUsages:Management';
            EquipmentUsagesRow.readPermission = 'Default:EquipmentUsages:Read';
            EquipmentUsagesRow.updatePermission = 'Default:EquipmentUsages:Management';
        })(EquipmentUsagesRow = Default.EquipmentUsagesRow || (Default.EquipmentUsagesRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EquipmentUsagesService;
        (function (EquipmentUsagesService) {
            EquipmentUsagesService.baseUrl = 'Default/EquipmentUsages';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EquipmentUsagesService[x] = function (r, s, o) {
                    return Q.serviceRequest(EquipmentUsagesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EquipmentUsagesService = Default.EquipmentUsagesService || (Default.EquipmentUsagesService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EquipmentsForm = /** @class */ (function (_super) {
            __extends(EquipmentsForm, _super);
            function EquipmentsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EquipmentsForm.init) {
                    EquipmentsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(EquipmentsForm, [
                        'MnemonicId', w0,
                        'Description', w1,
                        'Note', w1,
                        'EquipmentTypeId', w2,
                        'UnitOfMeasureId', w2,
                        'EarnRate', w3,
                        'CostRate', w3
                    ]);
                }
                return _this;
            }
            EquipmentsForm.formKey = 'Default.Equipments';
            return EquipmentsForm;
        }(Serenity.PrefixedContext));
        Default.EquipmentsForm = EquipmentsForm;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EquipmentsRow;
        (function (EquipmentsRow) {
            EquipmentsRow.idProperty = 'EquipmentId';
            EquipmentsRow.nameProperty = 'Description';
            EquipmentsRow.localTextPrefix = 'Default.Equipments';
            EquipmentsRow.lookupKey = 'Default.Equipments';
            function getLookup() {
                return Q.getLookup('Default.Equipments');
            }
            EquipmentsRow.getLookup = getLookup;
            EquipmentsRow.deletePermission = 'Default:Equipments:Delete';
            EquipmentsRow.insertPermission = 'Default:Equipments:Management';
            EquipmentsRow.readPermission = 'Default:Equipments:Read';
            EquipmentsRow.updatePermission = 'Default:Equipments:Management';
        })(EquipmentsRow = Default.EquipmentsRow || (Default.EquipmentsRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EquipmentsService;
        (function (EquipmentsService) {
            EquipmentsService.baseUrl = 'Default/Equipments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EquipmentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(EquipmentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EquipmentsService = Default.EquipmentsService || (Default.EquipmentsService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var PrioritiesForm = /** @class */ (function (_super) {
            __extends(PrioritiesForm, _super);
            function PrioritiesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PrioritiesForm.formKey = 'Default.Priorities';
            return PrioritiesForm;
        }(Serenity.PrefixedContext));
        Default.PrioritiesForm = PrioritiesForm;
        [,
            ['Description', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(PrioritiesForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var PrioritiesRow;
        (function (PrioritiesRow) {
            PrioritiesRow.idProperty = 'PriorityId';
            PrioritiesRow.nameProperty = 'Description';
            PrioritiesRow.localTextPrefix = 'Default.Priorities';
            PrioritiesRow.deletePermission = 'Default:Priorities:Delete';
            PrioritiesRow.insertPermission = 'Default:Priorities:Management';
            PrioritiesRow.readPermission = 'Default:Priorities:Read';
            PrioritiesRow.updatePermission = 'Default:Priorities:Management';
            var Fields;
            (function (Fields) {
            })(Fields = PrioritiesRow.Fields || (PrioritiesRow.Fields = {}));
            [
                'PriorityId',
                'Description'
            ].forEach(function (x) { return Fields[x] = x; });
        })(PrioritiesRow = Default.PrioritiesRow || (Default.PrioritiesRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var PrioritiesService;
        (function (PrioritiesService) {
            PrioritiesService.baseUrl = 'Default/Priorities';
            var Methods;
            (function (Methods) {
            })(Methods = PrioritiesService.Methods || (PrioritiesService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PrioritiesService[x] = function (r, s, o) {
                    return Q.serviceRequest(PrioritiesService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = PrioritiesService.baseUrl + '/' + x;
            });
        })(PrioritiesService = Default.PrioritiesService || (Default.PrioritiesService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ReportOreClienteDipendenteRow;
        (function (ReportOreClienteDipendenteRow) {
            ReportOreClienteDipendenteRow.nameProperty = 'CustomerDescription';
            ReportOreClienteDipendenteRow.localTextPrefix = 'Default.ReportOreClienteDipendente';
            ReportOreClienteDipendenteRow.deletePermission = 'Default:General';
            ReportOreClienteDipendenteRow.insertPermission = 'Default:General';
            ReportOreClienteDipendenteRow.readPermission = 'Default:General';
            ReportOreClienteDipendenteRow.updatePermission = 'Default:General';
        })(ReportOreClienteDipendenteRow = Default.ReportOreClienteDipendenteRow || (Default.ReportOreClienteDipendenteRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ReportOreClienteDipendenteService;
        (function (ReportOreClienteDipendenteService) {
            ReportOreClienteDipendenteService.baseUrl = 'Default/Reports';
            [
                'List'
            ].forEach(function (x) {
                ReportOreClienteDipendenteService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReportOreClienteDipendenteService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ReportOreClienteDipendenteService = Default.ReportOreClienteDipendenteService || (Default.ReportOreClienteDipendenteService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ReportOreDipendenteClienteRow;
        (function (ReportOreDipendenteClienteRow) {
            ReportOreDipendenteClienteRow.nameProperty = 'CustomerDescription';
            ReportOreDipendenteClienteRow.localTextPrefix = 'Default.ReportOreDipendenteCliente';
            ReportOreDipendenteClienteRow.deletePermission = 'Default:General';
            ReportOreDipendenteClienteRow.insertPermission = 'Default:General';
            ReportOreDipendenteClienteRow.readPermission = 'Default:General';
            ReportOreDipendenteClienteRow.updatePermission = 'Default:General';
        })(ReportOreDipendenteClienteRow = Default.ReportOreDipendenteClienteRow || (Default.ReportOreDipendenteClienteRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ReportOreDipendenteClienteService;
        (function (ReportOreDipendenteClienteService) {
            ReportOreDipendenteClienteService.baseUrl = 'Default/Reports';
            [
                'List'
            ].forEach(function (x) {
                ReportOreDipendenteClienteService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReportOreDipendenteClienteService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ReportOreDipendenteClienteService = Default.ReportOreDipendenteClienteService || (Default.ReportOreDipendenteClienteService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var SettingsForm = /** @class */ (function (_super) {
            __extends(SettingsForm, _super);
            function SettingsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SettingsForm.init) {
                    SettingsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(SettingsForm, [
                        'Description', w0,
                        'CompanyDescription', w0,
                        'CompanyAddress', w0,
                        'CompanyLocation', w0,
                        'CompanyPhoneNumber1', w0,
                        'CompanyPhoneNumber2', w0,
                        'CompanyPhoneNumber3', w0,
                        'CompanyMail', w0,
                        'Attachments', w0,
                        'ClosingDate', w1
                    ]);
                }
                return _this;
            }
            SettingsForm.formKey = 'Default.Settings';
            return SettingsForm;
        }(Serenity.PrefixedContext));
        Default.SettingsForm = SettingsForm;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var SettingsRow;
        (function (SettingsRow) {
            SettingsRow.idProperty = 'SettingsId';
            SettingsRow.nameProperty = 'Description';
            SettingsRow.localTextPrefix = 'Default.Settings';
            SettingsRow.deletePermission = 'Administration:General';
            SettingsRow.insertPermission = 'Administration:General';
            SettingsRow.readPermission = 'Administration:General';
            SettingsRow.updatePermission = 'Administration:General';
        })(SettingsRow = Default.SettingsRow || (Default.SettingsRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var SettingsService;
        (function (SettingsService) {
            SettingsService.baseUrl = 'Default/Settings';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SettingsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SettingsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SettingsService = Default.SettingsService || (Default.SettingsService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var TagsForm = /** @class */ (function (_super) {
            __extends(TagsForm, _super);
            function TagsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TagsForm.formKey = 'Default.Tags';
            return TagsForm;
        }(Serenity.PrefixedContext));
        Default.TagsForm = TagsForm;
        [,
            ['Description', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(TagsForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var TagsRow;
        (function (TagsRow) {
            TagsRow.idProperty = 'TagId';
            TagsRow.nameProperty = 'Description';
            TagsRow.localTextPrefix = 'Default.Tags';
            TagsRow.deletePermission = 'Default:Tags:Delete';
            TagsRow.insertPermission = 'Default:Tags:Management';
            TagsRow.readPermission = 'Default:Tags:Read';
            TagsRow.updatePermission = 'Default:Tags:Management';
            var Fields;
            (function (Fields) {
            })(Fields = TagsRow.Fields || (TagsRow.Fields = {}));
            [
                'TagId',
                'Description'
            ].forEach(function (x) { return Fields[x] = x; });
        })(TagsRow = Default.TagsRow || (Default.TagsRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var TagsService;
        (function (TagsService) {
            TagsService.baseUrl = 'Default/Tags';
            var Methods;
            (function (Methods) {
            })(Methods = TagsService.Methods || (TagsService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TagsService[x] = function (r, s, o) {
                    return Q.serviceRequest(TagsService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = TagsService.baseUrl + '/' + x;
            });
        })(TagsService = Default.TagsService || (Default.TagsService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var TimesheetStateTypesForm = /** @class */ (function (_super) {
            __extends(TimesheetStateTypesForm, _super);
            function TimesheetStateTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TimesheetStateTypesForm.init) {
                    TimesheetStateTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TimesheetStateTypesForm, [
                        'Description', w0
                    ]);
                }
                return _this;
            }
            TimesheetStateTypesForm.formKey = 'Default.TimesheetStateTypes';
            return TimesheetStateTypesForm;
        }(Serenity.PrefixedContext));
        Default.TimesheetStateTypesForm = TimesheetStateTypesForm;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var TimesheetStateTypesRow;
        (function (TimesheetStateTypesRow) {
            TimesheetStateTypesRow.idProperty = 'TimesheetStateTypeId';
            TimesheetStateTypesRow.nameProperty = 'Description';
            TimesheetStateTypesRow.localTextPrefix = 'Default.TimesheetStateTypes';
            TimesheetStateTypesRow.lookupKey = 'Default.TimesheetStateTypes';
            function getLookup() {
                return Q.getLookup('Default.TimesheetStateTypes');
            }
            TimesheetStateTypesRow.getLookup = getLookup;
            TimesheetStateTypesRow.deletePermission = 'Default:TimesheetStateTypes:Delete';
            TimesheetStateTypesRow.insertPermission = 'Default:TimesheetStateTypes:Management';
            TimesheetStateTypesRow.readPermission = 'Default:TimesheetStateTypes:Read';
            TimesheetStateTypesRow.updatePermission = 'Default:TimesheetStateTypes:Management';
        })(TimesheetStateTypesRow = Default.TimesheetStateTypesRow || (Default.TimesheetStateTypesRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var TimesheetStateTypesService;
        (function (TimesheetStateTypesService) {
            TimesheetStateTypesService.baseUrl = 'Default/TimesheetStateTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TimesheetStateTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(TimesheetStateTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TimesheetStateTypesService = Default.TimesheetStateTypesService || (Default.TimesheetStateTypesService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var TimesheetsForm = /** @class */ (function (_super) {
            __extends(TimesheetsForm, _super);
            function TimesheetsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TimesheetsForm.init) {
                    TimesheetsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.TimeEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(TimesheetsForm, [
                        'Date', w0,
                        'CustomerId', w1,
                        'EmployeeId', w1,
                        'ActivityId', w1,
                        'Ordinary', w2,
                        'Overtime', w2,
                        'NotWorking1', w2,
                        'Description', w3
                    ]);
                }
                return _this;
            }
            TimesheetsForm.formKey = 'Default.Timesheets';
            return TimesheetsForm;
        }(Serenity.PrefixedContext));
        Default.TimesheetsForm = TimesheetsForm;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var TimesheetsRow;
        (function (TimesheetsRow) {
            TimesheetsRow.idProperty = 'TimesheetId';
            TimesheetsRow.nameProperty = 'MnemonicId';
            TimesheetsRow.localTextPrefix = 'Default.Timesheets';
            TimesheetsRow.deletePermission = 'Default:Timesheets:Delete';
            TimesheetsRow.insertPermission = 'Default:Timesheets:Management';
            TimesheetsRow.readPermission = 'Default:Timesheets:Read';
            TimesheetsRow.updatePermission = 'Default:Timesheets:Management';
        })(TimesheetsRow = Default.TimesheetsRow || (Default.TimesheetsRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var TimesheetsService;
        (function (TimesheetsService) {
            TimesheetsService.baseUrl = 'Default/Timesheets';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TimesheetsService[x] = function (r, s, o) {
                    return Q.serviceRequest(TimesheetsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TimesheetsService = Default.TimesheetsService || (Default.TimesheetsService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var UnitOfMeasuresForm = /** @class */ (function (_super) {
            __extends(UnitOfMeasuresForm, _super);
            function UnitOfMeasuresForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UnitOfMeasuresForm.init) {
                    UnitOfMeasuresForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(UnitOfMeasuresForm, [
                        'Description', w0
                    ]);
                }
                return _this;
            }
            UnitOfMeasuresForm.formKey = 'Default.UnitOfMeasures';
            return UnitOfMeasuresForm;
        }(Serenity.PrefixedContext));
        Default.UnitOfMeasuresForm = UnitOfMeasuresForm;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var UnitOfMeasuresRow;
        (function (UnitOfMeasuresRow) {
            UnitOfMeasuresRow.idProperty = 'UnitOfMeasureId';
            UnitOfMeasuresRow.nameProperty = 'Description';
            UnitOfMeasuresRow.localTextPrefix = 'Default.UnitOfMeasures';
            UnitOfMeasuresRow.lookupKey = 'Default.UnitOfMeasures';
            function getLookup() {
                return Q.getLookup('Default.UnitOfMeasures');
            }
            UnitOfMeasuresRow.getLookup = getLookup;
            UnitOfMeasuresRow.deletePermission = 'Default:UnitOfMeasures:Delete';
            UnitOfMeasuresRow.insertPermission = 'Default:UnitOfMeasures:Management';
            UnitOfMeasuresRow.readPermission = 'Default:UnitOfMeasures:Read';
            UnitOfMeasuresRow.updatePermission = 'Default:UnitOfMeasures:Management';
        })(UnitOfMeasuresRow = Default.UnitOfMeasuresRow || (Default.UnitOfMeasuresRow = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var UnitOfMeasuresService;
        (function (UnitOfMeasuresService) {
            UnitOfMeasuresService.baseUrl = 'Default/UnitOfMeasures';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UnitOfMeasuresService[x] = function (r, s, o) {
                    return Q.serviceRequest(UnitOfMeasuresService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UnitOfMeasuresService = Default.UnitOfMeasuresService || (Default.UnitOfMeasuresService = {}));
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = TimeManager.Membership || (TimeManager.Membership = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = TimeManager.Membership || (TimeManager.Membership = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = TimeManager.Membership || (TimeManager.Membership = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = TimeManager.Membership || (TimeManager.Membership = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = TimeManager.Membership || (TimeManager.Membership = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Texts;
    (function (Texts) {
        TimeManager['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Default: { Activities: { ActivityId: 1, ActualWork: 1, Attachments: 1, ContractCustomerId: 1, ContractDescription: 1, ContractEndDate: 1, ContractId: 1, ContractMnemonicId: 1, ContractNotWorking1EarnRate: 1, ContractNotWorking2EarnRate: 1, ContractOrdinaryEarnRate: 1, ContractOvertimeEarnRate: 1, ContractStartDate: 1, CustomerAddress: 1, CustomerDescription: 1, CustomerEMail: 1, CustomerFiscalCode: 1, CustomerId: 1, CustomerLocation: 1, CustomerMnemonicId: 1, CustomerPhoneNumber1: 1, CustomerPhoneNumber2: 1, CustomerPhoneNumber3: 1, CustomerVatCode: 1, Description: 1, EmployeeAddress: 1, EmployeeDescription: 1, EmployeeEMail: 1, EmployeeId: 1, EmployeeLocation: 1, EmployeeMnemonicId: 1, EmployeeNotWorking1CostRate: 1, EmployeeNotWorking2CostRate: 1, EmployeeOrdinaryCostRate: 1, EmployeeOvertimeCostRate: 1, EmployeePhoneNumber1: 1, EmployeePhoneNumber2: 1, EmployeePhoneNumber3: 1, EmployeeUserId: 1, EndDate: 1, EstimatedWork: 1, MnemonicId: 1, Note: 1, ParentActivityDescription: 1, ParentActivityId: 1, RemainingWork: 1, StartDate: 1, Tags: 1 }, BusinessUnits: { Name: 1, ParentUnitId: 1, ParentUnitName: 1, ParentUnitParentUnitId: 1, UnitId: 1 }, Contacts: { ContactId: 1, Email: 1, FirstName: 1, IdentityNo: 1, LastName: 1, Title: 1, UserDisplayName: 1, UserEmail: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserLastDirectoryUpdate: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1 }, Contracts: { ContractId: 1, CustomerAddress: 1, CustomerDescription: 1, CustomerEMail: 1, CustomerFiscalCode: 1, CustomerId: 1, CustomerLocation: 1, CustomerMnemonicId: 1, CustomerPhoneNumber1: 1, CustomerPhoneNumber2: 1, CustomerPhoneNumber3: 1, CustomerVatCode: 1, Description: 1, EndDate: 1, MnemonicId: 1, NotWorking1EarnRate: 1, NotWorking2EarnRate: 1, OrdinaryEarnRate: 1, OvertimeEarnRate: 1, StartDate: 1 }, Customers: { Address: 1, CustomerId: 1, Description: 1, EMail: 1, FiscalCode: 1, Location: 1, MnemonicId: 1, PhoneNumber1: 1, PhoneNumber2: 1, PhoneNumber3: 1, VatCode: 1 }, Employees: { Address: 1, Description: 1, EMail: 1, EmployeeId: 1, Location: 1, MnemonicId: 1, NotWorking1CostRate: 1, NotWorking2CostRate: 1, OrdinaryCostRate: 1, OvertimeCostRate: 1, PhoneNumber1: 1, PhoneNumber2: 1, PhoneNumber3: 1, UserDisplayName: 1, UserEmail: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserLastDirectoryUpdate: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1 }, EquipmentTypes: { Description: 1, EquipmentTypeId: 1 }, EquipmentUsages: { ActivityActualWork: 1, ActivityAttachments: 1, ActivityContractId: 1, ActivityCustomerId: 1, ActivityDescription: 1, ActivityEmployeeId: 1, ActivityEndDate: 1, ActivityEstimatedWork: 1, ActivityId: 1, ActivityMnemonicId: 1, ActivityNote: 1, ActivityParentActivityId: 1, ActivityRemainingWork: 1, ActivityStartDate: 1, ActivityTags: 1, Amount: 1, Attachments: 1, ContractCustomerId: 1, ContractDescription: 1, ContractEndDate: 1, ContractId: 1, ContractMnemonicId: 1, ContractNotWorking1EarnRate: 1, ContractNotWorking2EarnRate: 1, ContractOrdinaryEarnRate: 1, ContractOvertimeEarnRate: 1, ContractStartDate: 1, CustomerAddress: 1, CustomerDescription: 1, CustomerEMail: 1, CustomerFiscalCode: 1, CustomerId: 1, CustomerLocation: 1, CustomerMnemonicId: 1, CustomerPhoneNumber1: 1, CustomerPhoneNumber2: 1, CustomerPhoneNumber3: 1, CustomerVatCode: 1, Date: 1, Description: 1, Distance: 1, DistanceAmount: 1, EquipmentCostRate: 1, EquipmentDescription: 1, EquipmentEarnRate: 1, EquipmentEquipmentTypeId: 1, EquipmentId: 1, EquipmentMnemonicId: 1, EquipmentNote: 1, EquipmentParentEquipmentId: 1, EquipmentUnitOfMeasureId: 1, EquipmentUsageId: 1, MnemonicId: 1, Quantity: 1, TimesheetStateTypeDescription: 1, TimesheetStateTypeId: 1 }, Equipments: { CostRate: 1, Description: 1, EarnRate: 1, EquipmentId: 1, EquipmentTypeDescription: 1, EquipmentTypeId: 1, MnemonicId: 1, Note: 1, ParentEquipmentCostRate: 1, ParentEquipmentDescription: 1, ParentEquipmentEarnRate: 1, ParentEquipmentEquipmentTypeId: 1, ParentEquipmentId: 1, ParentEquipmentMnemonicId: 1, ParentEquipmentNote: 1, ParentEquipmentParentEquipmentId: 1, ParentEquipmentUnitOfMeasureId: 1, UnitOfMeasureDescription: 1, UnitOfMeasureId: 1 }, ReportOreClienteDipendente: { CustomerDescription: 1, Date: 1, Description: 1, EmployeeDescription: 1, Ordinary: 1, Overtime: 1 }, ReportOreDipendenteCliente: { CustomerDescription: 1, Date: 1, Description: 1, EmployeeDescription: 1, Ordinary: 1, Overtime: 1 }, Settings: { Attachments: 1, ClosingDate: 1, CompanyAddress: 1, CompanyDescription: 1, CompanyLocation: 1, CompanyMail: 1, CompanyPhoneNumber1: 1, CompanyPhoneNumber2: 1, CompanyPhoneNumber3: 1, Description: 1, SettingsId: 1 }, TimesheetStateTypes: { Description: 1, TimesheetStateTypeId: 1 }, Timesheets: { ActivityActualWork: 1, ActivityAttachments: 1, ActivityContractId: 1, ActivityCustomerId: 1, ActivityDescription: 1, ActivityEmployeeId: 1, ActivityEndDate: 1, ActivityEstimatedWork: 1, ActivityId: 1, ActivityMnemonicId: 1, ActivityNote: 1, ActivityParentActivityId: 1, ActivityRemainingWork: 1, ActivityStartDate: 1, ActivityTags: 1, ContractCustomerId: 1, ContractDescription: 1, ContractEndDate: 1, ContractId: 1, ContractMnemonicId: 1, ContractNotWorking1EarnRate: 1, ContractNotWorking2EarnRate: 1, ContractOrdinaryEarnRate: 1, ContractOvertimeEarnRate: 1, ContractStartDate: 1, CustomerAddress: 1, CustomerDescription: 1, CustomerEMail: 1, CustomerFiscalCode: 1, CustomerId: 1, CustomerLocation: 1, CustomerMnemonicId: 1, CustomerPhoneNumber1: 1, CustomerPhoneNumber2: 1, CustomerPhoneNumber3: 1, CustomerVatCode: 1, Date: 1, Description: 1, EmployeeAddress: 1, EmployeeDescription: 1, EmployeeEMail: 1, EmployeeId: 1, EmployeeLocation: 1, EmployeeMnemonicId: 1, EmployeeNotWorking1CostRate: 1, EmployeeNotWorking2CostRate: 1, EmployeeOrdinaryCostRate: 1, EmployeeOvertimeCostRate: 1, EmployeePhoneNumber1: 1, EmployeePhoneNumber2: 1, EmployeePhoneNumber3: 1, EmployeeUserId: 1, MnemonicId: 1, NotWorking1: 1, NotWorking2: 1, Ordinary: 1, Overtime: 1, TimesheetId: 1, TimesheetStateTypeDescription: 1, TimesheetStateTypeId: 1 }, UnitOfMeasures: { Description: 1, UnitOfMeasureId: 1 } } }, Forms: { Activity: { ActivityAttachments: 1, ActivityData: 1, ActivityWork: 1 }, Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } }, Timesheet: { InvalidDate: 1 } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = TimeManager.Texts || (TimeManager.Texts = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = TimeManager.Authorization || (TimeManager.Authorization = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = TimeManager.Administration || (TimeManager.Administration = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = TimeManager.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = TimeManager.LanguageList || (TimeManager.LanguageList = {}));
})(TimeManager || (TimeManager = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var TimeManager;
(function (TimeManager) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('TimeManager');
        Serenity.DataGrid.defaultPersistanceStorage = window.localStorage;
        Serenity.EntityDialog.defaultLanguageList = TimeManager.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = TimeManager.ScriptInitialization || (TimeManager.ScriptInitialization = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    TimeManager.BasicProgressDialog = BasicProgressDialog;
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new TimeManager.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = TimeManager.Common || (TimeManager.Common = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = TimeManager.DialogUtils || (TimeManager.DialogUtils = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = TimeManager.Common || (TimeManager.Common = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = TimeManager.Common || (TimeManager.Common = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        //cssClass: 'btn btn-box-tool',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = TimeManager.Common || (TimeManager.Common = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = TimeManager.Common || (TimeManager.Common = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    TimeManager.StaticTextBlock = StaticTextBlock;
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = TimeManager.Common || (TimeManager.Common = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = TimeManager.Common || (TimeManager.Common = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = TimeManager.Common || (TimeManager.Common = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = TimeManager.Common || (TimeManager.Common = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = TimeManager.Common || (TimeManager.Common = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = TimeManager.Common || (TimeManager.Common = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = TimeManager.Common || (TimeManager.Common = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = TimeManager.Common || (TimeManager.Common = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ActivitiesDialog = /** @class */ (function (_super) {
            __extends(ActivitiesDialog, _super);
            function ActivitiesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ActivitiesForm(_this.idPrefix);
                return _this;
            }
            ActivitiesDialog.prototype.getFormKey = function () { return Default.ActivitiesForm.formKey; };
            ActivitiesDialog.prototype.getIdProperty = function () { return Default.ActivitiesRow.idProperty; };
            ActivitiesDialog.prototype.getLocalTextPrefix = function () { return Default.ActivitiesRow.localTextPrefix; };
            ActivitiesDialog.prototype.getNameProperty = function () { return Default.ActivitiesRow.nameProperty; };
            ActivitiesDialog.prototype.getService = function () { return Default.ActivitiesService.baseUrl; };
            ActivitiesDialog.prototype.getDeletePermission = function () { return Default.ActivitiesRow.deletePermission; };
            ActivitiesDialog.prototype.getInsertPermission = function () { return Default.ActivitiesRow.insertPermission; };
            ActivitiesDialog.prototype.getUpdatePermission = function () { return Default.ActivitiesRow.updatePermission; };
            ActivitiesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ActivitiesDialog);
            return ActivitiesDialog;
        }(Serenity.EntityDialog));
        Default.ActivitiesDialog = ActivitiesDialog;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ActivitiesGrid = /** @class */ (function (_super) {
            __extends(ActivitiesGrid, _super);
            function ActivitiesGrid(container) {
                return _super.call(this, container) || this;
                //new Serenity.TreeGridMixin<ActivitiesRow>({
                //    grid: this,
                //    getParentId: x => x.ParentActivityId,
                //    toggleField: ActivitiesRow.Fields.Description,
                //    initialCollapse: () => false
                //});
            }
            ActivitiesGrid.prototype.getColumnsKey = function () { return 'Default.Activities'; };
            ActivitiesGrid.prototype.getDialogType = function () { return Default.ActivitiesDialog; };
            ActivitiesGrid.prototype.getIdProperty = function () { return Default.ActivitiesRow.idProperty; };
            ActivitiesGrid.prototype.getInsertPermission = function () { return Default.ActivitiesRow.insertPermission; };
            ActivitiesGrid.prototype.getLocalTextPrefix = function () { return Default.ActivitiesRow.localTextPrefix; };
            ActivitiesGrid.prototype.getService = function () { return Default.ActivitiesService.baseUrl; };
            ActivitiesGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 50;
                return opt;
            };
            ActivitiesGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action delete-row" title="delete row">' +
                        '<i class="fa fa-trash-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(1, 0, {
                    field: 'View Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action view-details" title="view row"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                columns.splice(2, 0, {
                    field: 'New Row',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action new-order" title="new row"></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            ActivitiesGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        Q.confirm('Delete record?', function () {
                            Default.ActivitiesService.Delete({
                                EntityId: item.ActivityId,
                            }, function (response) {
                                _this.refresh();
                            });
                        });
                    }
                    else if (target.hasClass('view-details')) {
                        this.editItem(item.ActivityId);
                    }
                    else if (target.hasClass('new-order')) {
                        var dlg = new Default.ActivitiesDialog();
                        this.initDialog(dlg);
                        dlg.loadEntityAndOpenDialog({
                            ActivityId: item.ActivityId
                        });
                    }
                }
            };
            ActivitiesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ActivitiesGrid);
            return ActivitiesGrid;
        }(Serenity.EntityGrid));
        Default.ActivitiesGrid = ActivitiesGrid;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var BusinessUnitsDialog = /** @class */ (function (_super) {
            __extends(BusinessUnitsDialog, _super);
            function BusinessUnitsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.BusinessUnitsForm(_this.idPrefix);
                return _this;
            }
            BusinessUnitsDialog.prototype.getFormKey = function () { return Default.BusinessUnitsForm.formKey; };
            BusinessUnitsDialog.prototype.getIdProperty = function () { return Default.BusinessUnitsRow.idProperty; };
            BusinessUnitsDialog.prototype.getLocalTextPrefix = function () { return Default.BusinessUnitsRow.localTextPrefix; };
            BusinessUnitsDialog.prototype.getNameProperty = function () { return Default.BusinessUnitsRow.nameProperty; };
            BusinessUnitsDialog.prototype.getService = function () { return Default.BusinessUnitsService.baseUrl; };
            BusinessUnitsDialog.prototype.getDeletePermission = function () { return Default.BusinessUnitsRow.deletePermission; };
            BusinessUnitsDialog.prototype.getInsertPermission = function () { return Default.BusinessUnitsRow.insertPermission; };
            BusinessUnitsDialog.prototype.getUpdatePermission = function () { return Default.BusinessUnitsRow.updatePermission; };
            BusinessUnitsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BusinessUnitsDialog);
            return BusinessUnitsDialog;
        }(Serenity.EntityDialog));
        Default.BusinessUnitsDialog = BusinessUnitsDialog;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var BusinessUnitsGrid = /** @class */ (function (_super) {
            __extends(BusinessUnitsGrid, _super);
            function BusinessUnitsGrid(container) {
                return _super.call(this, container) || this;
            }
            BusinessUnitsGrid.prototype.getColumnsKey = function () { return 'Default.BusinessUnits'; };
            BusinessUnitsGrid.prototype.getDialogType = function () { return Default.BusinessUnitsDialog; };
            BusinessUnitsGrid.prototype.getIdProperty = function () { return Default.BusinessUnitsRow.idProperty; };
            BusinessUnitsGrid.prototype.getInsertPermission = function () { return Default.BusinessUnitsRow.insertPermission; };
            BusinessUnitsGrid.prototype.getLocalTextPrefix = function () { return Default.BusinessUnitsRow.localTextPrefix; };
            BusinessUnitsGrid.prototype.getService = function () { return Default.BusinessUnitsService.baseUrl; };
            BusinessUnitsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BusinessUnitsGrid);
            return BusinessUnitsGrid;
        }(Serenity.EntityGrid));
        Default.BusinessUnitsGrid = BusinessUnitsGrid;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ContactsDialog = /** @class */ (function (_super) {
            __extends(ContactsDialog, _super);
            function ContactsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ContactsForm(_this.idPrefix);
                return _this;
            }
            ContactsDialog.prototype.getFormKey = function () { return Default.ContactsForm.formKey; };
            ContactsDialog.prototype.getIdProperty = function () { return Default.ContactsRow.idProperty; };
            ContactsDialog.prototype.getLocalTextPrefix = function () { return Default.ContactsRow.localTextPrefix; };
            ContactsDialog.prototype.getNameProperty = function () { return Default.ContactsRow.nameProperty; };
            ContactsDialog.prototype.getService = function () { return Default.ContactsService.baseUrl; };
            ContactsDialog.prototype.getDeletePermission = function () { return Default.ContactsRow.deletePermission; };
            ContactsDialog.prototype.getInsertPermission = function () { return Default.ContactsRow.insertPermission; };
            ContactsDialog.prototype.getUpdatePermission = function () { return Default.ContactsRow.updatePermission; };
            ContactsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ContactsDialog);
            return ContactsDialog;
        }(Serenity.EntityDialog));
        Default.ContactsDialog = ContactsDialog;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ContactsGrid = /** @class */ (function (_super) {
            __extends(ContactsGrid, _super);
            function ContactsGrid(container) {
                return _super.call(this, container) || this;
            }
            ContactsGrid.prototype.getColumnsKey = function () { return 'Default.Contacts'; };
            ContactsGrid.prototype.getDialogType = function () { return Default.ContactsDialog; };
            ContactsGrid.prototype.getIdProperty = function () { return Default.ContactsRow.idProperty; };
            ContactsGrid.prototype.getInsertPermission = function () { return Default.ContactsRow.insertPermission; };
            ContactsGrid.prototype.getLocalTextPrefix = function () { return Default.ContactsRow.localTextPrefix; };
            ContactsGrid.prototype.getService = function () { return Default.ContactsService.baseUrl; };
            ContactsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ContactsGrid);
            return ContactsGrid;
        }(Serenity.EntityGrid));
        Default.ContactsGrid = ContactsGrid;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ContractsDialog = /** @class */ (function (_super) {
            __extends(ContractsDialog, _super);
            function ContractsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.ContractsForm(_this.idPrefix);
                return _this;
            }
            ContractsDialog.prototype.getFormKey = function () { return Default.ContractsForm.formKey; };
            ContractsDialog.prototype.getIdProperty = function () { return Default.ContractsRow.idProperty; };
            ContractsDialog.prototype.getLocalTextPrefix = function () { return Default.ContractsRow.localTextPrefix; };
            ContractsDialog.prototype.getNameProperty = function () { return Default.ContractsRow.nameProperty; };
            ContractsDialog.prototype.getService = function () { return Default.ContractsService.baseUrl; };
            ContractsDialog.prototype.getDeletePermission = function () { return Default.ContractsRow.deletePermission; };
            ContractsDialog.prototype.getInsertPermission = function () { return Default.ContractsRow.insertPermission; };
            ContractsDialog.prototype.getUpdatePermission = function () { return Default.ContractsRow.updatePermission; };
            ContractsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ContractsDialog);
            return ContractsDialog;
        }(Serenity.EntityDialog));
        Default.ContractsDialog = ContractsDialog;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var ContractsGrid = /** @class */ (function (_super) {
            __extends(ContractsGrid, _super);
            function ContractsGrid(container) {
                return _super.call(this, container) || this;
            }
            ContractsGrid.prototype.getColumnsKey = function () { return 'Default.Contracts'; };
            ContractsGrid.prototype.getDialogType = function () { return Default.ContractsDialog; };
            ContractsGrid.prototype.getIdProperty = function () { return Default.ContractsRow.idProperty; };
            ContractsGrid.prototype.getInsertPermission = function () { return Default.ContractsRow.insertPermission; };
            ContractsGrid.prototype.getLocalTextPrefix = function () { return Default.ContractsRow.localTextPrefix; };
            ContractsGrid.prototype.getService = function () { return Default.ContractsService.baseUrl; };
            ContractsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ContractsGrid);
            return ContractsGrid;
        }(Serenity.EntityGrid));
        Default.ContractsGrid = ContractsGrid;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var CustomersDialog = /** @class */ (function (_super) {
            __extends(CustomersDialog, _super);
            function CustomersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.CustomersForm(_this.idPrefix);
                return _this;
            }
            CustomersDialog.prototype.getFormKey = function () { return Default.CustomersForm.formKey; };
            CustomersDialog.prototype.getIdProperty = function () { return Default.CustomersRow.idProperty; };
            CustomersDialog.prototype.getLocalTextPrefix = function () { return Default.CustomersRow.localTextPrefix; };
            CustomersDialog.prototype.getNameProperty = function () { return Default.CustomersRow.nameProperty; };
            CustomersDialog.prototype.getService = function () { return Default.CustomersService.baseUrl; };
            CustomersDialog.prototype.getDeletePermission = function () { return Default.CustomersRow.deletePermission; };
            CustomersDialog.prototype.getInsertPermission = function () { return Default.CustomersRow.insertPermission; };
            CustomersDialog.prototype.getUpdatePermission = function () { return Default.CustomersRow.updatePermission; };
            CustomersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomersDialog);
            return CustomersDialog;
        }(Serenity.EntityDialog));
        Default.CustomersDialog = CustomersDialog;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var CustomersGrid = /** @class */ (function (_super) {
            __extends(CustomersGrid, _super);
            function CustomersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomersGrid.prototype.getColumnsKey = function () { return 'Default.Customers'; };
            CustomersGrid.prototype.getDialogType = function () { return Default.CustomersDialog; };
            CustomersGrid.prototype.getIdProperty = function () { return Default.CustomersRow.idProperty; };
            CustomersGrid.prototype.getInsertPermission = function () { return Default.CustomersRow.insertPermission; };
            CustomersGrid.prototype.getLocalTextPrefix = function () { return Default.CustomersRow.localTextPrefix; };
            CustomersGrid.prototype.getService = function () { return Default.CustomersService.baseUrl; };
            CustomersGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 50;
                return opt;
            };
            CustomersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomersGrid);
            return CustomersGrid;
        }(Serenity.EntityGrid));
        Default.CustomersGrid = CustomersGrid;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EmployeesDialog = /** @class */ (function (_super) {
            __extends(EmployeesDialog, _super);
            function EmployeesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.EmployeesForm(_this.idPrefix);
                return _this;
            }
            EmployeesDialog.prototype.getFormKey = function () { return Default.EmployeesForm.formKey; };
            EmployeesDialog.prototype.getIdProperty = function () { return Default.EmployeesRow.idProperty; };
            EmployeesDialog.prototype.getLocalTextPrefix = function () { return Default.EmployeesRow.localTextPrefix; };
            EmployeesDialog.prototype.getNameProperty = function () { return Default.EmployeesRow.nameProperty; };
            EmployeesDialog.prototype.getService = function () { return Default.EmployeesService.baseUrl; };
            EmployeesDialog.prototype.getDeletePermission = function () { return Default.EmployeesRow.deletePermission; };
            EmployeesDialog.prototype.getInsertPermission = function () { return Default.EmployeesRow.insertPermission; };
            EmployeesDialog.prototype.getUpdatePermission = function () { return Default.EmployeesRow.updatePermission; };
            EmployeesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeesDialog);
            return EmployeesDialog;
        }(Serenity.EntityDialog));
        Default.EmployeesDialog = EmployeesDialog;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EmployeesGrid = /** @class */ (function (_super) {
            __extends(EmployeesGrid, _super);
            function EmployeesGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeesGrid.prototype.getColumnsKey = function () { return 'Default.Employees'; };
            EmployeesGrid.prototype.getDialogType = function () { return Default.EmployeesDialog; };
            EmployeesGrid.prototype.getIdProperty = function () { return Default.EmployeesRow.idProperty; };
            EmployeesGrid.prototype.getInsertPermission = function () { return Default.EmployeesRow.insertPermission; };
            EmployeesGrid.prototype.getLocalTextPrefix = function () { return Default.EmployeesRow.localTextPrefix; };
            EmployeesGrid.prototype.getService = function () { return Default.EmployeesService.baseUrl; };
            EmployeesGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 50;
                return opt;
            };
            EmployeesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeesGrid);
            return EmployeesGrid;
        }(Serenity.EntityGrid));
        Default.EmployeesGrid = EmployeesGrid;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EquipmentTypesDialog = /** @class */ (function (_super) {
            __extends(EquipmentTypesDialog, _super);
            function EquipmentTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.EquipmentTypesForm(_this.idPrefix);
                return _this;
            }
            EquipmentTypesDialog.prototype.getFormKey = function () { return Default.EquipmentTypesForm.formKey; };
            EquipmentTypesDialog.prototype.getIdProperty = function () { return Default.EquipmentTypesRow.idProperty; };
            EquipmentTypesDialog.prototype.getLocalTextPrefix = function () { return Default.EquipmentTypesRow.localTextPrefix; };
            EquipmentTypesDialog.prototype.getNameProperty = function () { return Default.EquipmentTypesRow.nameProperty; };
            EquipmentTypesDialog.prototype.getService = function () { return Default.EquipmentTypesService.baseUrl; };
            EquipmentTypesDialog.prototype.getDeletePermission = function () { return Default.EquipmentTypesRow.deletePermission; };
            EquipmentTypesDialog.prototype.getInsertPermission = function () { return Default.EquipmentTypesRow.insertPermission; };
            EquipmentTypesDialog.prototype.getUpdatePermission = function () { return Default.EquipmentTypesRow.updatePermission; };
            EquipmentTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EquipmentTypesDialog);
            return EquipmentTypesDialog;
        }(Serenity.EntityDialog));
        Default.EquipmentTypesDialog = EquipmentTypesDialog;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EquipmentTypesGrid = /** @class */ (function (_super) {
            __extends(EquipmentTypesGrid, _super);
            function EquipmentTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            EquipmentTypesGrid.prototype.getColumnsKey = function () { return 'Default.EquipmentTypes'; };
            EquipmentTypesGrid.prototype.getDialogType = function () { return Default.EquipmentTypesDialog; };
            EquipmentTypesGrid.prototype.getIdProperty = function () { return Default.EquipmentTypesRow.idProperty; };
            EquipmentTypesGrid.prototype.getInsertPermission = function () { return Default.EquipmentTypesRow.insertPermission; };
            EquipmentTypesGrid.prototype.getLocalTextPrefix = function () { return Default.EquipmentTypesRow.localTextPrefix; };
            EquipmentTypesGrid.prototype.getService = function () { return Default.EquipmentTypesService.baseUrl; };
            EquipmentTypesGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 50;
                return opt;
            };
            EquipmentTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EquipmentTypesGrid);
            return EquipmentTypesGrid;
        }(Serenity.EntityGrid));
        Default.EquipmentTypesGrid = EquipmentTypesGrid;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EquipmentUsagesDialog = /** @class */ (function (_super) {
            __extends(EquipmentUsagesDialog, _super);
            function EquipmentUsagesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.EquipmentUsagesForm(_this.idPrefix);
                return _this;
            }
            EquipmentUsagesDialog.prototype.getFormKey = function () { return Default.EquipmentUsagesForm.formKey; };
            EquipmentUsagesDialog.prototype.getIdProperty = function () { return Default.EquipmentUsagesRow.idProperty; };
            EquipmentUsagesDialog.prototype.getLocalTextPrefix = function () { return Default.EquipmentUsagesRow.localTextPrefix; };
            EquipmentUsagesDialog.prototype.getNameProperty = function () { return Default.EquipmentUsagesRow.nameProperty; };
            EquipmentUsagesDialog.prototype.getService = function () { return Default.EquipmentUsagesService.baseUrl; };
            EquipmentUsagesDialog.prototype.getDeletePermission = function () { return Default.EquipmentUsagesRow.deletePermission; };
            EquipmentUsagesDialog.prototype.getInsertPermission = function () { return Default.EquipmentUsagesRow.insertPermission; };
            EquipmentUsagesDialog.prototype.getUpdatePermission = function () { return Default.EquipmentUsagesRow.updatePermission; };
            EquipmentUsagesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EquipmentUsagesDialog);
            return EquipmentUsagesDialog;
        }(Serenity.EntityDialog));
        Default.EquipmentUsagesDialog = EquipmentUsagesDialog;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EquipmentUsagesGrid = /** @class */ (function (_super) {
            __extends(EquipmentUsagesGrid, _super);
            function EquipmentUsagesGrid(container) {
                return _super.call(this, container) || this;
            }
            EquipmentUsagesGrid.prototype.getColumnsKey = function () { return 'Default.EquipmentUsages'; };
            EquipmentUsagesGrid.prototype.getDialogType = function () { return Default.EquipmentUsagesDialog; };
            EquipmentUsagesGrid.prototype.getIdProperty = function () { return Default.EquipmentUsagesRow.idProperty; };
            EquipmentUsagesGrid.prototype.getInsertPermission = function () { return Default.EquipmentUsagesRow.insertPermission; };
            EquipmentUsagesGrid.prototype.getLocalTextPrefix = function () { return Default.EquipmentUsagesRow.localTextPrefix; };
            EquipmentUsagesGrid.prototype.getService = function () { return Default.EquipmentUsagesService.baseUrl; };
            EquipmentUsagesGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 50;
                return opt;
            };
            EquipmentUsagesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(TimeManager.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Default.EquipmentUsagesService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(TimeManager.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            EquipmentUsagesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EquipmentUsagesGrid);
            return EquipmentUsagesGrid;
        }(Serenity.EntityGrid));
        Default.EquipmentUsagesGrid = EquipmentUsagesGrid;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EquipmentsDialog = /** @class */ (function (_super) {
            __extends(EquipmentsDialog, _super);
            function EquipmentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.EquipmentsForm(_this.idPrefix);
                return _this;
            }
            EquipmentsDialog.prototype.getFormKey = function () { return Default.EquipmentsForm.formKey; };
            EquipmentsDialog.prototype.getIdProperty = function () { return Default.EquipmentsRow.idProperty; };
            EquipmentsDialog.prototype.getLocalTextPrefix = function () { return Default.EquipmentsRow.localTextPrefix; };
            EquipmentsDialog.prototype.getNameProperty = function () { return Default.EquipmentsRow.nameProperty; };
            EquipmentsDialog.prototype.getService = function () { return Default.EquipmentsService.baseUrl; };
            EquipmentsDialog.prototype.getDeletePermission = function () { return Default.EquipmentsRow.deletePermission; };
            EquipmentsDialog.prototype.getInsertPermission = function () { return Default.EquipmentsRow.insertPermission; };
            EquipmentsDialog.prototype.getUpdatePermission = function () { return Default.EquipmentsRow.updatePermission; };
            EquipmentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EquipmentsDialog);
            return EquipmentsDialog;
        }(Serenity.EntityDialog));
        Default.EquipmentsDialog = EquipmentsDialog;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var EquipmentsGrid = /** @class */ (function (_super) {
            __extends(EquipmentsGrid, _super);
            function EquipmentsGrid(container) {
                return _super.call(this, container) || this;
            }
            EquipmentsGrid.prototype.getColumnsKey = function () { return 'Default.Equipments'; };
            EquipmentsGrid.prototype.getDialogType = function () { return Default.EquipmentsDialog; };
            EquipmentsGrid.prototype.getIdProperty = function () { return Default.EquipmentsRow.idProperty; };
            EquipmentsGrid.prototype.getInsertPermission = function () { return Default.EquipmentsRow.insertPermission; };
            EquipmentsGrid.prototype.getLocalTextPrefix = function () { return Default.EquipmentsRow.localTextPrefix; };
            EquipmentsGrid.prototype.getService = function () { return Default.EquipmentsService.baseUrl; };
            EquipmentsGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 50;
                return opt;
            };
            EquipmentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EquipmentsGrid);
            return EquipmentsGrid;
        }(Serenity.EntityGrid));
        Default.EquipmentsGrid = EquipmentsGrid;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var PrioritiesDialog = /** @class */ (function (_super) {
            __extends(PrioritiesDialog, _super);
            function PrioritiesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PrioritiesForm(_this.idPrefix);
                return _this;
            }
            PrioritiesDialog.prototype.getFormKey = function () { return Default.PrioritiesForm.formKey; };
            PrioritiesDialog.prototype.getIdProperty = function () { return Default.PrioritiesRow.idProperty; };
            PrioritiesDialog.prototype.getLocalTextPrefix = function () { return Default.PrioritiesRow.localTextPrefix; };
            PrioritiesDialog.prototype.getNameProperty = function () { return Default.PrioritiesRow.nameProperty; };
            PrioritiesDialog.prototype.getService = function () { return Default.PrioritiesService.baseUrl; };
            PrioritiesDialog.prototype.getDeletePermission = function () { return Default.PrioritiesRow.deletePermission; };
            PrioritiesDialog.prototype.getInsertPermission = function () { return Default.PrioritiesRow.insertPermission; };
            PrioritiesDialog.prototype.getUpdatePermission = function () { return Default.PrioritiesRow.updatePermission; };
            PrioritiesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PrioritiesDialog);
            return PrioritiesDialog;
        }(Serenity.EntityDialog));
        Default.PrioritiesDialog = PrioritiesDialog;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var PrioritiesGrid = /** @class */ (function (_super) {
            __extends(PrioritiesGrid, _super);
            function PrioritiesGrid(container) {
                return _super.call(this, container) || this;
            }
            PrioritiesGrid.prototype.getColumnsKey = function () { return 'Default.Priorities'; };
            PrioritiesGrid.prototype.getDialogType = function () { return Default.PrioritiesDialog; };
            PrioritiesGrid.prototype.getIdProperty = function () { return Default.PrioritiesRow.idProperty; };
            PrioritiesGrid.prototype.getInsertPermission = function () { return Default.PrioritiesRow.insertPermission; };
            PrioritiesGrid.prototype.getLocalTextPrefix = function () { return Default.PrioritiesRow.localTextPrefix; };
            PrioritiesGrid.prototype.getService = function () { return Default.PrioritiesService.baseUrl; };
            PrioritiesGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 50;
                return opt;
            };
            PrioritiesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PrioritiesGrid);
            return PrioritiesGrid;
        }(Serenity.EntityGrid));
        Default.PrioritiesGrid = PrioritiesGrid;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var SettingsDialog = /** @class */ (function (_super) {
            __extends(SettingsDialog, _super);
            function SettingsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.SettingsForm(_this.idPrefix);
                return _this;
            }
            SettingsDialog.prototype.getFormKey = function () { return Default.SettingsForm.formKey; };
            SettingsDialog.prototype.getIdProperty = function () { return Default.SettingsRow.idProperty; };
            SettingsDialog.prototype.getLocalTextPrefix = function () { return Default.SettingsRow.localTextPrefix; };
            SettingsDialog.prototype.getNameProperty = function () { return Default.SettingsRow.nameProperty; };
            SettingsDialog.prototype.getService = function () { return Default.SettingsService.baseUrl; };
            SettingsDialog.prototype.getDeletePermission = function () { return Default.SettingsRow.deletePermission; };
            SettingsDialog.prototype.getInsertPermission = function () { return Default.SettingsRow.insertPermission; };
            SettingsDialog.prototype.getUpdatePermission = function () { return Default.SettingsRow.updatePermission; };
            SettingsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SettingsDialog);
            return SettingsDialog;
        }(Serenity.EntityDialog));
        Default.SettingsDialog = SettingsDialog;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var SettingsGrid = /** @class */ (function (_super) {
            __extends(SettingsGrid, _super);
            function SettingsGrid(container) {
                return _super.call(this, container) || this;
            }
            SettingsGrid.prototype.getColumnsKey = function () { return 'Default.Settings'; };
            SettingsGrid.prototype.getDialogType = function () { return Default.SettingsDialog; };
            SettingsGrid.prototype.getIdProperty = function () { return Default.SettingsRow.idProperty; };
            SettingsGrid.prototype.getInsertPermission = function () { return Default.SettingsRow.insertPermission; };
            SettingsGrid.prototype.getLocalTextPrefix = function () { return Default.SettingsRow.localTextPrefix; };
            SettingsGrid.prototype.getService = function () { return Default.SettingsService.baseUrl; };
            SettingsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SettingsGrid);
            return SettingsGrid;
        }(Serenity.EntityGrid));
        Default.SettingsGrid = SettingsGrid;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var TagsDialog = /** @class */ (function (_super) {
            __extends(TagsDialog, _super);
            function TagsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.TagsForm(_this.idPrefix);
                return _this;
            }
            TagsDialog.prototype.getFormKey = function () { return Default.TagsForm.formKey; };
            TagsDialog.prototype.getIdProperty = function () { return Default.TagsRow.idProperty; };
            TagsDialog.prototype.getLocalTextPrefix = function () { return Default.TagsRow.localTextPrefix; };
            TagsDialog.prototype.getNameProperty = function () { return Default.TagsRow.nameProperty; };
            TagsDialog.prototype.getService = function () { return Default.TagsService.baseUrl; };
            TagsDialog.prototype.getDeletePermission = function () { return Default.TagsRow.deletePermission; };
            TagsDialog.prototype.getInsertPermission = function () { return Default.TagsRow.insertPermission; };
            TagsDialog.prototype.getUpdatePermission = function () { return Default.TagsRow.updatePermission; };
            TagsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TagsDialog);
            return TagsDialog;
        }(Serenity.EntityDialog));
        Default.TagsDialog = TagsDialog;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var TagsGrid = /** @class */ (function (_super) {
            __extends(TagsGrid, _super);
            function TagsGrid(container) {
                return _super.call(this, container) || this;
            }
            TagsGrid.prototype.getColumnsKey = function () { return 'Default.Tags'; };
            TagsGrid.prototype.getDialogType = function () { return Default.TagsDialog; };
            TagsGrid.prototype.getIdProperty = function () { return Default.TagsRow.idProperty; };
            TagsGrid.prototype.getInsertPermission = function () { return Default.TagsRow.insertPermission; };
            TagsGrid.prototype.getLocalTextPrefix = function () { return Default.TagsRow.localTextPrefix; };
            TagsGrid.prototype.getService = function () { return Default.TagsService.baseUrl; };
            TagsGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 50;
                return opt;
            };
            TagsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TagsGrid);
            return TagsGrid;
        }(Serenity.EntityGrid));
        Default.TagsGrid = TagsGrid;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var TimesheetStateTypesDialog = /** @class */ (function (_super) {
            __extends(TimesheetStateTypesDialog, _super);
            function TimesheetStateTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.TimesheetStateTypesForm(_this.idPrefix);
                return _this;
            }
            TimesheetStateTypesDialog.prototype.getFormKey = function () { return Default.TimesheetStateTypesForm.formKey; };
            TimesheetStateTypesDialog.prototype.getIdProperty = function () { return Default.TimesheetStateTypesRow.idProperty; };
            TimesheetStateTypesDialog.prototype.getLocalTextPrefix = function () { return Default.TimesheetStateTypesRow.localTextPrefix; };
            TimesheetStateTypesDialog.prototype.getNameProperty = function () { return Default.TimesheetStateTypesRow.nameProperty; };
            TimesheetStateTypesDialog.prototype.getService = function () { return Default.TimesheetStateTypesService.baseUrl; };
            TimesheetStateTypesDialog.prototype.getDeletePermission = function () { return Default.TimesheetStateTypesRow.deletePermission; };
            TimesheetStateTypesDialog.prototype.getInsertPermission = function () { return Default.TimesheetStateTypesRow.insertPermission; };
            TimesheetStateTypesDialog.prototype.getUpdatePermission = function () { return Default.TimesheetStateTypesRow.updatePermission; };
            TimesheetStateTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TimesheetStateTypesDialog);
            return TimesheetStateTypesDialog;
        }(Serenity.EntityDialog));
        Default.TimesheetStateTypesDialog = TimesheetStateTypesDialog;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var TimesheetStateTypesGrid = /** @class */ (function (_super) {
            __extends(TimesheetStateTypesGrid, _super);
            function TimesheetStateTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            TimesheetStateTypesGrid.prototype.getColumnsKey = function () { return 'Default.TimesheetStateTypes'; };
            TimesheetStateTypesGrid.prototype.getDialogType = function () { return Default.TimesheetStateTypesDialog; };
            TimesheetStateTypesGrid.prototype.getIdProperty = function () { return Default.TimesheetStateTypesRow.idProperty; };
            TimesheetStateTypesGrid.prototype.getInsertPermission = function () { return Default.TimesheetStateTypesRow.insertPermission; };
            TimesheetStateTypesGrid.prototype.getLocalTextPrefix = function () { return Default.TimesheetStateTypesRow.localTextPrefix; };
            TimesheetStateTypesGrid.prototype.getService = function () { return Default.TimesheetStateTypesService.baseUrl; };
            TimesheetStateTypesGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 50;
                return opt;
            };
            TimesheetStateTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TimesheetStateTypesGrid);
            return TimesheetStateTypesGrid;
        }(Serenity.EntityGrid));
        Default.TimesheetStateTypesGrid = TimesheetStateTypesGrid;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var TimesheetsDialog = /** @class */ (function (_super) {
            __extends(TimesheetsDialog, _super);
            function TimesheetsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.TimesheetsForm(_this.idPrefix);
                return _this;
            }
            TimesheetsDialog.prototype.getFormKey = function () { return Default.TimesheetsForm.formKey; };
            TimesheetsDialog.prototype.getIdProperty = function () { return Default.TimesheetsRow.idProperty; };
            TimesheetsDialog.prototype.getLocalTextPrefix = function () { return Default.TimesheetsRow.localTextPrefix; };
            TimesheetsDialog.prototype.getNameProperty = function () { return Default.TimesheetsRow.nameProperty; };
            TimesheetsDialog.prototype.getService = function () { return Default.TimesheetsService.baseUrl; };
            TimesheetsDialog.prototype.getDeletePermission = function () { return Default.TimesheetsRow.deletePermission; };
            TimesheetsDialog.prototype.getInsertPermission = function () { return Default.TimesheetsRow.insertPermission; };
            TimesheetsDialog.prototype.getUpdatePermission = function () { return Default.TimesheetsRow.updatePermission; };
            TimesheetsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TimesheetsDialog);
            return TimesheetsDialog;
        }(Serenity.EntityDialog));
        Default.TimesheetsDialog = TimesheetsDialog;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var TimesheetsGrid = /** @class */ (function (_super) {
            __extends(TimesheetsGrid, _super);
            function TimesheetsGrid(container) {
                return _super.call(this, container) || this;
            }
            TimesheetsGrid.prototype.getColumnsKey = function () { return 'Default.Timesheets'; };
            TimesheetsGrid.prototype.getDialogType = function () { return Default.TimesheetsDialog; };
            TimesheetsGrid.prototype.getIdProperty = function () { return Default.TimesheetsRow.idProperty; };
            TimesheetsGrid.prototype.getInsertPermission = function () { return Default.TimesheetsRow.insertPermission; };
            TimesheetsGrid.prototype.getLocalTextPrefix = function () { return Default.TimesheetsRow.localTextPrefix; };
            TimesheetsGrid.prototype.getService = function () { return Default.TimesheetsService.baseUrl; };
            TimesheetsGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 50;
                return opt;
            };
            TimesheetsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                //buttons.push({
                //    title: Q.text('Nuovo UTILIZZO'),
                //    cssClass: 'add-button',
                //    onClick: () => {
                //        new EquipmentUsagesDialog().dialogOpen();
                //    }
                //});
                buttons.push(TimeManager.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Default.TimesheetsService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(TimeManager.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            TimesheetsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TimesheetsGrid);
            return TimesheetsGrid;
        }(Serenity.EntityGrid));
        Default.TimesheetsGrid = TimesheetsGrid;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var UnitOfMeasuresDialog = /** @class */ (function (_super) {
            __extends(UnitOfMeasuresDialog, _super);
            function UnitOfMeasuresDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.UnitOfMeasuresForm(_this.idPrefix);
                return _this;
            }
            UnitOfMeasuresDialog.prototype.getFormKey = function () { return Default.UnitOfMeasuresForm.formKey; };
            UnitOfMeasuresDialog.prototype.getIdProperty = function () { return Default.UnitOfMeasuresRow.idProperty; };
            UnitOfMeasuresDialog.prototype.getLocalTextPrefix = function () { return Default.UnitOfMeasuresRow.localTextPrefix; };
            UnitOfMeasuresDialog.prototype.getNameProperty = function () { return Default.UnitOfMeasuresRow.nameProperty; };
            UnitOfMeasuresDialog.prototype.getService = function () { return Default.UnitOfMeasuresService.baseUrl; };
            UnitOfMeasuresDialog.prototype.getDeletePermission = function () { return Default.UnitOfMeasuresRow.deletePermission; };
            UnitOfMeasuresDialog.prototype.getInsertPermission = function () { return Default.UnitOfMeasuresRow.insertPermission; };
            UnitOfMeasuresDialog.prototype.getUpdatePermission = function () { return Default.UnitOfMeasuresRow.updatePermission; };
            UnitOfMeasuresDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UnitOfMeasuresDialog);
            return UnitOfMeasuresDialog;
        }(Serenity.EntityDialog));
        Default.UnitOfMeasuresDialog = UnitOfMeasuresDialog;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Default;
    (function (Default) {
        var UnitOfMeasuresGrid = /** @class */ (function (_super) {
            __extends(UnitOfMeasuresGrid, _super);
            function UnitOfMeasuresGrid(container) {
                return _super.call(this, container) || this;
            }
            UnitOfMeasuresGrid.prototype.getColumnsKey = function () { return 'Default.UnitOfMeasures'; };
            UnitOfMeasuresGrid.prototype.getDialogType = function () { return Default.UnitOfMeasuresDialog; };
            UnitOfMeasuresGrid.prototype.getIdProperty = function () { return Default.UnitOfMeasuresRow.idProperty; };
            UnitOfMeasuresGrid.prototype.getInsertPermission = function () { return Default.UnitOfMeasuresRow.insertPermission; };
            UnitOfMeasuresGrid.prototype.getLocalTextPrefix = function () { return Default.UnitOfMeasuresRow.localTextPrefix; };
            UnitOfMeasuresGrid.prototype.getService = function () { return Default.UnitOfMeasuresService.baseUrl; };
            UnitOfMeasuresGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 50;
                return opt;
            };
            UnitOfMeasuresGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UnitOfMeasuresGrid);
            return UnitOfMeasuresGrid;
        }(Serenity.EntityGrid));
        Default.UnitOfMeasuresGrid = UnitOfMeasuresGrid;
    })(Default = TimeManager.Default || (TimeManager.Default = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = TimeManager.Membership || (TimeManager.Membership = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = TimeManager.Membership || (TimeManager.Membership = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = TimeManager.Membership || (TimeManager.Membership = {}));
})(TimeManager || (TimeManager = {}));
var TimeManager;
(function (TimeManager) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = TimeManager.Membership || (TimeManager.Membership = {}));
})(TimeManager || (TimeManager = {}));
//# sourceMappingURL=TimeManager.Web.js.map