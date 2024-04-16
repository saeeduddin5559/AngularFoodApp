import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let TextInputComponent = class TextInputComponent {
    get formControl() {
        return this.control;
    }
    constructor() {
        this.showErrorsWhen = true;
        this.type = 'text';
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], TextInputComponent.prototype, "control", void 0);
__decorate([
    Input()
], TextInputComponent.prototype, "showErrorsWhen", void 0);
__decorate([
    Input()
], TextInputComponent.prototype, "label", void 0);
__decorate([
    Input()
], TextInputComponent.prototype, "type", void 0);
TextInputComponent = __decorate([
    Component({
        selector: 'text-input',
        templateUrl: './text-input.component.html',
        styleUrls: ['./text-input.component.css']
    })
], TextInputComponent);
export { TextInputComponent };
//# sourceMappingURL=text-input.component.js.map