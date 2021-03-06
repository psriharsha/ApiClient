import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {SideBar} from './sidebar';
import {LoginService} from '../login/login.service';

@Component({
    selector : 'side-bar',
    template : `<ul class="nav">
                <li *ngFor = "let menuItem of menuItems">
                    <a [routerLink]="[menuItem.menulink]" *ngIf="menuItem.menuaction">
                        <i class="fa {{menuItem.menuicon}}"></i>
                        <p>{{menuItem.menuname}}</p>
                    </a>
                    <a *ngIf="!menuItem.menuaction" (click)="logOut()" class="pointer">
                        <i class="fa {{menuItem.menuicon}}"></i>
                        <p>{{menuItem.menuname}}</p>
                    </a>
                </li>

            </ul>`,
    directives: [ROUTER_DIRECTIVES]
})
export class SideBarComponent{
    menuItems : SideBar[];
    constructor(private _router : Router, private _loginService : LoginService){
        this.initSideBar();
    }
    ngOnInit(){
        this._router.events.subscribe(event => {
            if(this._loginService.isAuthenticated()){
                this.getMenuItems();
            }
        });
    }
    initSideBar(){
        let profile = new SideBar("Profile", "fa-user", "/hero", true);
        this.menuItems = [];
        this.menuItems.push(profile);
    }
    getMenuItems(){
        let profile = new SideBar("Chat", "fa-comment-o", "/chat", true);
        this.menuItems = [];
        this.menuItems.push(profile);
        profile = new SideBar("Hero", "fa-random", "/hero", true);
        this.menuItems.push(profile);
        profile = new SideBar("Logout", "fa-sign-out", "/chat", false);
        this.menuItems.push(profile);
    }
    logOut(){
        this._loginService.logout();
        this.initSideBar();
    }
}