
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class ActivitiesDialog extends Serenity.EntityDialog<ActivitiesRow, any> {
        protected getFormKey() { return ActivitiesForm.formKey; }
        protected getIdProperty() { return ActivitiesRow.idProperty; }
        protected getLocalTextPrefix() { return ActivitiesRow.localTextPrefix; }
        protected getNameProperty() { return ActivitiesRow.nameProperty; }
        protected getService() { return ActivitiesService.baseUrl; }
        protected getDeletePermission() { return ActivitiesRow.deletePermission; }
        protected getInsertPermission() { return ActivitiesRow.insertPermission; }
        protected getUpdatePermission() { return ActivitiesRow.updatePermission; }

        protected form = new ActivitiesForm(this.idPrefix);

    }
}