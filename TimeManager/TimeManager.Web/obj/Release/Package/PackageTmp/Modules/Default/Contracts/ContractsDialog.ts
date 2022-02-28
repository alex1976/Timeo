
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class ContractsDialog extends Serenity.EntityDialog<ContractsRow, any> {
        protected getFormKey() { return ContractsForm.formKey; }
        protected getIdProperty() { return ContractsRow.idProperty; }
        protected getLocalTextPrefix() { return ContractsRow.localTextPrefix; }
        protected getNameProperty() { return ContractsRow.nameProperty; }
        protected getService() { return ContractsService.baseUrl; }
        protected getDeletePermission() { return ContractsRow.deletePermission; }
        protected getInsertPermission() { return ContractsRow.insertPermission; }
        protected getUpdatePermission() { return ContractsRow.updatePermission; }

        protected form = new ContractsForm(this.idPrefix);

    }
}