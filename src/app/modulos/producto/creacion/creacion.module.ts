import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteComponent } from './componente/componente.component';
import { DatosproductoComponent } from './componente/subcomponentes/datosproducto/datosproducto.component';
import { DatosprecioComponent } from './componente/subcomponentes/datosprecio/datosprecio.component';
import { DatosproveedorComponent } from './componente/subcomponentes/datosproveedor/datosproveedor.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComponenteComponent,
       DatosproductoComponent,
       DatosprecioComponent,
       DatosproveedorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ComponenteComponent,
  ]
})
export class CreacionModule { }
