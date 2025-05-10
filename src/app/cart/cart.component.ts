import { Component, OnInit } from '@angular/core';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { Store } from '@ngrx/store';
import { IProductState } from '../state/cart.state';
import { IProductData } from '../models/products.model';
import * as cartSelector from '../state/cart.selector';
import * as cartActions from '../state/cart.actions';
import { RouterLink } from '@angular/router';
import { QuantityComponent } from './quantity/quantity.component';
import { PriceFormatPipe } from '../currency-formatter.pipe';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [OrderSummaryComponent, RouterLink, QuantityComponent, PriceFormatPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  items: IProductData[] = [];
  hasItems?: number;

  constructor(private store: Store<{ item: IProductState }>) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  private loadProducts(): void {
    this.store.select(cartSelector.cartItems).subscribe((item) => {
      this.items = item
      this.hasItems = this.items.length
    });
  }

  removeItem(id: string): void {
    this.store.dispatch(cartActions.removeItem({
      itemId: id
    }))
  }
}
