import { Routes } from '@angular/router';
import { Signup } from './features/auth/signup/signup';
import { Login } from './features/auth/login/login';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: Signup,
  },
  {
    path: 'login',
    component: Login
  }
];
