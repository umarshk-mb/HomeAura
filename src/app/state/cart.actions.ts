import { createAction, props } from "@ngrx/store";
import { IProductData } from "../models/products.model";

export const addItem = createAction('[cart] Add item', props<{ item: IProductData }>());
export const removeItem = createAction('[cart] Remove item', props<{ item: IProductData }>());