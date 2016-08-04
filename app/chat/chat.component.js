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
var user_component_1 = require('./user/user.component');
var chatbox_component_1 = require('./chatbox/chatbox.component');
var login_service_1 = require('../login/login.service');
var ChatComponent = (function () {
    function ChatComponent(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
    }
    ChatComponent.prototype.ngOnInit = function () {
        if (!this._loginService.isAuthenticated()) {
            this._router.navigate(['login']);
        }
    };
    ChatComponent = __decorate([
        core_1.Component({
            template: "<div class=\"row chatter\">\n                    <div class=\"col-md-3 col-sm-6\">\n                        <chat-user></chat-user>\n                    </div>\n                    <div class=\"col-md-9 col-sm-6\">\n                        <chat-box></chat-box>\n                    </div>\n               </div>",
            directives: [user_component_1.UserComponent, chatbox_component_1.ChatBoxComponent]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map