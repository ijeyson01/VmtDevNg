import { Component } from '@angular/core';
import { MiprimercomponenteComponent } from '../miprimercomponente/miprimercomponente.component';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html'
})
export class AutenticacionComponent {

  pantallaPresentacion: string = 'LOGIN';

  mailDefecto = 'cliente@mail.com'

  toggleAutentication(dataCambio: string) {
    console.log(dataCambio);
    this.pantallaPresentacion = dataCambio;
  }

}
