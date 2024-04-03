import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import * as data from '../products-list.json';
import { Product } from '../interface/product';
import { ProductsRequestService } from '../services/products-request.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  // products : Array<Product> = data.default;

  products : any;

  constructor(private productRequest :  ProductsRequestService) {}
  ngOnInit() {
    this.productRequest.getProductsApi().subscribe((res : any) => this.products = res.products, (error) => console.log(error));
  }

}
