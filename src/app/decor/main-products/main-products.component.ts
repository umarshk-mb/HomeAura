import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category-loader.service';
import { Observable } from 'rxjs';
import { DecorCategories } from '../../models/decor-model';
import { AsyncPipe } from '@angular/common';
import { error } from 'console';

@Component({
  selector: 'app-main-products',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './main-products.component.html',
  styleUrl: './main-products.component.scss'
})
export class MainProductsComponent implements OnInit {

  mainCategories?: Observable<DecorCategories[]>;
  // errorMessage: string | null = null; // comes from interceptor, need to add error component.

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.mainCategories = this.categoryService.getCategories()
  };
};
