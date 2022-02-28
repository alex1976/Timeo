using Serenity.Navigation;
using MyPages = TimeManager.Default.Pages;

//[assembly: NavigationLink(int.MaxValue, "Default/Activities", typeof(MyPages.ActivitiesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Business Units", typeof(MyPages.BusinessUnitsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Contacts", typeof(MyPages.ContactsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Contracts", typeof(MyPages.ContractsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Customers", typeof(MyPages.CustomersController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Employees", typeof(MyPages.EmployeesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Equipments", typeof(MyPages.EquipmentsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Equipment Types", typeof(MyPages.EquipmentTypesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Equipment Usages", typeof(MyPages.EquipmentUsagesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Settings", typeof(MyPages.SettingsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Timesheets", typeof(MyPages.TimesheetsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Timesheet State Types", typeof(MyPages.TimesheetStateTypesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Unit Of Measures", typeof(MyPages.UnitOfMeasuresController), icon: null)]

[assembly: NavigationMenu(6000, "Activities", icon: "fa-address-book")]
[assembly: NavigationLink(6000, "Activities/Activities", typeof(MyPages.ActivitiesController))]
//[assembly: NavigationLink(6000, "Activities/Activities mobile", typeof(MyPages.ActivitiesMobileController), icon: "fa-mobile")]

[assembly: NavigationMenu(7000, "Timesheets", icon: "fa-clock-o")]
[assembly: NavigationLink(7000, "Timesheets/Timesheets", typeof(MyPages.TimesheetsController))]
[assembly: NavigationLink(7000, "Timesheets/Employees", typeof(MyPages.EmployeesController))]
[assembly: NavigationLink(7000, "Timesheets/Reports", typeof(MyPages.ReportsController))]

[assembly: NavigationMenu(7100, "EquipmentUsages", icon: "fa-automobile")]
[assembly: NavigationLink(7100, "EquipmentUsages/EquipmentUsage", typeof(MyPages.EquipmentUsagesController))]
[assembly: NavigationLink(7100, "EquipmentUsages/Equipments", typeof(MyPages.EquipmentsController))]
[assembly: NavigationLink(7100, "EquipmentUsages/Reports", typeof(MyPages.ReportsController))]

[assembly: NavigationMenu(7200, "Settings", icon: "fa-table")]
[assembly: NavigationLink(7200, "Settings/Settings", typeof(MyPages.SettingsController))]
[assembly: NavigationLink(7200, "Settings/Customers", typeof(MyPages.CustomersController))]
[assembly: NavigationLink(7200, "Settings/EquipmentTypes", typeof(MyPages.EquipmentTypesController))]
[assembly: NavigationLink(7200, "Settings/UnitOfMeasures", typeof(MyPages.UnitOfMeasuresController))]
//[assembly: NavigationLink(int.MaxValue, "Default/Priorities", typeof(MyPages.PrioritiesController), icon: null)]
[assembly: NavigationLink(7200, "Settings/Tags", typeof(MyPages.TagsController), icon: null)]
//[assembly: NavigationLink(7200, "Settings/Contracts", typeof(MyPages.ContractsController), icon: null)]