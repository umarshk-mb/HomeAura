import { Component } from '@angular/core';
import { Products } from '../../../models/products.model';

@Component({
  selector: 'app-quick-view',
  standalone: true,
  imports: [],
  templateUrl: './quick-view.component.html',
  styleUrl: './quick-view.component.scss'
})
export class QuickViewComponent {
  isVisible = false;
  product: Products = {} as Products
  imgPath = 'assets/close.jpg'

  open(product: Products) {
    this.isVisible = true;
    this.product = product;
  }

  close() {
    this.isVisible = false
  }
}
