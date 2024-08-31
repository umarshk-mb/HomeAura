import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category-loader.service';
import { Observable } from 'rxjs';
import { DecorCategories } from '../../models/decor-model';
import { error } from 'console';

@Component({
  selector: 'app-main-products',
  standalone: true,
  imports: [],
  templateUrl: './main-products.component.html',
  styleUrl: './main-products.component.scss'
})
export class MainProductsComponent implements OnInit {

  mainCategories?: DecorCategories[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.mainCategories = data;
    },
      (error) => {
        console.log('Get categoies', error);
      })
  }
}
