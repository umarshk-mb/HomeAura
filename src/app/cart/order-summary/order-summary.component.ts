import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { IProductState } from '../../state/cart.state';
import * as cartSelector from '../../state/cart.selector';
import { IProductData } from '../../models/products.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'ha-order-summary',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent implements OnInit {
  subTotal: number = 0; total: number = 0;

  constructor(private store: Store<{ product: IProductState }>) { }

  ngOnInit(): void {
    this.calculatePrice();
  }

  calculatePrice(): void {
    this.store.select(cartSelector.cartItems).subscribe((products) => {
      products.forEach((product) => {
        this.subTotal += product.price;
        console.log(product.price);

      })
    })
  }
}
