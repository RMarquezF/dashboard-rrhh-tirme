import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Login } from './components/login/login';
import { ResumenGeneral } from './components/resumen-general/resumen-general';
import { Personas } from './components/personas/personas';
import { Turnos } from './components/turnos/turnos';

const authGuard = () => {
  const authService = inject(AuthService);
  return authService.isLogged() || inject(Router).createUrlTree(['/login']);
};

const loginGuard = () => {
  const authService = inject(AuthService);
  return !authService.isLogged() || inject(Router).createUrlTree(['/resumen-general']);
};

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login, canActivate: [loginGuard] },
  { path: 'resumen-general', component: ResumenGeneral, canActivate: [authGuard] },
  { path: 'personal', component: Personas, canActivate: [authGuard] },
  { path: 'turnos', component: Turnos, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];
