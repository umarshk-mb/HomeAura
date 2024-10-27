import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, switchMap, tap } from "rxjs";
import { Products } from "./models/products.model";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class ProductService {
    productType = new BehaviorSubject<string>('lighting')
    constructor(private httpClient: HttpClient) { }

    getProducts() {
        return this.productType.pipe(
            switchMap((type) => this.loadProducts(type))
        )
    }

    loadProducts(type?: string): Observable<Products[]> {
        return this.httpClient.get<Products[]>(`http://localhost:3000/products/${type}`)
    }
}