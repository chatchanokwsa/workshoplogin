import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterData = '';

  constructor() {}

  ngOnInit(): void {
    const p1 = new Product('01', '01 name', 1000.0);
    const p2 = new Product('02', '02 name', 2000.0);
    const p3 = new Product('03', '03 name', 3000.0);

    this.products.push(p1, p2, p3);
  }
}
