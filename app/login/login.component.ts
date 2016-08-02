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
    type     : string;

    constructor(private _service : LoginService){
        this.message = "Please log in";
        this.type    = "alert-success";
    }

    submitLogin(){
        this._service.validateLogin(this.username, this.password).subscribe(response =>  {
            if(response.status === 200){
            this.message = (response.json()).access_token;
            this.type    = "alert-success";
        }else{
            this.message = "Invalid Username or Password";
            this.type    = "alert-danger";
        }
        },
                        error =>  this.message = <any>error);
    }
}