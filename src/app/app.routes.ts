import { Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  //login route
  {
    path:'login',
    component :LoginPageComponent
  },

  //register route
  {
    path: 'register',
    component: RegistrationPageComponent
  },

  //home route
  {
    path: 'home',
    component: HomePageComponent
  }
];
