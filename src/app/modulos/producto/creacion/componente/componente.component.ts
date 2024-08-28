import { Component, ViewChild } from '@angular/core';
import { DatosproductoComponent } from './subcomponentes/datosproducto/datosproducto.component';
import { DatosprecioComponent } from './subcomponentes/datosprecio/datosprecio.component';
import { DatosproveedorComponent } from './subcomponentes/datosproveedor/datosproveedor.component';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html'
})
export class ComponenteComponent {

  @ViewChild(DatosproductoComponent) datosProdComponent!: DatosproductoComponent;
  @ViewChild(DatosprecioComponent) datosPrecioComponent!: DatosprecioComponent;
  @ViewChild(DatosproveedorComponent) datosProveedorComponent!: DatosproveedorComponent;

  guardar() {
    this.validarGuardar();
    this.datosProdComponent.guardar();
    this.datosPrecioComponent.guardar();
    this.datosProveedorComponent.guardar();
  }

  validarGuardar() {
    if(this.datosPrecioComponent.precioUnitario !== this.datosProveedorComponent.precioProveedor){
      alert('El precio unitario y el precio del proveedor deben ser iguales');
    }
  }

}
