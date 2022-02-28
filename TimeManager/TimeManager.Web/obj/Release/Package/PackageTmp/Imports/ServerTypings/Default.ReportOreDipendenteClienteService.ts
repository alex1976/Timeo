namespace TimeManager.Default {
    export namespace ReportOreDipendenteClienteService {
        export const baseUrl = 'Default/Reports';

        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReportOreDipendenteClienteRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            List = "Default/Reports/List"
        }

        [
            'List'
        ].forEach(x => {
            (<any>ReportOreDipendenteClienteService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

