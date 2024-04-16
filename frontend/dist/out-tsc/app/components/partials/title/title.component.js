import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let TitleComponent = class TitleComponent {
    constructor() {
        this.margin = '1rem 0 1rem 0.2rem';
        this.fontSize = '1.7rem';
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], TitleComponent.prototype, "title", void 0);
__decorate([
    Input()
], TitleComponent.prototype, "margin", void 0);
__decorate([
    Input()
], TitleComponent.prototype, "fontSize", void 0);
TitleComponent = __decorate([
    Component({
        selector: 'app-title',
        templateUrl: './title.component.html',
        styleUrls: ['./title.component.css']
    })
], TitleComponent);
export { TitleComponent };
//# sourceMappingURL=title.component.js.map