"use strict";
var Room = (function () {
    function Room(roomid, roomname) {
        this.roomid = roomid;
        this.roomname = roomname;
        this.roomusers = [];
        this.roommessages = [];
    }
    return Room;
}());
exports.Room = Room;
//# sourceMappingURL=room.js.map