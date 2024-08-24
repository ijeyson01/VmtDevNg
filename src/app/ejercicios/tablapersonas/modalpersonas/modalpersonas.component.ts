import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../../../datasource/persona.interface';
import bootstrap from 'bootstrap';

@Component({
  selector: 'app-modalpersonas',
  templateUrl: './modalpersonas.component.html'
})
export class ModalpersonasComponent {

  constructor() { }

  @Input()
  modalid: string = 'modalejemplo';

  @Input()
  dataPersona: Persona = {
    id: 0,
    nombres: '',
    apellidos: '',
    fecha_nacimiento: '',
    genero: '',
    telefono: '',
    ciudad: '',
    nivel_estudios: ''
  };

  @Output() eventoGuardar = new EventEmitter<Persona>();

  guardar() {
    this.eventoGuardar.emit(this.dataPersona);
    this.cerrarModal();
  }

  cerrarModal() {
  }
}
