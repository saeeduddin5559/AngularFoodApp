import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TagsComponent = class TagsComponent {
    constructor(foodService) {
        foodService.getAllTags().subscribe(serverTags => {
            this.tags = serverTags;
        });
    }
    ngOnInit() {
    }
};
TagsComponent = __decorate([
    Component({
        selector: 'app-tags',
        templateUrl: './tags.component.html',
        styleUrls: ['./tags.component.css']
    })
], TagsComponent);
export { TagsComponent };
//# sourceMappingURL=tags.component.js.map