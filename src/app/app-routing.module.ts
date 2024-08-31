import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenimientoComponent } from './modulos/persona/mantenimiento/mantenimiento.component';
import { NotfoundComponent } from './modulos/general/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // indica la redirección de la ruta por default cuando no se ha apuntado a alguna ruta específica
  // 
  { path: 'login',  
    loadChildren: () => import('./modulos/autenticacion/autenticacion.module').then( m => m.AutenticacionModule)
   },
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