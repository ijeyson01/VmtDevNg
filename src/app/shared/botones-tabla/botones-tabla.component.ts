import { Component, Input } from '@angular/core';

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


}
