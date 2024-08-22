import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botones-tabla',
  templateUrl: './botones-tabla.component.html'
})
export class BotonesTablaComponent {

  @Input()
  estiloBtn1: string = 'primary';

  @Input()
  labelBtn1: string = 'Aceptar';

  @Input()
  estiloBtn2: string = 'danger';

  @Input()
  labelBtn2: string = 'Borrar';

  @Input()
  dataRegistro: any;

  @Output() eventoBtn1 = new EventEmitter<any>();

  @Output() eventoBtn2 = new EventEmitter<any>();

  fnEventoBtn1(){
    this.eventoBtn1.emit(this.dataRegistro);
  }

  fnEventoBtn2(){
    this.eventoBtn2.emit(this.dataRegistro);
  }
}
