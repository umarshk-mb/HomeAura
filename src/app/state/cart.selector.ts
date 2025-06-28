import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProductState } from "./cart.state";


const cartState = createFeatureSelector<IProductState>('cart');
export const isloading = createSelector(cartState, (state) => state.isLoading);
export const cartItems = createSelector(cartState, (state) => state.product);
export const subTotal = createSelector(cartState, (state) => state.subTotal) ;