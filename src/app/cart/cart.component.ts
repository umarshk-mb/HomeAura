import { Component, OnInit } from '@angular/core';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { Store } from '@ngrx/store';
import { IProductState } from '../state/cart.state';
import { Products } from '../models/products.model';
import * as cartSelector from '../state/cart.selector';
import * as cartActions from '../state/cart.actions';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [OrderSummaryComponent, AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  items?: Observable<Products[]>;
  hasItems?: number;

  constructor(private store: Store<{ item: IProductState }>) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  private loadProducts(): void {
    this.items = this.store.select(cartSelector.cartItems);

    this.items.subscribe((res) => {
      this.hasItems = res.length
    });
  }

  removeItem(discardItem: Products): void {
    this.store.dispatch(cartActions.removeItem({
      item: discardItem
    }))
  }
}
