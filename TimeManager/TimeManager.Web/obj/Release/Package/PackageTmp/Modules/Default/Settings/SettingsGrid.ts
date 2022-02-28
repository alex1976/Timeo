
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class SettingsGrid extends Serenity.EntityGrid<SettingsRow, any> {
        protected getColumnsKey() { return 'Default.Settings'; }
        protected getDialogType() { return SettingsDialog; }
        protected getIdProperty() { return SettingsRow.idProperty; }
        protected getInsertPermission() { return SettingsRow.insertPermission; }
        protected getLocalTextPrefix() { return SettingsRow.localTextPrefix; }
        protected getService() { return SettingsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}