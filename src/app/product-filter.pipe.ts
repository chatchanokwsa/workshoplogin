import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product';
import { ProductListComponent } from './product-list/product-list.component';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: Product[], name: string): Product[] {
    return products.filter((p) => p.name.indexOf(name) != -1);
  }
}
