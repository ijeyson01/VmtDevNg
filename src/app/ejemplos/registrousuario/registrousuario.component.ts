import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.component.html',
  styleUrl: './registrousuario.component.css'
})
export class RegistrousuarioComponent {

  @Output() eventoVolverInicio = new EventEmitter<string>();

  volverInicio() {
    this.eventoVolverInicio.emit('LOGIN');
  }
}
