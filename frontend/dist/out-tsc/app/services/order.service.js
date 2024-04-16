import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ORDER_CREATE_URL, ORDER_NEW_FOR_CURRENT_USER_URL, ORDER_PAY_URL, ORDER_TRACK_URL } from '../shared/constants/urls';
let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
    }
    create(order) {
        return this.http.post(ORDER_CREATE_URL, order);
    }
    getNewOrderForCurrentUser() {
        return this.http.get(ORDER_NEW_FOR_CURRENT_USER_URL);
    }
    pay(order) {
        return this.http.post(ORDER_PAY_URL, order);
    }
    trackOrderById(id) {
        return this.http.get(ORDER_TRACK_URL + id);
    }
};
OrderService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], OrderService);
export { OrderService };
//# sourceMappingURL=order.service.js.map