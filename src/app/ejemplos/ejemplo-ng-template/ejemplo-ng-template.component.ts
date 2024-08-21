import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-ng-template',
  templateUrl: './ejemplo-ng-template.component.html'
})
export class EjemploNgTemplateComponent {


  valorSaludo = 'Salu1';

  cambiarSaludo(){
    if(this.valorSaludo === 'Salu1'){
      this.valorSaludo = 'Salu2';
    } else {
      this.valorSaludo = 'Salu1';
    }
  }

}
