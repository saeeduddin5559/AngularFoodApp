import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let LoadingService = class LoadingService {
    constructor() {
        this.isLoadingSubject = new BehaviorSubject(false);
    }
    showLoading() {
        this.isLoadingSubject.next(true);
    }
    hideLoading() {
        this.isLoadingSubject.next(false);
    }
    get isLoading() {
        return this.isLoadingSubject.asObservable();
    }
};
LoadingService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoadingService);
export { LoadingService };
//# sourceMappingURL=loading.service.js.map