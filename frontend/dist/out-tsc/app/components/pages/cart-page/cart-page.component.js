import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CartPageComponent = class CartPageComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cartService.getCartObservable().subscribe((cart) => {
            this.cart = cart;
        });
    }
    ngOnInit() {
    }
    removeFromCart(cartItem) {
        this.cartService.removeFromCart(cartItem.food.id);
    }
    changeQuantity(cartItem, quantityInString) {
        const quantity = parseInt(quantityInString);
        this.cartService.changeQuantity(cartItem.food.id, quantity);
    }
};
CartPageComponent = __decorate([
    Component({
        selector: 'app-cart-page',
        templateUrl: './cart-page.component.html',
        styleUrls: ['./cart-page.component.css']
    })
], CartPageComponent);
export { CartPageComponent };
//# sourceMappingURL=cart-page.component.js.map