import { Component } from '@angular/core';

@Component({
  selector: 'app-datospago',
  templateUrl: './datospago.component.html',
  styles: ``
})
export class DatospagoComponent {

  guardarDatosPago() {
    
  }

  /**
   * 1. Construir un módulo para el ingreso de productos a un inventario
   * 1.1. El módulo manejará los siguientes procesos <-> componentes
   * - Datos del producto: Nombre, tipo (Electrodoméstico, técnología, varios), descripción y datos adicionales 
   * - Datos de precio (Precio unitario, aplica IVA, aplica descuento, descuento y PVP)
   * - Datos de proveedor (Nombre proveedor, descripcion proveedor, precio proveedor)
   * 
   * 1.2 El módulo debe validar que el precio unitario y el precio del proveedor sean el mismo -> 
   * Validación se realiza a nivel de componente padre
   * 1.3 El descuento no puede ser 0% ni mayor al 8% -> 
   * Validación que se realiza a nivel de componente
   * 
   */
}
