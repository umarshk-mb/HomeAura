import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class DataFormat {
    constructor() { }

    priceFormat(value: number): string {
        return "₹" + value.toLocaleString('en-IN')
    }
}