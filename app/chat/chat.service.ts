import {Injectable} from '@angular/core'
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable'
import {ChatBoxComponent} from './chatbox/chatbox.component'
import {Room} from './chatbox/room'

@Injectable()
export class ChatService{

    rooms : Room[];
    selectedRoom : Room;
    private roomSubject : Subject<Room>;

    constructor(){
        this.rooms = [];
        this.roomSubject = new Subject<Room>();
    }

    setRooms(rooms : Room[]){
        this.rooms = rooms;
    }

    setSelectedRoom(room : Room){
        console.log("Room Selected : " + room.roomname);
        this.selectedRoom = room;
        this.roomSubject.next(room);
    }

    getSelectedRoom() : Observable<Room>{
        return(this.roomSubject.asObservable());
    }

}