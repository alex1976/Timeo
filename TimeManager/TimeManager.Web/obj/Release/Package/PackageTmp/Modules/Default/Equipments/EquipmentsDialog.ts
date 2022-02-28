
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class EquipmentsDialog extends Serenity.EntityDialog<EquipmentsRow, any> {
        protected getFormKey() { return EquipmentsForm.formKey; }
        protected getIdProperty() { return EquipmentsRow.idProperty; }
        protected getLocalTextPrefix() { return EquipmentsRow.localTextPrefix; }
        protected getNameProperty() { return EquipmentsRow.nameProperty; }
        protected getService() { return EquipmentsService.baseUrl; }
        protected getDeletePermission() { return EquipmentsRow.deletePermission; }
        protected getInsertPermission() { return EquipmentsRow.insertPermission; }
        protected getUpdatePermission() { return EquipmentsRow.updatePermission; }

        protected form = new EquipmentsForm(this.idPrefix);

    }
}