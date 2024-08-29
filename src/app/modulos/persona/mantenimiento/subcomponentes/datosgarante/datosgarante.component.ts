import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datosgarante',
  templateUrl: './datosgarante.component.html',
  styles: ``
})
export class DatosgaranteComponent implements OnInit {
  
  /*nombreGarante: string = '';

  relacionGarante: string = ''*/

  constructor(private frmBuilder: FormBuilder){}

  frmGroupDatosGaranteRx!: FormGroup;

  ngOnInit(): void {
    this.frmGroupDatosGaranteRx = this.initForm();
  }

  guardarDatosGarante(){
    let datosGarante = this.frmGroupDatosGaranteRx.value;
    console.log(datosGarante);
  }

  initForm(): FormGroup {
    return this.frmBuilder.group({
      // funcionalidad de un atributo perteneciente a un formulario reactivo
      // nombreAtributoFrmReactivo: [<Valor inicial>, [...Validadors]]
      nombreGarante: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      relaciongarante: ['Ninguna', [Validators.required, Validators.minLength(7), Validators.max(20)]]
    });
  }


}
