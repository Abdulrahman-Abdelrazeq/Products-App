import { Component, Input } from '@angular/core';
import { CartProductsService } from '../services/cart-products.service';
import { DiscountPipe } from '../pipes/discount.pipe';
import { CurrencyPipe } from '@angular/common';
import { ProductPricePipe } from '../pipes/product-price.pipe';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DiscountPipe, CurrencyPipe, ProductPricePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  productsCart : any;

  allPrice : any = 0;
  constructor(private productsForCart : CartProductsService){}


  ngOnInit(){
    this.productsForCart.getCartProduct().subscribe(reseive => this.productsCart = reseive);
    this.allPrice = 0
    for (let i = 0; i < this.productsCart.length; i++) {
      this.allPrice += this.productsCart[i]["price"]
    }
  }

  deleteThisProduct(dp:any){
    this.productsForCart.deleteProduct(dp)
    this.allPrice = 0
    for (let i = 0; i < this.productsCart.length; i++) {
      this.allPrice += this.productsCart[i]["price"]
    }
  }

  quantityPlus(prdct:any, p:any) {
    if(prdct.stock > p.value){
      ++p.value
      this.allPrice += prdct.price
    }
  }
  quantityMinus(prdct:any, m:any) {
    if(m.value > 1) {
      --m.value
      this.allPrice -= prdct.price
    }
  }

}
