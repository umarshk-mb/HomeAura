import { Action, createReducer, on } from "@ngrx/store";
import { IProductState } from "./cart.state";
import * as CartActions from '../state/cart.actions'
import { IProductData } from "../models/products.model";

export const initialState: IProductState = {
    product: [],
    isLoading: false,
    subTotal: 0
}

const _reducer = createReducer(
    initialState,

    on(CartActions.addItem, (state, { item }) => {
        const existingItem = state.product.find((i) => i.id === item.id);

        if (existingItem) {
            return {
                ...state,
                subTotal: subTotal(state, existingItem.id),
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
                subTotal: subTotal(state, '', '', item),
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
        product: state.product.map((i) => i.id === itemId ? { ...i, count: i.count + 1 } : i),
        subTotal: subTotal(state, itemId, 'increament'),
    })),

    on(CartActions.decreament, (state, { itemId }) => ({
        ...state,
        product: state.product.map((i) => i.id === itemId ? { ...i, count: i.count - 1 } : i),
        subTotal: subTotal(state, itemId, 'decreament')
    }))
)

export function cartReducer(state = initialState, actions: Action): IProductState {
    return _reducer(state, actions)
}

function subTotal(state: IProductState, id: string, type?: string, products?: IProductData): number {
    let product = state.product.find((i) => i.id === id)
    let cost = !!product ? state.subTotal : products?.price! + state.subTotal

    if(type === 'increament') {
        cost += product?.price!
    } else if ( type === 'decreament') {
        cost = cost - product?.price!
    }
    return cost
}