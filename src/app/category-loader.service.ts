import { Injectable } from "@angular/core";
import { DecorCategories } from "./models/decor-model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CategoryService {

    private api: string = 'http://localhost:3000/categories';
    constructor(private http: HttpClient) { }

    getCategories(): Observable<DecorCategories[]> {
        return this.http.get<DecorCategories[]>(this.api)
    }
}
