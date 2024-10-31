import { Products } from "../models/products.model";

export interface IProductState {
    product: Products[];
    isLoading: boolean;
}