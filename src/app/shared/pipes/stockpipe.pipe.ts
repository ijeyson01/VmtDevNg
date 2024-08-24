import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockpipe'
})
export class StockpipePipe implements PipeTransform {

  transform(value: number, ...args: string[]): unknown {
    let valorStockpipe: string = '';
    let labelStock = args[0];
    switch (value){
      case 0: valorStockpipe = 'Sin '+ (labelStock + 's disponibles'); break;
      case 1: valorStockpipe = value +' '+   (labelStock+' disponible'); break;
      default: valorStockpipe =  value+' ' + (labelStock+'s disponibles'); break;
    }
    return valorStockpipe;
  }

}
