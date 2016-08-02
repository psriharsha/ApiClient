"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var sidebar_1 = require('./sidebar');
var SideBarComponent = (function () {
    function SideBarComponent() {
        var profile = new sidebar_1.SideBar();
        profile.menuname = "Profile";
        profile.menuicon = "fa-user";
        profile.menulink = "/hero";
        this.menuItems = [];
        this.menuItems.push(profile);
    }
    SideBarComponent.prototype.getMenuItems = function () {
    };
    SideBarComponent = __decorate([
        core_1.Component({
            selector: 'side-bar',
            template: "<ul class=\"nav\">\n                <li *ngFor = \"let menuItem of menuItems\">\n                    <a [routerLink]=\"[menuItem.menulink]\">\n                        <i class=\"fa {{menuItem.menuicon}}\"></i>\n                        <p>{{menuItem.menuname}}</p>\n                    </a>\n                </li>\n\n            </ul>",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], SideBarComponent);
    return SideBarComponent;
}());
exports.SideBarComponent = SideBarComponent;
//# sourceMappingURL=sidebar.component.js.map