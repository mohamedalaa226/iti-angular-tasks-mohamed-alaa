import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock2'
})
export class Stock2Pipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value>0 ?'in stock':'out of stock';
  }

}
