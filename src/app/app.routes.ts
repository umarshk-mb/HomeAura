import { Routes } from '@angular/router';
import { DecorComponent } from './decor/decor.component';
import { ProductsComponent } from './decor/products/products.component';
import { CartComponent } from './cart/cart.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AboutComponent } from './about/about.component';
import { FavoritesComponent } from './favorites/favorites.component';

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
    path: 'login',
    component: UserLoginComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent
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
