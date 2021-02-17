import { createStore } from 'redux';
import {createSelector} from 'reselect';

// input selector
const selectCart = state => state.cart;

// output selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems 
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>  cartItems.reduce((accumulatedValue, cartItem) =>  accumulatedValue + cartItem.quantity, 0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price, 0)
)