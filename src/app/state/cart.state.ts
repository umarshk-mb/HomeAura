import { IProductData } from "../models/products.model";

export interface IProductState {
    product: IProductData[];
    isLoading: boolean;
    subTotal: number;
}