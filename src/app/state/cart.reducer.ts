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

    on(CartActions.removeItem, (state, { item }) => ({
        ...state,
        product: state.product.filter((x) => x._id !== item._id),
    }))
)

export function cartReducer(state = initialState, actions: Action): IProductState {
    return _reducer(state, actions)
}