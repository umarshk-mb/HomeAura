import { Products } from '../../models/products.model';
import { ProductService } from './../../product-loader.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { QuickViewComponent } from './quick-view/quick-view.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [QuickViewComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  decorProducts: Products[] = [];
  productType: string = 'Lighting';

  @ViewChild('quickView') quickView!: QuickViewComponent;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.decorProducts = products
    });
  }

  openQuickView(product: Products) {
    this.quickView.open(product)
  }
}
