
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class ActivitiesGrid extends Serenity.EntityGrid<ActivitiesRow, any> {
        protected getColumnsKey() { return 'Default.Activities'; }
        protected getDialogType() { return ActivitiesDialog; }
        protected getIdProperty() { return ActivitiesRow.idProperty; }
        protected getInsertPermission() { return ActivitiesRow.insertPermission; }
        protected getLocalTextPrefix() { return ActivitiesRow.localTextPrefix; }
        protected getService() { return ActivitiesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

            //new Serenity.TreeGridMixin<ActivitiesRow>({
            //    grid: this,
            //    getParentId: x => x.ParentActivityId,
            //    toggleField: ActivitiesRow.Fields.Description,
            //    initialCollapse: () => false
            //});
        }

    //    protected subDialogDataChange() {
    //        super.subDialogDataChange();

    //        Q.reloadLookup(ActivitiesRow.lookupKey);
    //    }

    //    protected usePager() {
    //        return false;
    //    }

    //    protected getColumns() {
    //        var columns = super.getColumns();

    //        columns.splice(Q.indexOf(columns, x => x.name == ActivitiesRow.Fields.Description) + 1, 0, {
    //            field: 'Add Child Unit',
    //            name: '',
    //            format: ctx => '<a class="inline-action add-child-unit" title="add child unit"></a>',
    //            width: 24,
    //            minWidth: 24,
    //            maxWidth: 24
    //        });

    //        return columns;
    //    }

    //    protected onClick(e: JQueryEventObject, row: number, cell: number) {
    //        super.onClick(e, row, cell);

    //        if (e.isDefaultPrevented())
    //            return;

    //        var item = this.itemAt(row);
    //        var target = $(e.target);

    //        if (target.parent().hasClass('inline-action'))
    //            target = target.parent();

    //        if (target.hasClass('inline-action')) {
    //            e.preventDefault();

    //            if (target.hasClass('add-child-unit')) {
    //                var dlg = new ActivitiesDialog();
    //                this.initDialog(dlg);
    //                dlg.loadEntityAndOpenDialog({
    //                    ParentActivityId: item.ActivityId
    //                });
    //            }
    //        }
    //    }
    //}
}