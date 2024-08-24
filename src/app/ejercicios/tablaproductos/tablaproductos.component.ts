import { Component } from '@angular/core';
import { ProductDetail } from '../../datasource/productdetail.interface';
import { listaproducto } from '../../datasource/dataejemplo';

@Component({
  selector: 'app-tablaproductos',
  templateUrl: './tablaproductos.component.html'
})
export class TablaproductosComponent {

   lproductos: ProductDetail[] = listaproducto;

   
}
