import {User} from '../user/user'
export class Message{
    sender  : User;
    message : string;
    sentat  : string;
    self    : Boolean;
    constructor(sender : User, message : string, self : Boolean){
        this.sender = sender;
        this.message = message;
        this.sentat = (new Date()).toTimeString().split(' ')[0];
        this.self = self;
    }
}