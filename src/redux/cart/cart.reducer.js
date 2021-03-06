import cartActionTypes from "./cart.types";
import {addItemToCart, decreaseQuantCartItem, removeItemfromCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

 const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_CART_ITEM:
            return{
                ...state, 
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case cartActionTypes.REMOVE_CART_ITEM:
            return{
                ...state, 
                cartItems: state.cartItems.filter(cartItem => cartItem.id != action.payload.id)
            }
        case cartActionTypes.DECREASE_QUANTITY_CART_ITEM:
             return{
                 ...state, 
                 cartItems: decreaseQuantCartItem(state.cartItems, action.payload)
             }

        default: 
            return state;
    }
}

export default cartReducer;
