import { __decorate } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
let PaypalButtonComponent = class PaypalButtonComponent {
    constructor(orderService, cartService, router, toastrService) {
        this.orderService = orderService;
        this.cartService = cartService;
        this.router = router;
        this.toastrService = toastrService;
    }
    ngOnInit() {
        const self = this;
        paypal
            .Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                currency_code: 'CAD',
                                value: self.order.totalPrice,
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, actions) => {
                const payment = await actions.order.capture();
                this.order.paymentId = payment.id;
                self.orderService.pay(this.order).subscribe({
                    next: (orderId) => {
                        this.cartService.clearCart();
                        this.router.navigateByUrl('/track/' + orderId);
                        this.toastrService.success('Payment Saved Successfully', 'Success');
                    },
                    error: (error) => {
                        this.toastrService.error('Payment Save Failed', 'Error');
                    }
                });
            },
            onError: (err) => {
                this.toastrService.error('Payment Failed', 'Error');
                console.log(err);
            },
        })
            .render(this.paypalElement.nativeElement);
    }
};
__decorate([
    Input()
], PaypalButtonComponent.prototype, "order", void 0);
__decorate([
    ViewChild('paypal', { static: true })
], PaypalButtonComponent.prototype, "paypalElement", void 0);
PaypalButtonComponent = __decorate([
    Component({
        selector: 'paypal-button',
        templateUrl: './paypal-button.component.html',
        styleUrls: ['./paypal-button.component.css']
    })
], PaypalButtonComponent);
export { PaypalButtonComponent };
//# sourceMappingURL=paypal-button.component.js.map