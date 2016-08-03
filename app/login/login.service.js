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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_constant_1 = require('../app.constant');
var Observable_1 = require('rxjs/Observable');
var LoginService = (function () {
    function LoginService(http, _router) {
        this.http = http;
        this._router = _router;
        this.endpoint = app_constant_1.SETTINGS.apiConnection.url; //+ SETTINGS.apiConnection.account;
    }
    LoginService.prototype.validateLogin = function (user, pass) {
        var body = "Username=" + user + "&Password=" + pass + "&grant_type=password";
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.endpoint + app_constant_1.SETTINGS.apiConnection.login, body, options)
            .map(function (response) {
            localStorage.setItem("authBearer", (response.json()).access_token);
            return response;
        })
            .catch(this.handleError);
    };
    LoginService.prototype.logout = function () {
        localStorage.clear();
        this._router.navigate(['login']);
    };
    LoginService.prototype.isAuthenticated = function () {
        return localStorage.getItem("authBearer") != null;
    };
    LoginService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return Observable_1.Observable.throw(errMsg);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map