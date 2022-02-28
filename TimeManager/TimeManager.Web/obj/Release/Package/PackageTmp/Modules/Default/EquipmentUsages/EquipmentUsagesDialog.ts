
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class EquipmentUsagesDialog extends Serenity.EntityDialog<EquipmentUsagesRow, any> {
        protected getFormKey() { return EquipmentUsagesForm.formKey; }
        protected getIdProperty() { return EquipmentUsagesRow.idProperty; }
        protected getLocalTextPrefix() { return EquipmentUsagesRow.localTextPrefix; }
        protected getNameProperty() { return EquipmentUsagesRow.nameProperty; }
        protected getService() { return EquipmentUsagesService.baseUrl; }
        protected getDeletePermission() { return EquipmentUsagesRow.deletePermission; }
        protected getInsertPermission() { return EquipmentUsagesRow.insertPermission; }
        protected getUpdatePermission() { return EquipmentUsagesRow.updatePermission; }

        protected form = new EquipmentUsagesForm(this.idPrefix);

    }
}