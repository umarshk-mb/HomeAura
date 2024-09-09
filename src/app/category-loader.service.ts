import { Injectable } from "@angular/core";
import { DecorCategories } from "./models/decor-model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CategoryService {

    private api: string = 'http://localhost:3000/categories';
    constructor(private http: HttpClient) { }

    getCategories(): Observable<DecorCategories[] | string> {
        return this.http.get<DecorCategories[]>(this.api).pipe(
            catchError(this.handleError)
        )
    }

    private handleError(error: HttpErrorResponse): Observable<string> {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${error.error.message}`;
        } else {
            errorMessage = `Server returned with ${error.status}, errot message: ${error.message}`
        }
        console.log(errorMessage);

        return throwError(() => new Error('Something went wrong, please try again'));
    }
}
