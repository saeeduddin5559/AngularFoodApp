import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let InputContainerComponent = class InputContainerComponent {
    constructor() {
        this.bgColor = 'white';
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], InputContainerComponent.prototype, "label", void 0);
__decorate([
    Input()
], InputContainerComponent.prototype, "bgColor", void 0);
InputContainerComponent = __decorate([
    Component({
        selector: 'input-container',
        templateUrl: './input-container.component.html',
        styleUrls: ['./input-container.component.css']
    })
], InputContainerComponent);
export { InputContainerComponent };
//# sourceMappingURL=input-container.component.js.map