import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { IProductState } from '../../state/cart.state';
import * as cartSelector from '../../state/cart.selector';
import { PriceFormatPipe } from '../../currency-formatter.pipe';

@Component({
  selector: 'ha-order-summary',
  standalone: true,
  imports: [RouterLink, PriceFormatPipe],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent implements OnInit{
  subTotal = 0 
  estimates = 5
  totalAmount = 0
  

  constructor(private store: Store<{ product: IProductState }>) { }

  ngOnInit(): void {
    this.calculatePrice();
  }

  calculatePrice(): void {
    this.store.select(cartSelector.subTotal).subscribe((subTotal) => {
      this.subTotal = subTotal
      this.totalAmount = this.estimates + this.subTotal
    });
  }
}
