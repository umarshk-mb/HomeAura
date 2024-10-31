import { createAction, props } from "@ngrx/store";
import { Products } from "../models/products.model";

export const addItem = createAction('[cart] Add item', props<{ item: Products }>());