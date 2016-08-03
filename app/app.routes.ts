import { provideRouter, RouterConfig } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HeroComponent} from './hero/hero.component';
import {ChatComponent} from './chat/chat.component';

const routes: RouterConfig = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'chat', component: ChatComponent },
  {path: '**', redirectTo: '/hero', pathMatch: 'full'}
];

export const appRouterProviders = [
  provideRouter(routes)
];