import { Action, createReducer, on } from "@ngrx/store";
import { IProductState } from "./cart.state";
import * as CartActions from '../state/cart.actions'

export const initialState: IProductState = {
    product: [],
    isLoading: false
}

const _reducer = createReducer(
    initialState,

    on(CartActions.addItem, (state, { item }) => ({
        ...state,
        product: [...state.product, item],
        isLoading: true
    })),
)

export function cartReducer(state = initialState, actions: Action): IProductState {
    return _reducer(state, actions)
}