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
var common_1 = require('@angular/common');
var login_service_1 = require('./login.service');
var LoginComponent = (function () {
    function LoginComponent(_service, _router, fb) {
        this._service = _service;
        this._router = _router;
        this.message = "Please log in";
        this.type = "alert-success";
        this.loginForm = fb.group({
            username: ["", common_1.Validators.required],
            password: ["", common_1.Validators.required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this._service.isAuthenticated()) {
            this._router.navigate(['hero']);
        }
    };
    LoginComponent.prototype.submitLogin = function (event) {
        var _this = this;
        console.log("Login Submitted");
        event.preventDefault();
        this.username = this.loginForm.controls.username.value;
        this.password = this.loginForm.controls.password.value;
        this._service.validateLogin(this.username, this.password).subscribe(function (response) {
            if (response.status === 200) {
                _this.message = "Login Validated";
                _this.type = "alert-success";
                _this._router.navigate(["hero"]);
            }
        }, function (error) {
            localStorage.removeItem("authBearer");
            _this.message = "Invalid Username and Password Combination";
            _this.type = "alert-danger";
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/login/login.html',
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, common_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map