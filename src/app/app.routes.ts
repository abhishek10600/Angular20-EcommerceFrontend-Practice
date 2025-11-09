import { Routes } from '@angular/router';
import ProductsGrid from './pages/products-grid/products-grid';
import MyWishlist from './pages/my-wishlist/my-wishlist';
import { ViewCart } from './pages/view-cart/view-cart';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "products/all"
    },
    {
        path: "products/:category",
        loadComponent: ()=> ProductsGrid
    },
    {
        path: "wishlist",
        loadComponent: ()=> MyWishlist
    },
    {
        path: "cart",
        loadComponent: ()=> ViewCart
    }
];
