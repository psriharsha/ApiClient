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
var hero_component_1 = require('./hero/hero.component');
var login_component_1 = require('./login/login.component');
var sidebar_component_1 = require('./sidebar/sidebar.component');
var chat_component_1 = require('./chat/chat.component');
var hero_service_1 = require('./hero/hero.service');
var login_service_1 = require('./login/login.service');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
require('./rxjs.operators');
var AppComponent = (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.crum = "Dashboard";
        this.router.events.subscribe(function () {
            var url = _this.router.routerState.snapshot.url;
            _this.crum = ((url).slice(1, url.length)).toUpperCase();
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, sidebar_component_1.SideBarComponent],
            providers: [hero_service_1.HeroService, login_service_1.LoginService, http_1.Http, http_1.HTTP_PROVIDERS],
            precompile: [login_component_1.LoginComponent, chat_component_1.ChatComponent, hero_component_1.HeroComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map