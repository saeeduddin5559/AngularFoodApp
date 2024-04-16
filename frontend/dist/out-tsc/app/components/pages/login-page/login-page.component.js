import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginPageComponent = class LoginPageComponent {
    constructor(formBuilder, userService, activatedRoute, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isSubmitted = false;
        this.returnUrl = '';
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
        this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
    }
    get fc() {
        return this.loginForm.controls;
    }
    submit() {
        this.isSubmitted = true;
        if (this.loginForm.invalid)
            return;
        this.userService.login({ email: this.fc.email.value,
            password: this.fc.password.value }).subscribe(() => {
            this.router.navigateByUrl(this.returnUrl);
        });
    }
};
LoginPageComponent = __decorate([
    Component({
        selector: 'app-login-page',
        templateUrl: './login-page.component.html',
        styleUrls: ['./login-page.component.css']
    })
], LoginPageComponent);
export { LoginPageComponent };
//# sourceMappingURL=login-page.component.js.map