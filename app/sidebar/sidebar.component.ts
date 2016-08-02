import { Component } from '@angular/core';
import {SideBar} from './sidebar';

@Component({
    selector : 'side-bar',
    template : `<ul class="nav">
                <li *ngFor = "menuItem in menuItems">
                    <a href="{{menuItem.link}}">
                        <i class="fa {{menuItem.menuIcon}}"></i>
                        <p>{{menuItem.menuName}}</p>
                    </a>
                </li>

            </ul>`
})
export class SideBarComponent{
    menuItems : SideBar[];
    constructor(){
        
    }
    getMenuItems(){

    }
}