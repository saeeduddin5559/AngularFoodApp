import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from '../shared/constants/urls';
let FoodService = class FoodService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(FOODS_URL);
    }
    getAllFoodsBySearchTerm(searchTerm) {
        return this.http.get(FOODS_BY_SEARCH_URL + searchTerm);
    }
    getAllTags() {
        return this.http.get(FOODS_TAGS_URL);
    }
    getAllFoodsByTag(tag) {
        return tag === "All" ?
            this.getAll() :
            this.http.get(FOODS_BY_TAG_URL + tag);
    }
    getFoodById(foodId) {
        return this.http.get(FOOD_BY_ID_URL + foodId);
    }
};
FoodService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], FoodService);
export { FoodService };
//# sourceMappingURL=food.service.js.map