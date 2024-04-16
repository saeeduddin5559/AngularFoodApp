import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs';
var pendingRequests = 0;
let LoadingInterceptor = class LoadingInterceptor {
    constructor(loadingService) {
        this.loadingService = loadingService;
    }
    intercept(request, next) {
        this.loadingService.showLoading();
        pendingRequests = pendingRequests + 1;
        return next.handle(request).pipe(tap({
            next: (event) => {
                if (event.type === HttpEventType.Response) {
                    this.handleHideLoading();
                }
            },
            error: (_) => {
                this.handleHideLoading();
            }
        }));
    }
    handleHideLoading() {
        pendingRequests = pendingRequests - 1;
        if (pendingRequests === 0)
            this.loadingService.hideLoading();
    }
};
LoadingInterceptor = __decorate([
    Injectable()
], LoadingInterceptor);
export { LoadingInterceptor };
//# sourceMappingURL=loading.interceptor.js.map