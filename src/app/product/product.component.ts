import { Component , Input } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { DiscountPipe } from '../pipes/discount.pipe';
import { CartProductsService } from '../services/cart-products.service';
import { StockPipe } from '../pipes/stock.pipe';
import { RatingPipe } from '../pipes/rating.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgClass, RouterLink, DiscountPipe, CurrencyPipe, StockPipe, RatingPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
@Input() product : any;

  constructor(private router : Router, private addProductsToCart : CartProductsService) {

  }
  goToDetails(id : string){
    this.router.navigate(['product-details', id])
  }
  addThisToCart() {
    this.addProductsToCart.updateProducts(this.product)
  }
}
