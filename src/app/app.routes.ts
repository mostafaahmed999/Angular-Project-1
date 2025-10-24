import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { FavoriteProduct } from './components/favorite-product/favorite-product';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { ProductCart } from './components/product-cart/product-cart';
import { ProductDetails } from './components/product-details/product-details';
import { ProductList } from './components/product-list/product-list';
import { Login } from './components/login/login';



export const routes: Routes = [
  {path: '',redirectTo: 'product-list',pathMatch:'full'},
  {path: 'product-list', component: ProductList },
  {path: 'product-cart', component: ProductCart },
  {path: 'favorite-product', component: FavoriteProduct },
  {path: 'product-details/:id', component: ProductDetails, canActivate: [authGuard] },
  // {path: 'login', loadComponent: () => import('./components/login/login').then(m => m.Login)},
    { path: 'login', component: Login },
  {path: '**', component: NotFoundComponent}
];
