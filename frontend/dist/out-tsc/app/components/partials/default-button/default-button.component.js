import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let DefaultButtonComponent = class DefaultButtonComponent {
    constructor() {
        this.type = 'submit';
        this.text = 'Submit';
        this.bgColor = '#e72929';
        this.color = 'white';
        this.fontSizeRem = 1.3;
        this.widthRem = 12;
        this.onClick = new EventEmitter();
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], DefaultButtonComponent.prototype, "type", void 0);
__decorate([
    Input()
], DefaultButtonComponent.prototype, "text", void 0);
__decorate([
    Input()
], DefaultButtonComponent.prototype, "bgColor", void 0);
__decorate([
    Input()
], DefaultButtonComponent.prototype, "color", void 0);
__decorate([
    Input()
], DefaultButtonComponent.prototype, "fontSizeRem", void 0);
__decorate([
    Input()
], DefaultButtonComponent.prototype, "widthRem", void 0);
__decorate([
    Output()
], DefaultButtonComponent.prototype, "onClick", void 0);
DefaultButtonComponent = __decorate([
    Component({
        selector: 'default-button',
        templateUrl: './default-button.component.html',
        styleUrls: ['./default-button.component.css']
    })
], DefaultButtonComponent);
export { DefaultButtonComponent };
//# sourceMappingURL=default-button.component.js.map