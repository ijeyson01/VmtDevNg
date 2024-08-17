import { Component } from '@angular/core';

@Component({
  selector: 'app-miprimercomponente',
  templateUrl: './miprimercomponente.component.html'
})
export class MiprimercomponenteComponent {

  nombreusuario: string = '';
  passwordusuario: string = '';

  mostrarNombre() {
    console.log({
      'usuario': this.nombreusuario, 
      'pass': this.passwordusuario
    });
  }

}
