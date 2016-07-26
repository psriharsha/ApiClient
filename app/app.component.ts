import { Component } from '@angular/core';
import {HeroComponent} from './hero/hero.component';
import {LoginComponent} from './login/login.component';
import {HeroService} from './hero/hero.service'
import {LoginService} from './login/login.service'
import {Http, HTTP_PROVIDERS} from '@angular/http'
import { ROUTER_DIRECTIVES } from '@angular/router';
import './rxjs.operators';
@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers : [HeroService, LoginService, Http, HTTP_PROVIDERS],
  precompile : [HeroComponent, LoginComponent]
})
export class AppComponent { }