import {Component} from '@angular/core'
import {UserComponent} from './user/user.component'

@Component({
    template: `<div class="row">
                    <div class="col-md-2 col-sm-6">
                        <chat-user></chat-user>
                    </div>
               </div>`,
    directives: [UserComponent]
})
export class ChatComponent{

}