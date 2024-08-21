import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../../datasource/persona.interface';

@Component({
  selector: 'app-botondinamico',
  templateUrl: './botondinamico.component.html'
})
export class BotondinamicoComponent {

  @Input()
  labelBoton: string = "Editar";

  @Input()
  registroPersona?: Persona;

  @Output()
  eventoRegistro = new EventEmitter<Persona>();

  eventoClicBoton(){
    this.eventoRegistro.emit(this.registroPersona);
  }
}
