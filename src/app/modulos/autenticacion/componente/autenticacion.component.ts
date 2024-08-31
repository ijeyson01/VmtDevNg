import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MiprimercomponenteComponent } from './subcomponentes/miprimercomponente/miprimercomponente.component';
import { RegistrousuarioComponent } from './subcomponentes/registrousuario/registrousuario.component';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  providers: [Router]
})
export class AutenticacionComponent {
  
  constructor(private router: Router){
  }

  @ViewChild(MiprimercomponenteComponent, {static: false}) 
  miPrimerComponente!: MiprimercomponenteComponent;

  @ViewChild(RegistrousuarioComponent, { static: false })
  registroUsuario!: RegistrousuarioComponent;

  private mailUsuario: string = 'vmtdev@mail.com';

  private passUsuario: string = '123456.';

  pantallaPresentacion: string = 'LOGIN';

  mailDefecto = 'cliente@mail.com'

  toggleAutentication(dataCambio: string) {
    this.pantallaPresentacion = dataCambio;
  }

  login() {
    if(this.miPrimerComponente.emailusuario === this.mailUsuario){
      if(this.miPrimerComponente.passwordusuario === this.passUsuario){
        this.router.navigate(['/creacion']);

      } else {
        window.alert("Contrasenia incorrecta");
      }
    } else {
      window.alert("Usuario incorrecto");
    }
    

  }
}
