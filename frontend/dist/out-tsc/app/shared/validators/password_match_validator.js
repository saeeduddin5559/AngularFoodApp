export const PasswordsMatchValidator = (passwordControlName, confirmPasswordControlName) => {
    const validator = (form) => {
        const passwordControl = form.get(passwordControlName);
        const confirmPasswordControl = form.get(confirmPasswordControlName);
        if (!passwordControl || !confirmPasswordControl)
            return;
        if (passwordControl.value !== confirmPasswordControl.value) {
            confirmPasswordControl.setErrors({ notMatch: true });
        }
        else {
            const errors = confirmPasswordControl.errors;
            if (!errors)
                return;
            delete errors.notMatch;
            confirmPasswordControl.setErrors(errors);
        }
    };
    return validator;
};
//# sourceMappingURL=password_match_validator.js.map