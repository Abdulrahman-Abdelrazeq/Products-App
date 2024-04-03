import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock',
  standalone: true
})
export class StockPipe implements PipeTransform {

  transform(prdctStock : number): string {
    if(prdctStock == 0) {
      return 'text-bg-danger';
    }else{
      return 'text-bg-success';
    }
  }

}
