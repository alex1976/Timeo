
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class PrioritiesGrid extends Serenity.EntityGrid<PrioritiesRow, any> {
        protected getColumnsKey() { return 'Default.Priorities'; }
        protected getDialogType() { return PrioritiesDialog; }
        protected getIdProperty() { return PrioritiesRow.idProperty; }
        protected getInsertPermission() { return PrioritiesRow.insertPermission; }
        protected getLocalTextPrefix() { return PrioritiesRow.localTextPrefix; }
        protected getService() { return PrioritiesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getSlickOptions(): Slick.GridOptions {
            let opt = super.getSlickOptions();
            opt.rowHeight = 50;
            return opt;
        }
    }
}