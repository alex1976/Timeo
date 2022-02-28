
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class PrioritiesDialog extends Serenity.EntityDialog<PrioritiesRow, any> {
        protected getFormKey() { return PrioritiesForm.formKey; }
        protected getIdProperty() { return PrioritiesRow.idProperty; }
        protected getLocalTextPrefix() { return PrioritiesRow.localTextPrefix; }
        protected getNameProperty() { return PrioritiesRow.nameProperty; }
        protected getService() { return PrioritiesService.baseUrl; }
        protected getDeletePermission() { return PrioritiesRow.deletePermission; }
        protected getInsertPermission() { return PrioritiesRow.insertPermission; }
        protected getUpdatePermission() { return PrioritiesRow.updatePermission; }

        protected form = new PrioritiesForm(this.idPrefix);

    }
}