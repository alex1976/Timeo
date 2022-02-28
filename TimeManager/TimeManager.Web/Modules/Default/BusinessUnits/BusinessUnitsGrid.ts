
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class BusinessUnitsGrid extends Serenity.EntityGrid<BusinessUnitsRow, any> {
        protected getColumnsKey() { return 'Default.BusinessUnits'; }
        protected getDialogType() { return BusinessUnitsDialog; }
        protected getIdProperty() { return BusinessUnitsRow.idProperty; }
        protected getInsertPermission() { return BusinessUnitsRow.insertPermission; }
        protected getLocalTextPrefix() { return BusinessUnitsRow.localTextPrefix; }
        protected getService() { return BusinessUnitsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}