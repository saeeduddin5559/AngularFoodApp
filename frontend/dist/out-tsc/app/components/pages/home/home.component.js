import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(foodService, activatedRoute) {
        this.foodService = foodService;
        this.foods = [];
        let foodsObservalbe;
        activatedRoute.params.subscribe((params) => {
            if (params.searchTerm)
                foodsObservalbe = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
            else if (params.tag)
                foodsObservalbe = this.foodService.getAllFoodsByTag(params.tag);
            else
                foodsObservalbe = foodService.getAll();
            foodsObservalbe.subscribe((serverFoods) => {
                this.foods = serverFoods;
            });
        });
    }
    ngOnInit() {
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map