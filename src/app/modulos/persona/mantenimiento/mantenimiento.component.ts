import { Component, ViewChild } from '@angular/core';
import { DatospersonalesComponent } from './subcomponentes/datospersonales/datospersonales.component';
import { DatosautoComponent } from './subcomponentes/datosauto/datosauto.component';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html'
})
export class MantenimientoComponent {

  @ViewChild(DatospersonalesComponent, {static: false}) 
  datosPersonalesComponent!: DatospersonalesComponent;

  @ViewChild(DatosautoComponent)
  datosAutoComponent!: DatosautoComponent;

}
