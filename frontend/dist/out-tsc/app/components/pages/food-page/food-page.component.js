import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FoodPageComponent = class FoodPageComponent {
    constructor(activatedRoute, foodService, cartService, router) {
        this.cartService = cartService;
        this.router = router;
        activatedRoute.params.subscribe((params) => {
            if (params.id)
                foodService.getFoodById(params.id).subscribe(serverFood => {
                    this.food = serverFood;
                });
        });
    }
    ngOnInit() {
    }
    addToCart() {
        this.cartService.addToCart(this.food);
        this.router.navigateByUrl('/cart-page');
    }
};
FoodPageComponent = __decorate([
    Component({
        selector: 'app-food-page',
        templateUrl: './food-page.component.html',
        styleUrls: ['./food-page.component.css']
    })
], FoodPageComponent);
export { FoodPageComponent };
//# sourceMappingURL=food-page.component.js.map