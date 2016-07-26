import { Component } from '@angular/core';
import {HeroComponent} from './hero/hero.component';
import {HeroService} from './hero/hero.service'
import {Http, HTTP_PROVIDERS} from '@angular/http'
import './rxjs.operators';
@Component({
  selector: 'my-app',
  template: `<h1>API Client</h1>
            <hero-list></hero-list>`,
  directives: [HeroComponent],
  providers : [HeroService, Http, HTTP_PROVIDERS]
})
export class AppComponent { }