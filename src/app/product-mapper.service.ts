import { Injectable } from "@angular/core";
import { IProductData, Products } from "./models/products.model";

@Injectable({ providedIn: 'root' })
export class ProductFactory {
    toModel(model: Products[]): IProductData[] {
        return model.map((item) => {
            return this.mapModel(item)
        })
    }

    mapModel(product: Products): IProductData {
        const item = <IProductData>{}
        item.id = product._id;
        item.desc = product.description;
        // item.availableItems = product.availableItems;
        item.image = product.image;
        item.price = product.price;
        item.count = 0;
        return item
    }
}