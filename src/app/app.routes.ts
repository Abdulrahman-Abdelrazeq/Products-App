import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {
        path: "",
        component: ProductsListComponent,
        title: "Products App"
    },
    {
        path: "product-details/:id",
        component: ProductDetailsComponent,
        title: "Product Details"
    },
    {
        path: "register",
        component: RegisterComponent,
        title: "Register"
    },
    {
        path: "login",
        component: LoginComponent,
        title: "Login"
    },
    {
        path: "cart",
        component: CartComponent,
        title: "Cart"
    },
    {
        path: "**",
        component: ErrorComponent,
        title: "Error 404"
    },

];
