
namespace TimeManager.Default {
    export class PrioritiesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Priorities';
    }

    export interface PrioritiesForm {
        Description: Serenity.StringEditor;
    }

    [,
        ['Description', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(PrioritiesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}