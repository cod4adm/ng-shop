import { Pipe, PipeTransform } from '@angular/core';
import {Product} from './interfaces';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(products: Product[], type = ''): unknown {
    if (type === 'All') {
      return products;
    }
    return products.filter(product => {
      return product.type === type;
    });
  }

}
