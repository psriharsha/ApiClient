"use strict";
var User = (function () {
    function User(firstname, lastname, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    User.prototype.getFullName = function () {
        return this.lastname + " " + this.firstname;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map