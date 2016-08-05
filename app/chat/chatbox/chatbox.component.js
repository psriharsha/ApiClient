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
var ChatBoxComponent = (function () {
    function ChatBoxComponent() {
        this.selectedRoom = null;
    }
    ChatBoxComponent = __decorate([
        core_1.Component({
            selector: 'chat-box',
            inputs: ['selectedRoom'],
            template: "<div class=\"col-md-12 box chatBox\">\n                    <div class=\"messageArea\" *ngIf=\"selectedRoom == null\">\n                    </div>                    \n                    <div class=\"messageArea\" *ngIf=\"selectedRoom != null\">\n                        <div class=\"messageTuple col-md-10 col-sm-10 col-xs-10 pull-right\" *ngFor=\"let message of selectedRoom.roommessages\" [class.pull-right]=\"message.self\" [class.pull-left]=\"!message.self\">\n                            <div class=\"col-md-12 messageTitle\"><span class=\"messageSender\" [style.color]=\"message.sendercolor\">{{message.sender}}</span><span class=\"pull-right sentat\">{{message.sentat}}</span></div>\n                            <div class=\"col-md-12 message\">{{message.message}}</div>\n                        </div>\n                    </div>                       \n                    <div class=\"form-group messageBox col-md-12\" *ngIf=\"selectedRoom != null\">\n                        <textarea class=\"form-control\" rows=\"1\"></textarea>\n                    </div>\n                <div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ChatBoxComponent);
    return ChatBoxComponent;
}());
exports.ChatBoxComponent = ChatBoxComponent;
//# sourceMappingURL=chatbox.component.js.map