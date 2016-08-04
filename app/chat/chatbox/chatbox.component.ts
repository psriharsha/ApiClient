import {Component} from '@angular/core'
import {User} from '../user/user'
import {Message} from './message'
import {Room} from './room'
import {ChatService} from '../chat.service'

@Component({
    selector : 'chat-box',
    template : `<div class="col-md-12 box chatBox">
                    <div class="messageArea" *ngIf="selectedRoom != null">
                        <div class="messageTuple col-md-10 col-sm-10 col-xs-10 pull-right" *ngFor="let message of selectedRoom.roommessages" [class.pull-right]="message.self" [class.pull-left]="!message.self">
                            <div class="col-md-12 messageTitle"><span class="messageSender" [style.color]="message.sendercolor">{{message.sender}}</span><span class="pull-right sentat">{{message.sentat}}</span></div>
                            <div class="col-md-12 message">{{message.message}}</div>
                        </div>                       
                        <div class="form-group messageBox col-md-12">
                            <textarea class="form-control" rows="1"></textarea>
                        </div>
                    </div>
                    <div class="messageArea" *ngIf="selectedRoom == null">
                    </div>
                <div>`,
    providers: [ChatService]
})
export class ChatBoxComponent{
    rooms : Room[];
    selectedRoom : Room;
    constructor(chatService : ChatService){
        this.rooms = [];
        this.selectedRoom = chatService.selectedRoom;
        this.mockRoom1();
        this.mockRoom2();
        chatService.setRooms(this.rooms);
    }
    mockRoom1(){
        let tempRoom = new Room("Demo Room");
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
        let tempRoom = new Room("Room Demo");
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
        //this.selectedRoom = this.rooms[0];
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

}