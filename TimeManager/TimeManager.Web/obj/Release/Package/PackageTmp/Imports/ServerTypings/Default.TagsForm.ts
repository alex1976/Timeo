
namespace TimeManager.Default {
    export class TagsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Tags';
    }

    export interface TagsForm {
        Description: Serenity.StringEditor;
    }

    [,
        ['Description', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(TagsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}