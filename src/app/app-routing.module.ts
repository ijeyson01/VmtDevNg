import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionComponent } from './ejemplos/autenticacion/autenticacion.component';
import { MantenimientoComponent } from './modulos/persona/mantenimiento/mantenimiento.component';
import { NotfoundComponent } from './modulos/general/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AutenticacionComponent },
  { path: 'creacion', 
    loadChildren: () => import('./modulos/producto/creacion/creacion.module').then(m => m.CreacionModule)
  },
  { path: 'personas', component: MantenimientoComponent },
  { path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }