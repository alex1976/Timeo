
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class TimesheetsGrid extends Serenity.EntityGrid<TimesheetsRow, any> {
        protected getColumnsKey() { return 'Default.Timesheets'; }
        protected getDialogType() { return TimesheetsDialog; }
        protected getIdProperty() { return TimesheetsRow.idProperty; }
        protected getInsertPermission() { return TimesheetsRow.insertPermission; }
        protected getLocalTextPrefix() { return TimesheetsRow.localTextPrefix; }
        protected getService() { return TimesheetsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getSlickOptions(): Slick.GridOptions {
            let opt = super.getSlickOptions();
            opt.rowHeight = 50;
            return opt;
        }

        protected getButtons() {
            var buttons = super.getButtons();

            //buttons.push({
            //    title: Q.text('Nuovo UTILIZZO'),
            //    cssClass: 'add-button',
            //    onClick: () => {
            //        new EquipmentUsagesDialog().dialogOpen();
            //    }
            //});

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: TimesheetsService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}