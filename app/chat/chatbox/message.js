"use strict";
var Message = (function () {
    function Message(sender, sendercolor, message, self) {
        this.sender = sender;
        this.sendercolor = sendercolor;
        this.message = message;
        this.sentat = (new Date()).toTimeString().split(' ')[0];
        this.self = self;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.js.map