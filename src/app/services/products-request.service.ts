import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsRequestService {

  constructor(private http : HttpClient) { }

  getProductsApi()   {
    return this.http.get('https://dummyjson.com/products');
  }
  getOneProductApi(id? : any | undefined)   {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
