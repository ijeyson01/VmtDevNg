import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiprimercomponenteComponent } from './ejemplos/miprimercomponente/miprimercomponente.component';
import { FormsModule } from '@angular/forms';
import { RegistrousuarioComponent } from './ejemplos/registrousuario/registrousuario.component';
import { AutenticacionComponent } from './ejemplos/autenticacion/autenticacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MiprimercomponenteComponent,
    RegistrousuarioComponent,
    AutenticacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
