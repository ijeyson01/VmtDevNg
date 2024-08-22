import { Component } from '@angular/core';
import { lpersona } from '../../datasource/dataejemplo';
import { Persona } from '../../datasource/persona.interface';

@Component({
  selector: 'app-tablapersonas',
  templateUrl: './tablapersonas.component.html'
})
export class TablapersonasComponent {

  dataPersonas: Persona[] = lpersona;

  funcionExample() {
    this.dataPersonas.toString();
  }

  funcionPersona(persona: Persona) {
    console.log(persona);
  }

  funcionEliminar(persona: any) {
    alert('Hola');
  }
}
