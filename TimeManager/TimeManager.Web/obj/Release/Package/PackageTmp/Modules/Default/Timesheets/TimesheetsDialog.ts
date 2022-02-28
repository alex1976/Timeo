
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class TimesheetsDialog extends Serenity.EntityDialog<TimesheetsRow, any> {
        protected getFormKey() { return TimesheetsForm.formKey; }
        protected getIdProperty() { return TimesheetsRow.idProperty; }
        protected getLocalTextPrefix() { return TimesheetsRow.localTextPrefix; }
        protected getNameProperty() { return TimesheetsRow.nameProperty; }
        protected getService() { return TimesheetsService.baseUrl; }
        protected getDeletePermission() { return TimesheetsRow.deletePermission; }
        protected getInsertPermission() { return TimesheetsRow.insertPermission; }
        protected getUpdatePermission() { return TimesheetsRow.updatePermission; }

        protected form = new TimesheetsForm(this.idPrefix);

    }
}