import { Routes } from '@angular/router';
import { DecorComponent } from './decor/decor.component';
import { ProductsComponent } from './decor/products/products.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path: 'decor',
    component: DecorComponent
  },
  {
    path: 'decor/:type',
    component: ProductsComponent
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '',
    redirectTo: 'decor',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];
