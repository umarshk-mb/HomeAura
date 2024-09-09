import { Component } from '@angular/core';
import { MainProductsComponent } from './main-products/main-products.component';
import { RouterOutlet } from '@angular/router';

enum DecorCategory {
  TOP = 'Top Categories'
}

@Component({
  selector: 'app-decor',
  standalone: true,
  imports: [MainProductsComponent, RouterOutlet],
  templateUrl: './decor.component.html',
  styleUrl: './decor.component.scss'
})
export class DecorComponent {

  first_focus = DecorCategory.TOP;
}
