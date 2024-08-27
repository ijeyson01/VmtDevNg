import { Component, ViewChild } from '@angular/core';
import { DatospersonalesComponent } from './subcomponentes/datospersonales/datospersonales.component';
import { DatosautoComponent } from './subcomponentes/datosauto/datosauto.component';
import { DatospagoComponent } from './subcomponentes/datospago/datospago.component';
import { DatosgaranteComponent } from './subcomponentes/datosgarante/datosgarante.component';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html'
})
export class MantenimientoComponent {

  @ViewChild(DatospersonalesComponent, {static: false}) 
  datosPersonalesComponent!: DatospersonalesComponent;

  @ViewChild(DatosautoComponent)
  datosAutoComponent!: DatosautoComponent;

  @ViewChild(DatospagoComponent)
  datosPagoComponent!: DatospagoComponent;
  
  @ViewChild(DatosgaranteComponent, {static: false})
  datosGarante!: DatosgaranteComponent;

  mantenimientoUsuario(){
    this.datosAutoComponent.guardarDatosAuto();
    this.datosGarante.guardarDatosGarante();
    this.datosPagoComponent.guardarDatosPago();
    this.datosPersonalesComponent.guardarDatosPersonales();
  }
  

}
