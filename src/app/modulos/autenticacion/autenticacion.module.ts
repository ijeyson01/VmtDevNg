import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { AutenticacionComponent } from './componente/autenticacion.component';
import { MiprimercomponenteComponent } from './componente/subcomponentes/miprimercomponente/miprimercomponente.component';
import { RegistrousuarioComponent } from './componente/subcomponentes/registrousuario/registrousuario.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AutenticacionComponent,
    MiprimercomponenteComponent,
    RegistrousuarioComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    FormsModule
  ]
})
export class AutenticacionModule { }
