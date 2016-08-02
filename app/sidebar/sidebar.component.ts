import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {SideBar} from './sidebar';

@Component({
    selector : 'side-bar',
    template : `<ul class="nav">
                <li *ngFor = "let menuItem of menuItems">
                    <a [routerLink]="[menuItem.menulink]">
                        <i class="fa {{menuItem.menuicon}}"></i>
                        <p>{{menuItem.menuname}}</p>
                    </a>
                </li>

            </ul>`,
    directives: [ROUTER_DIRECTIVES]
})
export class SideBarComponent{
    menuItems : SideBar[];
    constructor(){
        let profile = new SideBar();
        profile.menuname = "Profile";
        profile.menuicon = "fa-user";
        profile.menulink = "/hero";
        this.menuItems = [];
        this.menuItems.push(profile);
    }
    getMenuItems(){

    }
}