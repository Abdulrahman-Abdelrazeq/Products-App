import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as data from '../products-list.json';
import { CurrencyPipe, NgClass } from '@angular/common';
import { DiscountPipe } from '../pipes/discount.pipe';
import { Product } from '../interface/product';
import { ProductsRequestService } from '../services/products-request.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgClass, DiscountPipe, CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  // products : Array<Product> = data.default;
  product : any;
  // filteredProducts : any;

  @Input () id? : string;

  constructor(private activatedRoute : ActivatedRoute, private router : Router, private oneProduct : ProductsRequestService){}

  ngOnInit(){
    
    // let productId = this.activatedRoute.snapshot.params['id']
    
    // this.filteredProducts = this.products.find((p:any ) => p.id == this.id)
    // console.log(this.filteredProducts)

    this.oneProduct.getOneProductApi(this.id).subscribe((res : any) => this.product =  res, err => console.log(err))

    // if(!this.product) {
    //   this.router.navigate(['/'])
    // }
  }
}
