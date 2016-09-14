import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms } from '@angular/forms';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
bootstrap(AppComponent, [
    appRouterProviders,
    disableDeprecatedForms
]).catch(err => console.error(err));