import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map((item) => (<CartItem key={item.id} item={item}></CartItem>))}
        </div>
        <CustomButton value="Go to Checkout"/>
    </div>
);

const mapStatetoProps = (state) => ({
    cartItems : state.cart.cartItems
})

export default connect(mapStatetoProps)(CartDropdown);