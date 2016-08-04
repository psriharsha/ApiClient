import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {UserComponent} from './user/user.component'
import {ChatBoxComponent} from './chatbox/chatbox.component'
import {LoginService} from '../login/login.service'

@Component({
    template: `<div class="row chatter">
                    <div class="col-md-3 col-sm-6">
                        <chat-user></chat-user>
                    </div>
                    <div class="col-md-9 col-sm-6">
                        <chat-box></chat-box>
                    </div>
               </div>`,
    directives: [UserComponent, ChatBoxComponent]
})
export class ChatComponent{

    constructor(private _loginService : LoginService, private _router : Router){

    }

    ngOnInit(){
        if(!this._loginService.isAuthenticated()){
            this._router.navigate(['login']);
        }
    }

}