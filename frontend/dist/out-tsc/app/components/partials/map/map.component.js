import { __decorate } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { icon, map, marker, tileLayer } from 'leaflet';
let MapComponent = class MapComponent {
    constructor(locationService) {
        this.locationService = locationService;
        this.readonly = false;
        this.MARKER_ZOOM_LEVEL = 16;
        this.MARKER_ICON = icon({
            iconUrl: 'https://res.cloudinary.com/foodmine/image/upload/v1638842791/map/marker_kbua9q.png',
            iconSize: [42, 42],
            iconAnchor: [21, 42],
        });
        this.DEFAULT_LATLNG = [13.75, 21.62];
    }
    ngOnChanges() {
        if (!this.order)
            return;
        this.initializeMap();
        if (this.readonly && this.addressLatLng) {
            this.showLocationOnReadonlyMode();
        }
    }
    showLocationOnReadonlyMode() {
        var _a, _b;
        const m = this.map;
        this.setMarker(this.addressLatLng);
        m.setView(this.addressLatLng, this.MARKER_ZOOM_LEVEL);
        m.dragging.disable();
        m.touchZoom.disable();
        m.doubleClickZoom.disable();
        m.scrollWheelZoom.disable();
        m.boxZoom.disable();
        m.keyboard.disable();
        m.off('click');
        (_a = m.tap) === null || _a === void 0 ? void 0 : _a.disable();
        (_b = this.currentMarker.dragging) === null || _b === void 0 ? void 0 : _b.disable();
    }
    initializeMap() {
        if (this.map)
            return;
        this.map = map(this.mapRef.nativeElement, {
            attributionControl: false
        }).setView(this.DEFAULT_LATLNG, 1);
        tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
        this.map.on('click', (e) => {
            this.setMarker(e.latlng);
        });
    }
    findMyLocation() {
        this.locationService.getCurrentLocation().subscribe({
            next: (latlng) => {
                this.map.setView(latlng, this.MARKER_ZOOM_LEVEL);
                this.setMarker(latlng);
            }
        });
    }
    setMarker(latlng) {
        this.addressLatLng = latlng;
        if (this.currentMarker) {
            this.currentMarker.setLatLng(latlng);
            return;
        }
        this.currentMarker = marker(latlng, {
            draggable: true,
            icon: this.MARKER_ICON
        }).addTo(this.map);
        this.currentMarker.on('dragend', () => {
            this.addressLatLng = this.currentMarker.getLatLng();
        });
    }
    set addressLatLng(latlng) {
        if (!latlng.lat.toFixed)
            return;
        latlng.lat = parseFloat(latlng.lat.toFixed(8));
        latlng.lng = parseFloat(latlng.lng.toFixed(8));
        this.order.addressLatLng = latlng;
        console.log(this.order.addressLatLng);
    }
    get addressLatLng() {
        return this.order.addressLatLng;
    }
};
__decorate([
    Input()
], MapComponent.prototype, "order", void 0);
__decorate([
    Input()
], MapComponent.prototype, "readonly", void 0);
__decorate([
    ViewChild('map', { static: true })
], MapComponent.prototype, "mapRef", void 0);
MapComponent = __decorate([
    Component({
        selector: 'map',
        templateUrl: './map.component.html',
        styleUrls: ['./map.component.css']
    })
], MapComponent);
export { MapComponent };
//# sourceMappingURL=map.component.js.map