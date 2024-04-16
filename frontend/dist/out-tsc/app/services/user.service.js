import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { User } from '../shared/models/User';
const USER_KEY = 'User';
let UserService = class UserService {
    constructor(http, toastrService) {
        this.http = http;
        this.toastrService = toastrService;
        this.userSubject = new BehaviorSubject(this.getUserFromLocalStorage());
        this.userObservable = this.userSubject.asObservable();
    }
    get currentUser() {
        return this.userSubject.value;
    }
    login(userLogin) {
        return this.http.post(USER_LOGIN_URL, userLogin).pipe(tap({
            next: (user) => {
                this.setUserToLocalStorage(user);
                this.userSubject.next(user);
                this.toastrService.success(`Welcome to Foodmine ${user.name}!`, 'Login Successful');
            },
            error: (errorResponse) => {
                this.toastrService.error(errorResponse.error, 'Login Failed');
            }
        }));
    }
    register(userRegiser) {
        return this.http.post(USER_REGISTER_URL, userRegiser).pipe(tap({
            next: (user) => {
                this.setUserToLocalStorage(user);
                this.userSubject.next(user);
                this.toastrService.success(`Welcome to the Foodmine ${user.name}`, 'Register Successful');
            },
            error: (errorResponse) => {
                this.toastrService.error(errorResponse.error, 'Register Failed');
            }
        }));
    }
    logout() {
        this.userSubject.next(new User());
        localStorage.removeItem(USER_KEY);
        window.location.reload();
    }
    setUserToLocalStorage(user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUserFromLocalStorage() {
        const userJson = localStorage.getItem(USER_KEY);
        if (userJson)
            return JSON.parse(userJson);
        return new User();
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map