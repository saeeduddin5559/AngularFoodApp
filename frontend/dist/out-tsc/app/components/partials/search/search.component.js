import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SearchComponent = class SearchComponent {
    constructor(activatedRoute, router) {
        this.router = router;
        this.searchTerm = '';
        activatedRoute.params.subscribe((params) => {
            if (params.searchTerm)
                this.searchTerm = params.searchTerm;
        });
    }
    ngOnInit() {
    }
    search(term) {
        if (term)
            this.router.navigateByUrl('/search/' + term);
    }
};
SearchComponent = __decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css']
    })
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=search.component.js.map