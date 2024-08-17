import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-miprimercomponente',
  templateUrl: './miprimercomponente.component.html'
})
export class MiprimercomponenteComponent {


  @Output()
  banderaAutenticacion = new EventEmitter<string>();


  nombreusuario: string = '';
  passwordusuario: string = '';

  mostrarNombre() {
    console.log({
      'usuario': this.nombreusuario, 
      'pass': this.passwordusuario
    });
  }

  eventoCambioPantalla(){
    this.banderaAutenticacion.emit("CAMBIO");
  }
}
