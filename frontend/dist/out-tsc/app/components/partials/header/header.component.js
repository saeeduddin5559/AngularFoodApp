import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(cartService, userService) {
        this.userService = userService;
        this.cartQuantity = 0;
        cartService.getCartObservable().subscribe((newCart) => {
            this.cartQuantity = newCart.totalCount;
        });
        userService.userObservable.subscribe((newUser) => {
            this.user = newUser;
        });
    }
    ngOnInit() {
    }
    logout() {
        this.userService.logout();
    }
    get isAuth() {
        return this.user.token;
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map