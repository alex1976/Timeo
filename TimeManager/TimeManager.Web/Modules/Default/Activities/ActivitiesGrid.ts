
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

        protected getSlickOptions(): Slick.GridOptions {
            let opt = super.getSlickOptions();
            opt.rowHeight = 50;
            return opt;
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.unshift({
                field: 'Delete Row',
                name: '',
                format: ctx => '<a class="inline-action delete-row" title="delete row">' +
                    '<i class="fa fa-trash-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            columns.splice(1, 0, {
                field: 'View Row',
                name: '',
                format: ctx => '<a class="inline-action view-details" title="view row"></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            columns.splice(2, 0, {
                field: 'New Row',
                name: '',
                format: ctx => '<a class="inline-action new-order" title="new row"></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('delete-row')) {
                    Q.confirm('Delete record?', () => {
                        Default.ActivitiesService.Delete({
                            EntityId: item.ActivityId,
                        }, response => {
                            this.refresh();
                        });
                    });
                }
                else if (target.hasClass('view-details')) {
                    this.editItem(item.ActivityId);
                }
                else if (target.hasClass('new-order')) {
                    var dlg = new Default.ActivitiesDialog();
                    this.initDialog(dlg);
                    dlg.loadEntityAndOpenDialog(<Default.ActivitiesRow>{
                        ActivityId: item.ActivityId
                    });
                }
            }
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
}