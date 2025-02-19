import { Component, Input, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProductState } from '../../state/cart.state';
import { IProductData } from '../../models/products.model';

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

  increament() { }
  decreament() { }
}
