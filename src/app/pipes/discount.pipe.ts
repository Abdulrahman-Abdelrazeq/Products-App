import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  transform(price: number, discountPercentage: number): number {
    if (price && discountPercentage) {
      const discountAmount = price * (discountPercentage / 100);
      return price - discountAmount;
    } else {
      return price; // Return original price if either value is missing
    }
  }

}
