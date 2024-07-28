import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'decor',
    pathMatch: 'full'
  },
  {
    path: 'decor',
    component: AppComponent
  },
];
