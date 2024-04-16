import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Order } from 'src/app/shared/models/Order';
let CheckoutPageComponent = class CheckoutPageComponent {
    constructor(cartService, formBuilder, userService, toastrService, orderService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.toastrService = toastrService;
        this.orderService = orderService;
        this.router = router;
        this.order = new Order();
        const cart = cartService.getCart();
        this.order.items = cart.items;
        this.order.totalPrice = cart.totalPrice;
    }
    ngOnInit() {
        let { name, address } = this.userService.currentUser;
        this.checkoutForm = this.formBuilder.group({
            name: [name, Validators.required],
            address: [address, Validators.required]
        });
    }
    get fc() {
        return this.checkoutForm.controls;
    }
    createOrder() {
        if (this.checkoutForm.invalid) {
            this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
            return;
        }
        if (!this.order.addressLatLng) {
            this.toastrService.warning('Please select your location on the map', 'Location');
            return;
        }
        this.order.name = this.fc.name.value;
        this.order.address = this.fc.address.value;
        this.orderService.create(this.order).subscribe({
            next: () => {
                this.router.navigateByUrl('/payment');
            },
            error: (errorResponse) => {
                this.toastrService.error(errorResponse.error, 'Cart');
            }
        });
    }
};
CheckoutPageComponent = __decorate([
    Component({
        selector: 'app-checkout-page',
        templateUrl: './checkout-page.component.html',
        styleUrls: ['./checkout-page.component.css']
    })
], CheckoutPageComponent);
export { CheckoutPageComponent };
//# sourceMappingURL=checkout-page.component.js.map