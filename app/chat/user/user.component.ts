import {Component, Input, Output, EventEmitter} from '@angular/core'
import {ChatBoxComponent} from '../chatbox/chatbox.component'
import {Room} from '../chatbox/room'
import {ChatService} from '../chat.service'

@Component({
    selector: 'chat-user',
    inputs: ['selectedRoom', 'rooms'],
    outputs: ['roomEmitter'],
    template: `<ul class="box chatUser">
                    <li [class.active]="room==selectedRoom" *ngFor="let room of rooms" (click)="selectRoom(room)">{{room.roomname}}</li>
               </ul>`,
    providers: [ChatService]
})
export class UserComponent{
    selectedRoom : Room;
    rooms : Room[];
    roomEmitter : EventEmitter<any> = new EventEmitter<any>();
    constructor(private chatService : ChatService){
        //this.rooms = chatService.rooms;
    }

    selectRoom(name : Room){
        this.selectedRoom = name;
        this.roomEmitter.emit(this.selectedRoom);
    }

    getRooms(){
        this.rooms = this.chatService.rooms;
    }
    
}