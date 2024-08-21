import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-miprimercomponente',
  templateUrl: './miprimercomponente.component.html'
})
export class MiprimercomponenteComponent {


  constructor(){
  }


  @Output()
  banderaAutenticacion = new EventEmitter<string>();

  @Input()
  valorData?: string;

  labelLogin: string = 'LOGIN';
  nombreusuario: string = ''; // two way binging
  passwordusuario: string = '';

  mostrarNombre() {
    console.log({
      'usuario': this.nombreusuario, 
      'pass': this.passwordusuario
    });
  }

  eventoCambioPantalla(){
    this.banderaAutenticacion.emit("REGISTRO");
  }
}
