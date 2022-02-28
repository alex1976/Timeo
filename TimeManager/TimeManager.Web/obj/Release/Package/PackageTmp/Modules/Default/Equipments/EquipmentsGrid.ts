
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class EquipmentsGrid extends Serenity.EntityGrid<EquipmentsRow, any> {
        protected getColumnsKey() { return 'Default.Equipments'; }
        protected getDialogType() { return EquipmentsDialog; }
        protected getIdProperty() { return EquipmentsRow.idProperty; }
        protected getInsertPermission() { return EquipmentsRow.insertPermission; }
        protected getLocalTextPrefix() { return EquipmentsRow.localTextPrefix; }
        protected getService() { return EquipmentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}