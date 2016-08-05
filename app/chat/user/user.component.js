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
var chat_service_1 = require('../chat.service');
var UserComponent = (function () {
    function UserComponent(chatService) {
        this.chatService = chatService;
        this.roomEmitter = new core_1.EventEmitter();
        //this.rooms = chatService.rooms;
    }
    UserComponent.prototype.selectRoom = function (name) {
        this.selectedRoom = name;
        this.roomEmitter.emit(this.selectedRoom);
    };
    UserComponent.prototype.getRooms = function () {
        this.rooms = this.chatService.rooms;
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'chat-user',
            inputs: ['selectedRoom', 'rooms'],
            outputs: ['roomEmitter'],
            template: "<ul class=\"box chatUser\">\n                    <li *ngFor=\"let room of rooms\" (click)=\"selectRoom(room)\">{{room.roomname}}</li>\n               </ul>",
            providers: [chat_service_1.ChatService]
        }), 
        __metadata('design:paramtypes', [chat_service_1.ChatService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map