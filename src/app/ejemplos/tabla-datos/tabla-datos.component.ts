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
     ciudad: 'Guayaquil',
     provinciaid: 1
    },
    {
      n: 2,
      nombre: 'VMT dev 2',
      edad: 10,
      ciudad: 'Quito',
      provinciaid: 2
     },
     {
      n:3, 
      nombre: 'VMT dev 3',
      edad: 10,
      ciudad: 'Manta',
      provinciaid: 3
     },
     {
      n: 4,
      nombre: 'VMT dev 4',
      edad: 10,
      ciudad: 'Cuenca',
      provinciaid: 4
     },
     {
      n:5,
      nombre: 'VMT dev 5',
      edad: 10,
      ciudad: 'Portoviejo',
      provinciaid: 3
     },
  ]

  lciudades = [
    {
      idciudad: 1,
      ciudad: 'Guayaquil',
      provinciaid: 1
    },
    {
      idciudad: 2,
      ciudad: 'Quito',
      provinciaid: 2
    },
    {
      idciudad: 3,
      ciudad: 'Manta',
      provinciaid: 3
    },
    {
      idciudad: 4,
      ciudad: 'Cuenca',
      provinciaid: 4
    },
    {
      idciudad: 5,
      ciudad: 'Portoviejo',
      provinciaid: 3
    },
  ]

  lprovincias= [
    {
      provinciaId: 1,
      provincia: 'Guayas'
    },
    {
      provinciaId: 2,
      provincia: 'Pichincha'
    },
    {
      provinciaId: 3,
      provincia: 'Manabí'
    },
    {
      provinciaId: 4,
      provincia: 'Guayas'
    }
  ]

}
