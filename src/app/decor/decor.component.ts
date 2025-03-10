import { Component } from '@angular/core';
import { MainProductsComponent } from './main-products/main-products.component';

enum DecorCategory {
  TOP = 'Top Categories'
}

@Component({
  selector: 'app-decor',
  standalone: true,
  imports: [MainProductsComponent],
  templateUrl: './decor.component.html',
  styleUrl: './decor.component.scss'
})
export class DecorComponent {

  topCategories = DecorCategory.TOP;
}
