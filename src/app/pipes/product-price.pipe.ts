import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPrice',
  standalone: true
})
export class ProductPricePipe implements PipeTransform {

  transform(quantity : any, price : number): number {
    return quantity * price;
  }

}
