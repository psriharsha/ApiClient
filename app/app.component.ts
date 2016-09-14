import { Component } from '@angular/core';
import {HeroComponent} from './hero/hero.component';
import {LoginComponent} from './login/login.component';
import {SideBarComponent} from './sidebar/sidebar.component'
import {ChatComponent} from './chat/chat.component'
import {HeroService} from './hero/hero.service'
import {LoginService} from './login/login.service'
import {Http, HTTP_PROVIDERS} from '@angular/http'
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import './rxjs.operators';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES,SideBarComponent],
  providers : [HeroService, LoginService, Http, HTTP_PROVIDERS],
  precompile : [LoginComponent, ChatComponent, HeroComponent]
})
export class AppComponent {
  crum : string = "Dashboard";
  constructor(private router: Router){
      this.router.events.subscribe(()=>{
        var url = this.router.routerState.snapshot.url;
        this.crum = ((url).slice(1,url.length)).toUpperCase();
      });
  }
}