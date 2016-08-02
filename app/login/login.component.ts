import {Component} from '@angular/core';
import {LoginService} from './login.service'

@Component({
    templateUrl : 'app/login/login.html',
    providers : [LoginService]
})
export class LoginComponent{
    username : string;
    password : string;
    remember : boolean;
    message  : string;

    constructor(private _service : LoginService){
        this.message = "Please log in"
    }

    submitLogin(){
        this._service.validateLogin(this.username, this.password).subscribe(result =>  this.message = result.access_token,
                        error =>  this.message = <any>error);        
    }
}