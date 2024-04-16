import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let NotFoundComponent = class NotFoundComponent {
    constructor() {
        this.visible = false;
        this.notFoundMessage = "Nothing Found!";
        this.resetLinkText = "Reset";
        this.resetLinkRoute = "/";
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], NotFoundComponent.prototype, "visible", void 0);
__decorate([
    Input()
], NotFoundComponent.prototype, "notFoundMessage", void 0);
__decorate([
    Input()
], NotFoundComponent.prototype, "resetLinkText", void 0);
__decorate([
    Input()
], NotFoundComponent.prototype, "resetLinkRoute", void 0);
NotFoundComponent = __decorate([
    Component({
        selector: 'app-not-found',
        templateUrl: './not-found.component.html',
        styleUrls: ['./not-found.component.css']
    })
], NotFoundComponent);
export { NotFoundComponent };
//# sourceMappingURL=not-found.component.js.map