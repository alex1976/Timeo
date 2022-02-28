
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class ContactsDialog extends Serenity.EntityDialog<ContactsRow, any> {
        protected getFormKey() { return ContactsForm.formKey; }
        protected getIdProperty() { return ContactsRow.idProperty; }
        protected getLocalTextPrefix() { return ContactsRow.localTextPrefix; }
        protected getNameProperty() { return ContactsRow.nameProperty; }
        protected getService() { return ContactsService.baseUrl; }
        protected getDeletePermission() { return ContactsRow.deletePermission; }
        protected getInsertPermission() { return ContactsRow.insertPermission; }
        protected getUpdatePermission() { return ContactsRow.updatePermission; }

        protected form = new ContactsForm(this.idPrefix);

    }
}