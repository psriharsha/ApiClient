import {Injectable} from '@angular/core'
import {ChatBoxComponent} from './chatbox/chatbox.component'
import {Room} from './chatbox/room'

@Injectable()
export class ChatService{

    rooms : Room[];
    selectedRoom : Room;

    setRooms(rooms : Room[]){
        this.rooms = rooms;
    }

    setSelectedRoom(roomname : string){

    }

}