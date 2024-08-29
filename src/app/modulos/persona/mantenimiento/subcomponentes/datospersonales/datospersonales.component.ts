import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html'
})
export class DatospersonalesComponent {

  @ViewChild(NgForm, {static: false}) formDatosPersonales!: NgForm;

  primer_nombre: string = '';

  guardarDatosComponente(){
    
  }
  guardarDatosPersonales() {
    this.validar(this.formDatosPersonales);
  }

  validar(formDatosPersonales: NgForm){
    if(formDatosPersonales.valid){
      console.log('Se ha ingresado los datos personales satisfactoriamente');
    } else {
      alert('Error en los datos del formulario');
    }
  }

}
