import { Action, createReducer, on } from "@ngrx/store";
import { IProductState } from "./cart.state";
import * as CartActions from '../state/cart.actions'

export const initialState: IProductState = {
    product: [],
    isLoading: false
}

const _reducer = createReducer(
    initialState,

    on(CartActions.addItem, (state, { item }) => {
        const existingItem = state.product.find((i) => i.id === item.id);

        if (existingItem) {
            return {
                ...state,
                product: state.product.map((i) => {
                    if (i.id === item.id) {
                        return {
                            ...item,
                            count: i.count + 1
                        }
                    }
                    return i
                })
            }
        } else {
            return {
                ...state,
                product: [...state.product, { ...item, count: 1 }]
            }
        }
    }),

    on(CartActions.removeItem, (state, { itemId }) => ({
        ...state,
        product: state.product.filter((x) => x.id !== itemId),
    })),

    on(CartActions.increament, (state, { itemId }) => ({
        ...state,
        product: state.product.map((i) => i.id === itemId ? { ...i, count: i.count + 1 } : i)
    })),

    on(CartActions.decreament, (state, { itemId }) => ({
        ...state,
        product: state.product.map((i) => i.id === itemId ? { ...i, count: i.count - 1 } : i)
    }))
)

export function cartReducer(state = initialState, actions: Action): IProductState {
    return _reducer(state, actions)
}