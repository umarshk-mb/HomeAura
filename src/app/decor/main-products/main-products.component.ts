import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category-loader.service';
import { map, Observable } from 'rxjs';
import { DecorData } from '../../models/decor-model';

@Component({
  selector: 'app-main-products',
  standalone: true,
  imports: [],
  templateUrl: './main-products.component.html',
  styleUrl: './main-products.component.scss'
})
export class MainProductsComponent implements OnInit {
  products?: DecorData[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().then(data => {
      this.products = data;
    })
  }
}
