import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { ResumenGeneral } from './components/resumen-general/resumen-general';
import { Personas } from './components/personas/personas';
import { Turnos } from './components/turnos/turnos';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'resumen-general', component: ResumenGeneral },
  { path: 'personal', component: Personas },
  { path: 'turnos', component: Turnos },
  { path: '**', redirectTo: 'login' }
];
