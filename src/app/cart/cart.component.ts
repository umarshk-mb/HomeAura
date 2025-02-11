import { Component, OnInit } from '@angular/core';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { Store } from '@ngrx/store';
import { IProductState } from '../state/cart.state';
import { IProductData } from '../models/products.model';
import * as cartSelector from '../state/cart.selector';
import * as cartActions from '../state/cart.actions';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [OrderSummaryComponent, AsyncPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  items?: Observable<IProductData[]>;
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

  removeItem(discardItem: IProductData): void {
    this.store.dispatch(cartActions.removeItem({
      item: discardItem
    }))
  }
}
