import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { PasswordsMatchValidator } from 'src/app/shared/validators/password_match_validator';
let RegisterPageComponent = class RegisterPageComponent {
    constructor(formBuilder, userService, activatedRoute, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isSubmitted = false;
        this.returnUrl = '';
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(5)]],
            confirmPassword: ['', Validators.required],
            address: ['', [Validators.required, Validators.minLength(10)]]
        }, {
            validators: PasswordsMatchValidator('password', 'confirmPassword')
        });
        this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
    }
    get fc() {
        return this.registerForm.controls;
    }
    submit() {
        this.isSubmitted = true;
        if (this.registerForm.invalid)
            return;
        const fv = this.registerForm.value;
        const user = {
            name: fv.name,
            email: fv.email,
            password: fv.password,
            confirmPassword: fv.confirmPassword,
            address: fv.address
        };
        this.userService.register(user).subscribe(_ => {
            this.router.navigateByUrl(this.returnUrl);
        });
    }
};
RegisterPageComponent = __decorate([
    Component({
        selector: 'app-register-page',
        templateUrl: './register-page.component.html',
        styleUrls: ['./register-page.component.css']
    })
], RegisterPageComponent);
export { RegisterPageComponent };
//# sourceMappingURL=register-page.component.js.map