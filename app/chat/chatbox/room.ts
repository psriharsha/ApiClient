import {User} from '../user/user'
import {Message} from './message'
export class Room{
    roomname    : string;
    roomusers   : User[];
    roommessages: Message[];
    constructor(roomname : string){
        this.roomname       = roomname;
        this.roomusers      = [];
        this.roommessages   = [];
    }
}