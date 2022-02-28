
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class UnitOfMeasuresGrid extends Serenity.EntityGrid<UnitOfMeasuresRow, any> {
        protected getColumnsKey() { return 'Default.UnitOfMeasures'; }
        protected getDialogType() { return UnitOfMeasuresDialog; }
        protected getIdProperty() { return UnitOfMeasuresRow.idProperty; }
        protected getInsertPermission() { return UnitOfMeasuresRow.insertPermission; }
        protected getLocalTextPrefix() { return UnitOfMeasuresRow.localTextPrefix; }
        protected getService() { return UnitOfMeasuresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}