import React from 'react';
import { connect } from 'react-redux';
import { addCartItem, decreaseQuantityCartItem, removeCartItem } from '../../redux/cart/cart.action';

import './checkout-item.styles.scss'

const CheckoutItem = ({item, totalPrice,dispatch}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={item.imageUrl} alt="item"></img>
        </div>
       <div className="name"> {item.name}</div>
       <div className="quantity">
           <span className="left-arrow" onClick={() => dispatch(decreaseQuantityCartItem(item))}>&#10094;</span>
           <span className="value">{item.quantity} </span>
           <span className="right-arrow" onClick={() => dispatch(addCartItem(item))}>&#10095;</span>
       </div>
        <div className="price">${item.price * item.quantity} </div>
        <div className="remove-button" onClick={() => dispatch(removeCartItem(item))}><span>&#10006;</span></div>
    </div>
)

const mapStatetoProps = state => ({
    cartItems: state.cart.cartItems
});

// const mapDispatchtoProps = state => ({
//     removeCartItem: 
// })

export default connect(mapStatetoProps)(CheckoutItem);