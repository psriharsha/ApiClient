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
var user_1 = require('../user/user');
var message_1 = require('./message');
var room_1 = require('./room');
var chat_service_1 = require('../chat.service');
var ChatBoxComponent = (function () {
    function ChatBoxComponent(chatService) {
        this.rooms = [];
        this.selectedRoom = chatService.selectedRoom;
        this.mockRoom1();
        this.mockRoom2();
        chatService.setRooms(this.rooms);
    }
    ChatBoxComponent.prototype.mockRoom1 = function () {
        var tempRoom = new room_1.Room("Demo Room");
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
    ChatBoxComponent.prototype.mockRoom2 = function () {
        var tempRoom = new room_1.Room("Room Demo");
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
        //this.selectedRoom = this.rooms[0];
    };
    ChatBoxComponent.prototype.mockMessages = function (number) {
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
        var tempMessage = new message_1.Message(tempUser.getFullName(), tempUser.color, "This was sent by SomeOne", true);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser.getFullName(), tempUser.color, "This was sent by SomeOne", false);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser.getFullName(), tempUser.color, "This was sent by SomeOne", true);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser.getFullName(), tempUser.color, "This was sent by SomeOne", false);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser.getFullName(), tempUser.color, "This was sent by SomeOne", true);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser.getFullName(), tempUser.color, "This was sent by SomeOne", false);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser.getFullName(), tempUser.color, "This was sent by SomeOne", true);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser.getFullName(), tempUser.color, "This was sent by SomeOne", false);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser.getFullName(), tempUser.color, "This was sent by SomeOne", true);
        messages.push(tempMessage);
        tempMessage = new message_1.Message(tempUser.getFullName(), tempUser.color, "This was sent by SomeOne", false);
        messages.push(tempMessage);
        return messages;
    };
    ChatBoxComponent = __decorate([
        core_1.Component({
            selector: 'chat-box',
            template: "<div class=\"col-md-12 box chatBox\">\n                    <div class=\"messageArea\" *ngIf=\"selectedRoom != null\">\n                        <div class=\"messageTuple col-md-10 col-sm-10 col-xs-10 pull-right\" *ngFor=\"let message of selectedRoom.roommessages\" [class.pull-right]=\"message.self\" [class.pull-left]=\"!message.self\">\n                            <div class=\"col-md-12 messageTitle\"><span class=\"messageSender\" [style.color]=\"message.sendercolor\">{{message.sender}}</span><span class=\"pull-right sentat\">{{message.sentat}}</span></div>\n                            <div class=\"col-md-12 message\">{{message.message}}</div>\n                        </div>                       \n                        <div class=\"form-group messageBox col-md-12\">\n                            <textarea class=\"form-control\" rows=\"1\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"messageArea\" *ngIf=\"selectedRoom == null\">\n                    </div>\n                <div>",
            providers: [chat_service_1.ChatService]
        }), 
        __metadata('design:paramtypes', [chat_service_1.ChatService])
    ], ChatBoxComponent);
    return ChatBoxComponent;
}());
exports.ChatBoxComponent = ChatBoxComponent;
//# sourceMappingURL=chatbox.component.js.map