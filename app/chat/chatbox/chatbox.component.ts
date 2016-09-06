import {Component, Input, Output} from '@angular/core'
import {User} from '../user/user'
import {Message} from './message'
import {Room} from './room'

@Component({
    selector : 'chat-box',
    inputs : ['selectedRoom'],
    template : `<div class="col-md-12 box chatBox">
                    <div class="messageArea" *ngIf="selectedRoom == null">
                    </div>                    
                    <div class="messageArea" *ngIf="selectedRoom != null">
                        <div class="messageTuple col-md-10 col-sm-10 col-xs-10 pull-right" *ngFor="let message of selectedRoom.roommessages" [class.pull-right]="message.self" [class.pull-left]="!message.self">
                            <div class="col-md-12 messageTitle"><span rel="tooltip" title="{{message.sender.email}}" class="messageSender" [style.color]="message.sender.color">{{message.sender.getFullName()}}</span><span class="pull-right sentat">{{message.sentat}}</span></div>
                            <div class="col-md-12 message">{{message.message}}</div>
                        </div>
                    </div>                       
                    <div class="form-group messageBox col-md-12" *ngIf="selectedRoom != null">
                        <textarea class="form-control" rows="1"></textarea>
                    </div>
                <div>`
})
export class ChatBoxComponent{
    selectedRoom : Room;
    constructor(){
        this.selectedRoom = null;
    }

}