import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, Subject, switchMap, tap } from "rxjs";
import { IProductData, Products } from "./models/products.model";
import { HttpClient } from "@angular/common/http";
import { ProductFactory } from "./product-mapper.service";

@Injectable({ providedIn: 'root' })
export class ProductService {
    productType = new BehaviorSubject<string>('lighting')
    constructor(private httpClient: HttpClient, private productFactory: ProductFactory) { }

    getProducts(): Observable<IProductData[]> {
        return this.productType.pipe(
            switchMap((type) => this.loadProducts(type))
        )
    }

    loadProducts(type?: string): Observable<IProductData[]> {
        return this.httpClient.get<Products[]>(`http://localhost:3000/products/${type}`).pipe(
            map((products) => this.productFactory.toModel(products))
        )
    }
}