import { Component } from '@angular/core';
import { MiprimercomponenteComponent } from '../miprimercomponente/miprimercomponente.component';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrl: './autenticacion.component.css'
})
export class AutenticacionComponent {

  pantallaPresentacion: string = 'LOGIN';

  toggleAutentication(dataCambio: string) {
    console.log(dataCambio);
    this.pantallaPresentacion = `Registro`;
  }

}
