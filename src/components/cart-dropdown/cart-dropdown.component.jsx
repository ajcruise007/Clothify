import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            
        </div>
        <CustomButton value="Go to Checkout"/>
    </div>
);

export default CartDropdown;