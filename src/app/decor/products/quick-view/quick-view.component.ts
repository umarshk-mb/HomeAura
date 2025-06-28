import { HostBinding, Input, signal, WritableSignal } from '@angular/core';
import { Component } from '@angular/core';
import { IProductData } from '../../../models/products.model';
import { Store } from '@ngrx/store';
import { IProductState } from '../../../state/cart.state';
import * as CartActions from '../../../state/cart.actions';
import { ProductCommon } from '../product-common.service';
import { PriceFormatPipe } from '../../../currency-formatter.pipe';

@Component({
  selector: 'app-quick-view',
  standalone: true,
  templateUrl: './quick-view.component.html',
  styleUrl: './quick-view.component.scss',
  imports: [PriceFormatPipe]
})
export class QuickViewComponent {
  @Input() quickViewProduct = {} as IProductData;
  imgPath = 'assets/close.jpg';

  isItemAdded = false;
  constructor(private store: Store<{ item: IProductState }>, private productCommon: ProductCommon) { }

  close() {
    this.isItemAdded = this.productCommon.qucikViewEnable();
    this.productCommon.qucikViewEnable.update((toggle) => !toggle);
  }

  addItem(product: IProductData): void {
    this.store.dispatch(CartActions.addItem({
      item: product,
    }));

    this.isItemAdded = !this.isItemAdded;
  }

}
