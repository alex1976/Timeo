
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class EquipmentTypesDialog extends Serenity.EntityDialog<EquipmentTypesRow, any> {
        protected getFormKey() { return EquipmentTypesForm.formKey; }
        protected getIdProperty() { return EquipmentTypesRow.idProperty; }
        protected getLocalTextPrefix() { return EquipmentTypesRow.localTextPrefix; }
        protected getNameProperty() { return EquipmentTypesRow.nameProperty; }
        protected getService() { return EquipmentTypesService.baseUrl; }
        protected getDeletePermission() { return EquipmentTypesRow.deletePermission; }
        protected getInsertPermission() { return EquipmentTypesRow.insertPermission; }
        protected getUpdatePermission() { return EquipmentTypesRow.updatePermission; }

        protected form = new EquipmentTypesForm(this.idPrefix);

    }
}