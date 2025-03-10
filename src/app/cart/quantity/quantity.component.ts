import { Component, Input, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProductState } from '../../state/cart.state';
import { IProductData } from '../../models/products.model';
import * as cartActions from '../../state/cart.actions';

@Component({
  selector: 'ha-quantity',
  standalone: true,
  imports: [],
  templateUrl: './quantity.component.html',
  styleUrl: './quantity.component.scss'
})
export class QuantityComponent {
  @Input() product?: IProductData;

  constructor(private store: Store<{ item: IProductState }>) { }

  increament() {
    if (this.product) {
      this.store.dispatch(cartActions.increament({
        itemId: this.product.id
      }));
    }
  }

  decreament() {
    if (this.product) {
      if (this.product.count > 1) {
        this.store.dispatch(cartActions.decreament({
          itemId: this.product.id
        }));
      } else {
        this.store.dispatch(cartActions.removeItem({ itemId: this.product.id }));
      }
    }
  }
}
