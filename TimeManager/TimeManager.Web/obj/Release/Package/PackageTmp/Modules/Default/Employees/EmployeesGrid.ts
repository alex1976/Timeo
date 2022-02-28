
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class EmployeesGrid extends Serenity.EntityGrid<EmployeesRow, any> {
        protected getColumnsKey() { return 'Default.Employees'; }
        protected getDialogType() { return EmployeesDialog; }
        protected getIdProperty() { return EmployeesRow.idProperty; }
        protected getInsertPermission() { return EmployeesRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeesRow.localTextPrefix; }
        protected getService() { return EmployeesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}