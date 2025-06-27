import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';

export const routes: Routes = [
  // Rota padrão que carrega a Landing Page
  { path: '', component: Landing },

  // Outras rotas (como /login, /cadastro) virão aqui no futuro
];
