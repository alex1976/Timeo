
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class UnitOfMeasuresDialog extends Serenity.EntityDialog<UnitOfMeasuresRow, any> {
        protected getFormKey() { return UnitOfMeasuresForm.formKey; }
        protected getIdProperty() { return UnitOfMeasuresRow.idProperty; }
        protected getLocalTextPrefix() { return UnitOfMeasuresRow.localTextPrefix; }
        protected getNameProperty() { return UnitOfMeasuresRow.nameProperty; }
        protected getService() { return UnitOfMeasuresService.baseUrl; }
        protected getDeletePermission() { return UnitOfMeasuresRow.deletePermission; }
        protected getInsertPermission() { return UnitOfMeasuresRow.insertPermission; }
        protected getUpdatePermission() { return UnitOfMeasuresRow.updatePermission; }

        protected form = new UnitOfMeasuresForm(this.idPrefix);

    }
}