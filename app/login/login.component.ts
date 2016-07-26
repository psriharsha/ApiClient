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
    errorMessage : string;

    constructor(private _service : LoginService){
        this.message = "Please log in"
    }

    submitLogin(){
        console.log("Username: " + this.username + "\t Password: " + this.password);
        this._service.validateLogin(this.username, this.password).subscribe(result =>  console.log(result),
                        error =>  this.errorMessage = <any>error);
        
    }
}