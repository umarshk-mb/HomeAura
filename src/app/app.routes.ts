import { Routes } from '@angular/router';
import { DecorComponent } from './decor/decor.component';

export const routes: Routes = [
  {
    path: 'decor',
    component: DecorComponent
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
