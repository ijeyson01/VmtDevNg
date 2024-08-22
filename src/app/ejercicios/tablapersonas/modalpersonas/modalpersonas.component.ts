import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../../../datasource/persona.interface';

@Component({
  selector: 'app-modalpersonas',
  templateUrl: './modalpersonas.component.html'
})
export class ModalpersonasComponent {

  constructor(){}

  @Input()
  modalid: string = 'modalejemplo';

  @Input()
  dataPersona?: Persona;

  @Output() eventoGuardar = new EventEmitter<Persona>();

  guardar() {
    this.eventoGuardar.emit(this.dataPersona);
  }
}
