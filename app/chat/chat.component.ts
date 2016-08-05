import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {UserComponent} from './user/user.component'
import {ChatBoxComponent} from './chatbox/chatbox.component'
import {LoginService} from '../login/login.service'
import {ChatService} from './chat.service'
import {Room} from './chatbox/room'
import {Message} from './chatbox/message'
import {User} from './user/user'

@Component({
    template: `<div class="row chatter">
                    <div class="col-md-3 col-sm-6">
                        <chat-user [selectedRoom]="selectedRoom" [rooms]="rooms" (roomEmitter)="updateSelected($event)"></chat-user>
                    </div>
                    <div class="col-md-9 col-sm-6">
                        <chat-box [selectedRoom]="selectedRoom"></chat-box>
                    </div>
               </div>`,
    directives: [UserComponent, ChatBoxComponent],
    providers: [ChatService]
})
export class ChatComponent{
    selectedRoom : Room;
    rooms : Room[];
    num : number;
    parentCount : string;
    constructor(private _loginService : LoginService, private _router : Router, private _chatService : ChatService){        
        this.rooms = [];
        this.mockRoom1();
        this.mockRoom2();
    }
    mockRoom1(){
        let tempRoom = new Room(1000, "Demo Room");
        let tempUser = new User("Colin", "McLauchlan", "colin.mclauchlan@kasl.co.uk");
        tempRoom.roomusers.push(tempUser);
        tempUser = new User("Colin", "McLauchlan", "colin.mclauchlan@kasl.co.uk");
        tempRoom.roomusers.push(tempUser);
        tempUser = new User("Colin", "McLauchlan", "colin.mclauchlan@kasl.co.uk");
        tempRoom.roomusers.push(tempUser);
        tempUser = new User("Colin", "McLauchlan", "colin.mclauchlan@kasl.co.uk");
        tempRoom.roomusers.push(tempUser);
        tempRoom.roommessages = this.mockMessages(1);
        this.rooms.push(tempRoom);
    }
    mockRoom2(){
        let tempRoom = new Room(1001 , "Room Demo");
        let tempUser = new User("Bert", "Whitehead", "colin.mclauchlan@kasl.co.uk");
        tempRoom.roomusers.push(tempUser);
        tempUser = new User("Bert", "Whitehead", "colin.mclauchlan@kasl.co.uk");
        tempRoom.roomusers.push(tempUser);
        tempUser = new User("Bert", "Whitehead", "colin.mclauchlan@kasl.co.uk");
        tempRoom.roomusers.push(tempUser);
        tempUser = new User("Bert", "Whitehead", "colin.mclauchlan@kasl.co.uk");
        tempRoom.roomusers.push(tempUser);
        tempRoom.roommessages = this.mockMessages(2);
        this.rooms.push(tempRoom);
        this.selectedRoom = this.rooms[0];
    }
    mockMessages(number : number){
        var messages = [];
        let tempUser = null;
        switch(number){
            case 1 : tempUser = new User("Colin", "McLauchlan", "colin.mclauchlan@kasl.co.uk"); break;
            case 2 : tempUser = new User("Bert", "Whitehead", "colin.mclauchlan@kasl.co.uk"); break;
            case 3 : tempUser = new User("Vishal", "Barot", "colin.mclauchlan@kasl.co.uk"); break;
        }        
        let tempMessage = new Message(tempUser.getFullName(), tempUser.color ,"This was sent by SomeOne", true);
        messages.push(tempMessage);
        tempMessage = new Message(tempUser.getFullName(), tempUser.color ,"This was sent by SomeOne", false);
        messages.push(tempMessage);
        tempMessage = new Message(tempUser.getFullName(), tempUser.color ,"This was sent by SomeOne", true);
        messages.push(tempMessage);
        tempMessage = new Message(tempUser.getFullName(), tempUser.color ,"This was sent by SomeOne", false);
        messages.push(tempMessage);
        tempMessage = new Message(tempUser.getFullName(), tempUser.color ,"This was sent by SomeOne", true);
        messages.push(tempMessage);
        tempMessage = new Message(tempUser.getFullName(), tempUser.color ,"This was sent by SomeOne", false);
        messages.push(tempMessage);
        tempMessage = new Message(tempUser.getFullName(), tempUser.color ,"This was sent by SomeOne", true);
        messages.push(tempMessage);
        tempMessage = new Message(tempUser.getFullName(), tempUser.color ,"This was sent by SomeOne", false);
        messages.push(tempMessage);
        tempMessage = new Message(tempUser.getFullName(), tempUser.color ,"This was sent by SomeOne", true);
        messages.push(tempMessage);
        tempMessage = new Message(tempUser.getFullName(), tempUser.color ,"This was sent by SomeOne", false);
        messages.push(tempMessage);
        return messages;
    }

    ngOnInit(){
        if(!this._loginService.isAuthenticated()){
            this._router.navigate(['login']);
        }
    }

    updateSelected(room){
        this.selectedRoom = room;
    }

    onChange(val: any) {
    this.parentCount = val;
  }

}