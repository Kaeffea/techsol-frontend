import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

export const routes: Routes = [
  // Rota padrão que carrega a Landing Page
  { path: '', component: Landing },
  { path: 'login', component: Login },
  { path: 'register/:token', component: Register }
];
