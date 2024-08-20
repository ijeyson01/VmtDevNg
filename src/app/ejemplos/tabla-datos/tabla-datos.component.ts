import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html'
})
export class TablaDatosComponent {

  lusuarios: any[] = [
    {
     n:1,
     nombre: 'VMT dev',
     edad: 10,
     ciudad: 'Guayaquil'
    },
    {
      n: 2,
      nombre: 'VMT dev 2',
      edad: 10,
      ciudad: 'Guayaquil'
     },
     {
      n:3, 
      nombre: 'VMT dev 3',
      edad: 10,
      ciudad: 'Guayaquil'
     },
     {
      n: 4,
      nombre: 'VMT dev 4',
      edad: 10,
      ciudad: 'Guayaquil'
     },
     {
      n:5,
      nombre: 'VMT dev 5',
      edad: 10,
      ciudad: 'Guayaquil'
     },
  ]

  lciudades = [

    {
      idciudad: 1,
      ciudad: 'Guayaquil',
    },
    {
      idciudad: 2,
      ciudad: 'Quito',
    },
    {
      idciudad: 3,
      ciudad: 'Manta',
    },
    {
      idciudad: 4,
      ciudad: 'Cuenca',
    },
    {
      idciudad: 5,
      ciudad: 'Portoviejo',
    },
  ]

}
