import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
const VALIDATORS_MESSAGES = {
    required: 'Should not be empty',
    email: 'Email is not valid',
    minlength: 'Field is too short',
    notMatch: 'Password and Confirm does not match'
};
let InputValidationComponent = class InputValidationComponent {
    constructor() {
        this.showErrorsWhen = true;
        this.errorMessages = [];
    }
    ngOnChanges(changes) {
        this.checkValidation();
    }
    ngOnInit() {
        this.control.statusChanges.subscribe(() => {
            this.checkValidation();
        });
        this.control.valueChanges.subscribe(() => {
            this.checkValidation();
        });
    }
    checkValidation() {
        const errors = this.control.errors;
        if (!errors) {
            this.errorMessages = [];
            return;
        }
        const errorKeys = Object.keys(errors);
        this.errorMessages = errorKeys.map(key => VALIDATORS_MESSAGES[key]);
    }
};
__decorate([
    Input()
], InputValidationComponent.prototype, "control", void 0);
__decorate([
    Input()
], InputValidationComponent.prototype, "showErrorsWhen", void 0);
InputValidationComponent = __decorate([
    Component({
        selector: 'input-validation',
        templateUrl: './input-validation.component.html',
        styleUrls: ['./input-validation.component.css']
    })
], InputValidationComponent);
export { InputValidationComponent };
//# sourceMappingURL=input-validation.component.js.map