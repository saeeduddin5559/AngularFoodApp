import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let StarRatingComponent = class StarRatingComponent {
    constructor() {
        this.size = 1;
    }
    get styles() {
        return {
            'width.rem': this.size,
            'height.rem': this.size,
            'marginRight.rem': this.size / 6,
        };
    }
    getStarImage(current) {
        const previousHalf = current - 0.5;
        const imageName = this.stars >= current
            ? 'star-full'
            : this.stars >= previousHalf
                ? 'star-half'
                : 'star-empty';
        return `/assets/stars/${imageName}.svg`;
    }
};
__decorate([
    Input()
], StarRatingComponent.prototype, "stars", void 0);
__decorate([
    Input()
], StarRatingComponent.prototype, "size", void 0);
StarRatingComponent = __decorate([
    Component({
        selector: 'star-rating',
        templateUrl: './star-rating.component.html',
        styleUrls: ['./star-rating.component.css']
    })
], StarRatingComponent);
export { StarRatingComponent };
//# sourceMappingURL=star-rating.component.js.map