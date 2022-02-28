
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class EquipmentTypesGrid extends Serenity.EntityGrid<EquipmentTypesRow, any> {
        protected getColumnsKey() { return 'Default.EquipmentTypes'; }
        protected getDialogType() { return EquipmentTypesDialog; }
        protected getIdProperty() { return EquipmentTypesRow.idProperty; }
        protected getInsertPermission() { return EquipmentTypesRow.insertPermission; }
        protected getLocalTextPrefix() { return EquipmentTypesRow.localTextPrefix; }
        protected getService() { return EquipmentTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}