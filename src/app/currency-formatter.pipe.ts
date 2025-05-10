import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'priceFormat', pure: true, standalone: true })
export class PriceFormatPipe implements PipeTransform {
    // priceFormat(value: number): string {
    //     return "₹ " + value.toLocaleString('en-IN')
    // }
    transform(value: number): string {
        return "₹ " + value.toLocaleString('en-IN')
    }
}