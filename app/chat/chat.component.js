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
var chat_service_1 = require('./chat.service');
var room_1 = require('./chatbox/room');
var message_1 = require('./chatbox/message');
var user_1 = require('./user/user');
var ChatComponent = (function () {
    function ChatComponent(_loginService, _router, _chatService) {
        this._loginService = _loginService;
        this._router = _router;
        this._chatService = _chatService;
        this.rooms = [];
        this.mockRoom1();
        this.mockRoom2();
    }
    ChatComponent.prototype.mockRoom1 = function () {
        var tempRoom = new room_1.Room(1000, "Demo Room");
        var tempUser = new user_1.User("Colin", "McLauchlan", "colin.mclauchlan@kasl.co.uk");
        tempRoom.roomusers.push(tempUser);
        tempUser = new user_1.User("Colin", "McLauchlan", "colin.mclauchlan@kasl.co.uk");
        tempRoom.roomusers.push(tempUser);
        tempUser = new user_1.User("Colin", "McLauchlan", "colin.mclauchlan@kasl.co.uk");
        tempRoom.roomusers.push(tempUser);
        tempUser = new user_1.User("Colin", "McLauchlan", "colin.mclauchlan@kasl.co.uk");
        tempRoom.roomusers.push(tempUser);
        tempRoom.roommessages = this.mockMessages(1);
        this.rooms.push(tempRoom);
    };
    ChatComponent.prototype.mockRoom2 = function () {
        var tempRoom = new room_1.Room(1001, "Room Demo");
        var tempUser = new user_1.User("Bert", "Whitehead", "colin.mclauchlan@kasl.co.uk");
        tempRoom.roomusers.push(tempUser);
        tempUser = new user_1.User("Bert", "Whitehead", "colin.mclauchlan@kasl.co.uk");
        tempRoom.roomusers.push(tempUser);
        tempUser = new user_1.User("Bert", "Whitehead", "colin.mclauchlan@kasl.co.uk");
        tempRoom.roomusers.push(tempUser);
        tempUser = new user_1.User("Bert", "Whitehead", "colin.mclauchlan@kasl.co.uk");
        tempRoom.roomusers.push(tempUser);
        tempRoom.roommessages = this.mockMessages(2);
        this.rooms.push(tempRoom);
        this.selectedRoom = this.rooms[0];
    };
    ChatComponent.prototype.mockMessages = function (number) {
        var messages = [];
        var tempUser = null;
        switch (number) {
            case 1:
                tempUser = new user_1.User("Colin", "McLauchlan", "colin.mclauchlan@kasl.co.uk");
                break;
            case 2:
                tempUser = new user_1.User("Bert", "Whitehead", "colin.mclauchlan@kasl.co.uk");
                break;
            case 3:
                tempUser = new user_1.User("Vishal", "Barot", "colin.mclauchlan@kasl.co.uk");
                break;
        }
        var tempMessage = new message_1.Message(tempUser, "This was sent by SomeOne", true);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser, "This was sent by SomeOne", false);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser, "This was sent by SomeOne", true);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser, "This was sent by SomeOne", false);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser, "This was sent by SomeOne", true);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser, "This was sent by SomeOne", false);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser, "This was sent by SomeOne", true);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser, "This was sent by SomeOne", false);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser, "This was sent by SomeOne", true);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser, "This was sent by SomeOne", false);
        messages.push(tempMessage);
        return messages;
    };
    ChatComponent.prototype.ngOnInit = function () {
        if (!this._loginService.isAuthenticated()) {
            this._router.navigate(['login']);
        }
    };
    ChatComponent.prototype.updateSelected = function (room) {
        this.selectedRoom = room;
    };
    ChatComponent.prototype.onChange = function (val) {
        this.parentCount = val;
    };
    ChatComponent = __decorate([
        core_1.Component({
            template: "<div class=\"row chatter\">\n                    <div class=\"col-md-3 col-sm-6\">\n                        <chat-user [selectedRoom]=\"selectedRoom\" [rooms]=\"rooms\" (roomEmitter)=\"updateSelected($event)\"></chat-user>\n                    </div>\n                    <div class=\"col-md-9 col-sm-6\">\n                        <chat-box [selectedRoom]=\"selectedRoom\"></chat-box>\n                    </div>\n               </div>",
            directives: [user_component_1.UserComponent, chatbox_component_1.ChatBoxComponent],
            providers: [chat_service_1.ChatService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, chat_service_1.ChatService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map