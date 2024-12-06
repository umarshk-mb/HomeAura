import { ElementRef, Renderer2 } from '@angular/core';
import { Component } from '@angular/core';
import { Products } from '../../../models/products.model';
import { Store } from '@ngrx/store';
import { IProductState } from '../../../state/cart.state';
import * as CartActions from '../../../state/cart.actions';

@Component({
  selector: 'app-quick-view',
  standalone: true,
  templateUrl: './quick-view.component.html',
  styleUrl: './quick-view.component.scss',
})
export class QuickViewComponent {
  isVisible = false;
  product: Products = {} as Products;
  imgPath = 'assets/close.jpg';

  isItemAdded = false;

  constructor(private el: ElementRef, private renderer: Renderer2, private store: Store<{ item: IProductState }>) { }

  open(product: Products) {
    this.isVisible = true;
    this.product = product;
  }

  close() {
    this.isVisible = false
  }

  addItem(product: Products): void {
    this.store.dispatch(CartActions.addItem({
      item: product
    }));

    this.isItemAdded = !this.isItemAdded;
  }

}
