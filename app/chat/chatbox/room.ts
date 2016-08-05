import {User} from '../user/user'
import {Message} from './message'
export class Room{
    roomid      : number;
    roomname    : string;
    roomusers   : User[];
    roommessages: Message[];
    constructor(roomid : number, roomname : string){
        this.roomid         = roomid;
        this.roomname       = roomname;
        this.roomusers      = [];
        this.roommessages   = [];
    }
}