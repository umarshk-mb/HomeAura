import { HostBinding } from '@angular/core';
import { Component } from '@angular/core';
import { IProductData } from '../../../models/products.model';
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
  product: IProductData = {} as IProductData;
  imgPath = 'assets/close.jpg';

  isItemAdded = false;
  @HostBinding('class.popup-opened') isVisible = false;

  constructor(private store: Store<{ item: IProductState }>) { }

  open(product: IProductData) {
    this.isVisible = true;
    this.product = product;
  }

  close() {
    this.isVisible = !this.isVisible;
    this.isItemAdded = this.isVisible;
  }

  addItem(product: IProductData): void {
    this.store.dispatch(CartActions.addItem({
      item: product,
    }));

    this.isItemAdded = !this.isItemAdded;
  }

}
