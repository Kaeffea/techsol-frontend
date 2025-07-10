import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Login } from './pages/login/login';

export const routes: Routes = [
  // Rota padrão que carrega a Landing Page
  { path: '', component: Landing },
  { path: 'login', component: Login }
];
