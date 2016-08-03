import {Component} from '@angular/core';
import {Router } from '@angular/router';
import {FormBuilder, Validators} from '@angular/common'
import {LoginService} from './login.service';

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
    loginForm : any;
    isSubmitted : Boolean;

    constructor(private _service : LoginService, private _router : Router, fb : FormBuilder){
        this.message = "Please log in";
        this.type    = "alert-success";
        this.isSubmitted = false;
        this.loginForm= fb.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
    }
    ngOnInit(){
        if(this._service.isAuthenticated()){
           this._router.navigate(['hero']);
        }
    }
    submitLogin(event){
        this.isSubmitted = true;
        event.preventDefault();
        this.username = this.loginForm.controls.username.value;
        this.password = this.loginForm.controls.password.value;
        this._service.validateLogin(this.username, this.password).subscribe((response : any) =>  {
                if(response.status === 200){
                    this.message = "Login Validated";
                    this.type    = "alert-success";
                    this._router.navigate(["hero"]);
                }                
            this.isSubmitted = false;
            },error =>  {
                localStorage.removeItem("authBearer");
                this.message = "Invalid Username and Password Combination";
                this.type = "alert-danger";
                
            this.isSubmitted = false; 
            });        
    }
}