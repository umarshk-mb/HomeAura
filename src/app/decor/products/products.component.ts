import { IProductData } from '../../models/products.model';
import { ProductService } from './../../product-loader.service';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { ProductCommon } from './product-common.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [QuickViewComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  decorProducts: IProductData[] = [];
  productType: string = 'Lighting'; // has to be updated
  quickViewProduct = {} as IProductData;
  quickViewEnabled: WritableSignal<boolean> = signal(false);

  constructor(private productService: ProductService, private productCommon: ProductCommon) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.decorProducts = products;
    });
    this.quickViewEnabled = this.productCommon.qucikViewEnable;
  }

  openQuickView(product: IProductData) {
    this.productCommon.qucikViewEnable.update((toggle) => !toggle);
    this.quickViewProduct = product;
  }

  addToFav(): void {
    console.log('added')
  }
}
