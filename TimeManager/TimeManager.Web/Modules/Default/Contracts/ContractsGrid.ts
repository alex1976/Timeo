
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class ContractsGrid extends Serenity.EntityGrid<ContractsRow, any> {
        protected getColumnsKey() { return 'Default.Contracts'; }
        protected getDialogType() { return ContractsDialog; }
        protected getIdProperty() { return ContractsRow.idProperty; }
        protected getInsertPermission() { return ContractsRow.insertPermission; }
        protected getLocalTextPrefix() { return ContractsRow.localTextPrefix; }
        protected getService() { return ContractsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}