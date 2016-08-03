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
var hero_1 = require('./hero');
var hero_service_1 = require('./hero.service');
var login_service_1 = require('../login/login.service');
var HeroComponent = (function () {
    function HeroComponent(heroService, _loginService, _router) {
        this.heroService = heroService;
        this._loginService = _loginService;
        this._router = _router;
        this.heroes = heroService.heroes;
    }
    HeroComponent.prototype.ngOnInit = function () {
        if (!this._loginService.isAuthenticated()) {
            this._router.navigate(['login']);
        }
    };
    HeroComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes; }, function (error) { return _this.errorMessage = error; });
    };
    HeroComponent.prototype.setHeroes = function (heroes) {
        this.heroes = heroes;
        console.log(this.heroes.length);
    };
    HeroComponent.prototype.mockHeroes = function () {
        var tempHero = new hero_1.Hero();
        tempHero.name = "Gary";
        this.heroes.push(tempHero);
    };
    HeroComponent = __decorate([
        core_1.Component({
            template: "<ul class=\"list-group\">\n                <li *ngFor = \"let hero of heroes\" class=\"list-group-item\">{{hero.name}}</li>\n                </ul>\n                <p *ngIf = \"heroes.length == 0\">No data</p>\n                <button (click) = \"getHeroes()\">Refresh Data</button>\n                <button (click) = \"mockHeroes()\">Mock Data</button>",
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, login_service_1.LoginService, router_1.Router])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map