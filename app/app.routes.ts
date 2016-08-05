import { provideRouter, RouterConfig } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HeroComponent} from './hero/hero.component';
import {ChatComponent} from './chat/chat.component';

const routes: RouterConfig = [
  { path: '', redirectTo: '/chat', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, data : {breadCrum : "Login"} },
  { path: 'hero', component: HeroComponent, data : {breadCrum : "Hero"} },
  { path: 'chat', component: ChatComponent, data : {breadCrum : "Chat"} },
  {path: '**', redirectTo: '/hero', pathMatch: 'full'}
];

export const appRouterProviders = [
  provideRouter(routes)
];