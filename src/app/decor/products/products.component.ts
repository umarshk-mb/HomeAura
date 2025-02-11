import { IProductData, Products } from '../../models/products.model';
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
  decorProducts: IProductData[] = [];
  productType: string = 'Lighting'; // has to be updates
  enableQuickView = false;

  @ViewChild('quickView') quickView!: QuickViewComponent;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.decorProducts = products;
      // this.productType = products[0].type;
    });
  }

  openQuickView(product: IProductData) {
    this.enableQuickView = true
    this.quickView.open(product)
  }

  addToFav(): void {
    console.log('added')
  }
}
