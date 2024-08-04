import { Injectable } from "@angular/core";
import { DecorData } from "./models/decor-model";
import { categoryData } from "./category-api-mock";

@Injectable({ providedIn: 'root' })
export class CategoryService {

  getCategories(): Promise<DecorData[]> {
    return new Promise((resolve, reject) => {
      resolve(categoryData());
      reject(() => {
        console.log('Fetching category data error')
      });
    });
  };
}
