import { Routes } from '@angular/router';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CallbackPageComponent } from './pages/callback-page/callback-page.component';

export const routes: Routes = [{
    path: 'signup',
    component: SignUpPageComponent
}, {
    path: '',
    component: HomePageComponent
},
{
    path: 'callback',
    component: CallbackPageComponent,
}

];
