import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiprimercomponenteComponent } from './ejemplos/miprimercomponente/miprimercomponente.component';
import { FormsModule } from '@angular/forms';
import { RegistrousuarioComponent } from './ejemplos/registrousuario/registrousuario.component';
import { AutenticacionComponent } from './ejemplos/autenticacion/autenticacion.component';
import { TablaDatosComponent } from './ejemplos/tabla-datos/tabla-datos.component';
import { EjemploNgTemplateComponent } from './ejemplos/ejemplo-ng-template/ejemplo-ng-template.component';
import { HeaderComponent } from './shared/header/header.component';
import { ModuloPadreComponent } from './modulo-padre/modulo-padre.component';
import { HomeComponent } from './componentes/home/home.component';
import { BotonesTablaComponent } from './shared/botones-tabla/botones-tabla.component';
import { TablapersonasComponent } from './ejercicios/tablapersonas/tablapersonas.component';
import { BotondinamicoComponent } from './shared/botondinamico/botondinamico.component';
import { ModalpersonasComponent } from './ejercicios/tablapersonas/modalpersonas/modalpersonas.component';
import { TablaproductosComponent } from './ejercicios/tablaproductos/tablaproductos.component';

@NgModule({
  declarations: [
    AppComponent,
    MiprimercomponenteComponent,
    RegistrousuarioComponent,
    AutenticacionComponent,
    TablaDatosComponent,
    EjemploNgTemplateComponent,
    HeaderComponent,
    ModuloPadreComponent,
    HomeComponent,
    BotonesTablaComponent,
    TablapersonasComponent,
    BotondinamicoComponent,
    ModalpersonasComponent,
    TablaproductosComponent
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
