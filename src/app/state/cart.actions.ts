import { createAction, props } from "@ngrx/store";
import { Products } from "../models/products.model";

export const addItem = createAction('[cart] Add item', props<{ item: Products }>());
export const removeItem = createAction('[cart] Remove item', props<{ item: Products }>());