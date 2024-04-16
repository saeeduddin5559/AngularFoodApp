import { __decorate } from "tslib";
import { Component } from '@angular/core';
let OrderTrackPageComponent = class OrderTrackPageComponent {
    constructor(activatedRoute, orderService) {
        const params = activatedRoute.snapshot.params;
        if (!params.orderId)
            return;
        orderService.trackOrderById(params.orderId).subscribe(order => {
            this.order = order;
        });
    }
    ngOnInit() {
    }
};
OrderTrackPageComponent = __decorate([
    Component({
        selector: 'app-order-track-page',
        templateUrl: './order-track-page.component.html',
        styleUrls: ['./order-track-page.component.css']
    })
], OrderTrackPageComponent);
export { OrderTrackPageComponent };
//# sourceMappingURL=order-track-page.component.js.map