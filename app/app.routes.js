"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var hero_component_1 = require('./hero/hero.component');
var chat_component_1 = require('./chat/chat.component');
var routes = [
    { path: '', redirectTo: '/chat', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'hero', component: hero_component_1.HeroComponent },
    { path: 'chat', component: chat_component_1.ChatComponent },
    { path: '**', redirectTo: '/hero', pathMatch: 'full' }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map