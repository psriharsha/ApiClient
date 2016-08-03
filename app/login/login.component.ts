import {Component} from '@angular/core';
import {LoginService} from './login.service';
import {Router } from '@angular/router';

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

    constructor(private _service : LoginService, private _router : Router ){
        this.message = "Please log in";
        this.type    = "alert-success";
    }
    ngOnInit(){
        if(this._service.isAuthenticated()){
           this._router.navigate(['hero']);
        }
    }
    submitLogin(){
        this._service.validateLogin(this.username, this.password).subscribe((response : any) =>  {
                if(response.status === 200){
                    this.message = "Login Validated";
                    this.type    = "alert-success";
                    this._router.navigate(["hero"]);
                }
            },error =>  {
                localStorage.removeItem("authBearer");
                this.message = "Invalid Username and Password Combination";
                this.type = "alert-danger";
            });
    }
}