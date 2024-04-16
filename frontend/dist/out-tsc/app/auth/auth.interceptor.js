import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthInterceptor = class AuthInterceptor {
    constructor(userService) {
        this.userService = userService;
    }
    intercept(request, next) {
        const user = this.userService.currentUser;
        if (user.token) {
            request = request.clone({
                setHeaders: {
                    access_token: user.token
                }
            });
        }
        return next.handle(request);
    }
};
AuthInterceptor = __decorate([
    Injectable()
], AuthInterceptor);
export { AuthInterceptor };
//# sourceMappingURL=auth.interceptor.js.map