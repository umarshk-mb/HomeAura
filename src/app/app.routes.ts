import { Routes } from '@angular/router';
import { DecorComponent } from './decor/decor.component';
import { ProductsComponent } from './decor/products/products.component';

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
    path: '',
    redirectTo: 'decor',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];
