import { Injectable, signal, WritableSignal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ProductCommon {
    qucikViewEnable: WritableSignal<boolean> = signal(false);

    constructor() { }
}