import {Component} from '@angular/core'
import {ChatBoxComponent} from '../chatbox/chatbox.component'
import {Room} from '../chatbox/room'
import {ChatService} from '../chat.service'

@Component({
    selector: 'chat-user',
    template: `<ul class="box chatUser">
                    <li *ngFor="let room of rooms" (click)="selectRoom(room.roomname)">{{room.roomname}}</li>
               </ul>`,
    providers: [ChatService]
})
export class UserComponent{

    rooms : Room[];
    selectedRoomName : string;
    constructor(private chatService : ChatService){
        let tempBoxComponent = new ChatBoxComponent(chatService);
        this.rooms = chatService.rooms;
    }

    selectRoom(roomname : string){
        console.log(roomname);
    }

    findRoomByName(roomname : string){
        for(let i=0; i<this.rooms.length; i++){
            if(this.rooms[i].roomname === roomname)
                return this.rooms[i];
        }
    }

    getRooms(){
        this.rooms = this.chatService.rooms;
    }
    
}