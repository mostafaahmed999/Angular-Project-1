import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { authGuard } from './guards/auth-guard';
import { FavoriteProduct } from './favorite-product/favorite-product';
import { ProductCart } from './product-cart/product-cart';


export const routes: Routes = [
  {path: '',redirectTo: 'product-list',pathMatch:'full'},
  {path: 'product-list', component: ProductList },
  {path: 'product-cart', component: ProductCart },
  {path: 'favorite-product', component: FavoriteProduct },
  {path: 'product-details/:id', component: ProductDetails, canActivate: [authGuard] },
  {path: 'login', loadComponent: () => import('./login/login').then(m => m.Login)},
  {path: '**', component: NotFoundComponent}
];
