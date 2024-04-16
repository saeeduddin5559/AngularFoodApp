import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
let CartService = class CartService {
    constructor() {
        this.cart = this.getCartFromLocalStorage();
        this.cartSubject = new BehaviorSubject(this.cart);
    }
    addToCart(food) {
        let cartItem = this.cart.items
            .find(item => item.food.id === food.id);
        if (cartItem)
            return;
        this.cart.items.push(new CartItem(food));
        this.setCartToLocalStorage();
    }
    removeFromCart(foodId) {
        this.cart.items = this.cart.items
            .filter(item => item.food.id != foodId);
        this.setCartToLocalStorage();
    }
    changeQuantity(foodId, quantity) {
        let cartItem = this.cart.items
            .find(item => item.food.id === foodId);
        if (!cartItem)
            return;
        cartItem.quantity = quantity;
        cartItem.price = quantity * cartItem.food.price;
        this.setCartToLocalStorage();
    }
    clearCart() {
        this.cart = new Cart();
        this.setCartToLocalStorage();
    }
    getCartObservable() {
        return this.cartSubject.asObservable();
    }
    getCart() {
        return this.cartSubject.value;
    }
    setCartToLocalStorage() {
        this.cart.totalPrice = this.cart.items
            .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
        this.cart.totalCount = this.cart.items
            .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
        const cartJson = JSON.stringify(this.cart);
        localStorage.setItem('Cart', cartJson);
        this.cartSubject.next(this.cart);
    }
    getCartFromLocalStorage() {
        const cartJson = localStorage.getItem('Cart');
        return cartJson ? JSON.parse(cartJson) : new Cart();
    }
};
CartService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CartService);
export { CartService };
//# sourceMappingURL=cart.service.js.map