import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Order } from 'src/app/shared/models/Order';
let PaymentPageComponent = class PaymentPageComponent {
    constructor(orderService, router) {
        this.order = new Order();
        orderService.getNewOrderForCurrentUser().subscribe({
            next: (order) => {
                this.order = order;
            },
            error: () => {
                router.navigateByUrl('/chekcout');
            }
        });
    }
    ngOnInit() {
    }
};
PaymentPageComponent = __decorate([
    Component({
        selector: 'app-payment-page',
        templateUrl: './payment-page.component.html',
        styleUrls: ['./payment-page.component.css']
    })
], PaymentPageComponent);
export { PaymentPageComponent };
//# sourceMappingURL=payment-page.component.js.map