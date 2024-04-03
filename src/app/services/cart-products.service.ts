import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartProductsService {
  arr : any = []
  private cartProducts = new BehaviorSubject(this.arr)
  constructor() { }

  getCartProduct(){
    return this.cartProducts.asObservable();
  }

  updateProducts(e : any){
    if(!this.arr.find((f:any) => f === e)){
      this.arr.push(e)
    }
    this.cartProducts.next(this.arr)
  }

  deleteProduct(prdct: any) {
    this.arr = this.arr.filter((f : any)=> f.id != prdct.id)
    console.log(this.arr)
    this.cartProducts.next(this.arr)
  }
}