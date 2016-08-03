import { provideRouter, RouterConfig } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HeroComponent} from './hero/hero.component';

const routes: RouterConfig = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'hero', component: HeroComponent },
  {path: '**', redirectTo: '/hero', pathMatch: 'full'}
];

export const appRouterProviders = [
  provideRouter(routes)
];