import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
let LocationService = class LocationService {
    constructor() { }
    getCurrentLocation() {
        return new Observable((observer) => {
            if (!navigator.geolocation)
                return;
            return navigator.geolocation.getCurrentPosition((pos) => {
                observer.next({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                });
            }, (error) => {
                observer.error(error);
            });
        });
    }
};
LocationService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LocationService);
export { LocationService };
//# sourceMappingURL=location.service.js.map