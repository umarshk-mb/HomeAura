import { Component } from '@angular/core';
import { MainProductsComponent } from './main-products/main-products.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-decor',
  standalone: true,
  imports: [MainProductsComponent, RouterOutlet],
  templateUrl: './decor.component.html',
  styleUrl: './decor.component.scss'
})
export class DecorComponent {

  focus = 'Top Category'
}
