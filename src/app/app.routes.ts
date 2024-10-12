import { Routes } from '@angular/router'
import { TitulosComponent } from './componentes/titulos/titulos.component'
import { TrabajosComponent } from './componentes/trabajos/trabajos.component'
import { CursosComponent } from './componentes/cursos/cursos.component'
import { RelacionadoComponent } from './componentes/relacionado/relacionado.component'
import { OtrosComponent } from './componentes/otros/otros.component'

export const routes: Routes = [
  { path: 'titulos', component: TitulosComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'relacionado', component: RelacionadoComponent },
  { path: 'otros', component: OtrosComponent },
  { path: '', redirectTo: '/titulos', pathMatch: 'full' },
  // { path: '', pathMatch: 'full', redirectTo: '/titulos' },
  // { path: '**', pathMatch: 'full', redirectTo: '/titulos' } // Corrección aquí
]
