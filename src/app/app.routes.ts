import { Routes } from '@angular/router';
import { TitulosComponent } from './componentes/titulos/titulos';
import { TrabajosComponent } from './componentes/trabajos/trabajos';
import { DatosComponent } from './componentes/datos/datos';
import { InformaticaComponent } from './componentes/informatica/informatica';
import { CursosComponent } from './componentes/cursos/cursos';
import {LoginComponent} from './componentes/login/login';
import { authGuard } from './auth-guard';


export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'cursos', component: CursosComponent, canActivate:[authGuard] },
  { path: 'datos', component: DatosComponent, canActivate:[authGuard] },
  { path: 'informatica', component: InformaticaComponent, canActivate:[authGuard] },
  { path: 'titulos', component: TitulosComponent, canActivate:[authGuard] },
  { path: 'trabajos', component: TrabajosComponent, canActivate:[authGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: '**', redirectTo: 'login' }, // Ruta comodín para errores
];
