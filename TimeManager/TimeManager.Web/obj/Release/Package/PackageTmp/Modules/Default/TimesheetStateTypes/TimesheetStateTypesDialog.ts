
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class TimesheetStateTypesDialog extends Serenity.EntityDialog<TimesheetStateTypesRow, any> {
        protected getFormKey() { return TimesheetStateTypesForm.formKey; }
        protected getIdProperty() { return TimesheetStateTypesRow.idProperty; }
        protected getLocalTextPrefix() { return TimesheetStateTypesRow.localTextPrefix; }
        protected getNameProperty() { return TimesheetStateTypesRow.nameProperty; }
        protected getService() { return TimesheetStateTypesService.baseUrl; }
        protected getDeletePermission() { return TimesheetStateTypesRow.deletePermission; }
        protected getInsertPermission() { return TimesheetStateTypesRow.insertPermission; }
        protected getUpdatePermission() { return TimesheetStateTypesRow.updatePermission; }

        protected form = new TimesheetStateTypesForm(this.idPrefix);

    }
}