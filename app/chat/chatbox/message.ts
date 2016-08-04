import {User} from '../user/user'
export class Message{
    sender  : string;
    sendercolor: string;
    message : string;
    sentat  : string;
    self    : Boolean;
    constructor(sender : string, sendercolor : string, message : string, self : Boolean){
        this.sender = sender;
        this.sendercolor = sendercolor;
        this.message = message;
        this.sentat = (new Date()).toTimeString().split(' ')[0];
        this.self = self;
    }
}