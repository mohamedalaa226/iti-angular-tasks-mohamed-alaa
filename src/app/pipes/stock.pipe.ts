import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value>0 ?'in stock':'out of stock';
  }
}
