import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category-loader.service';
import { Observable, pipe, switchMap } from 'rxjs';
import { DecorCategories } from '../../models/decor-model';
import { AsyncPipe } from '@angular/common';
import { error } from 'console';
import { Router } from '@angular/router';
import { ProductService } from '../../product-loader.service';

@Component({
  selector: 'main-products',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './main-products.component.html',
  styleUrl: './main-products.component.scss'
})
export class MainProductsComponent implements OnInit {

  mainCategories?: Observable<DecorCategories[]>;
  // errorMessage: string | null = null; // comes from interceptor, need to add error component.

  constructor(private categoryService: CategoryService, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.mainCategories = this.categoryService.getCategories()
  };

  productNavigate(type: string) {
    this.router.navigate(['/decor', type]);
    this.productService.productType.next(type);
  }
};
