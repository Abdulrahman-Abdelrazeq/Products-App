import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartProductsService } from './services/cart-products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count : any;
  constructor(private countProducts : CartProductsService){}
  ngOnInit() {
    this.countProducts.getCartProduct().subscribe(suc => this.count = suc.length)
  }
}
