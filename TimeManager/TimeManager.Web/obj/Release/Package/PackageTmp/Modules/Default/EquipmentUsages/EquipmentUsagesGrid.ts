
namespace TimeManager.Default {

    @Serenity.Decorators.registerClass()
    export class EquipmentUsagesGrid extends Serenity.EntityGrid<EquipmentUsagesRow, any> {
        protected getColumnsKey() { return 'Default.EquipmentUsages'; }
        protected getDialogType() { return EquipmentUsagesDialog; }
        protected getIdProperty() { return EquipmentUsagesRow.idProperty; }
        protected getInsertPermission() { return EquipmentUsagesRow.insertPermission; }
        protected getLocalTextPrefix() { return EquipmentUsagesRow.localTextPrefix; }
        protected getService() { return EquipmentUsagesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: EquipmentUsagesService.baseUrl + '/ListExcel',
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