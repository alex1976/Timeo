
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class BusinessUnitsDialog extends Serenity.EntityDialog<BusinessUnitsRow, any> {
        protected getFormKey() { return BusinessUnitsForm.formKey; }
        protected getIdProperty() { return BusinessUnitsRow.idProperty; }
        protected getLocalTextPrefix() { return BusinessUnitsRow.localTextPrefix; }
        protected getNameProperty() { return BusinessUnitsRow.nameProperty; }
        protected getService() { return BusinessUnitsService.baseUrl; }
        protected getDeletePermission() { return BusinessUnitsRow.deletePermission; }
        protected getInsertPermission() { return BusinessUnitsRow.insertPermission; }
        protected getUpdatePermission() { return BusinessUnitsRow.updatePermission; }

        protected form = new BusinessUnitsForm(this.idPrefix);

    }
}