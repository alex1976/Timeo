
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class TimesheetStateTypesGrid extends Serenity.EntityGrid<TimesheetStateTypesRow, any> {
        protected getColumnsKey() { return 'Default.TimesheetStateTypes'; }
        protected getDialogType() { return TimesheetStateTypesDialog; }
        protected getIdProperty() { return TimesheetStateTypesRow.idProperty; }
        protected getInsertPermission() { return TimesheetStateTypesRow.insertPermission; }
        protected getLocalTextPrefix() { return TimesheetStateTypesRow.localTextPrefix; }
        protected getService() { return TimesheetStateTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}