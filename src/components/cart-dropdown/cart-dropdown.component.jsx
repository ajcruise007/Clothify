import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItem}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {/* {cartItem.map((item) => )} */}
        </div>
        <CustomButton value="Go to Checkout"/>
    </div>
);

const mapStatetoProps = (state) => ({
    cartItem: state.cart.cartItem
})

export default connect(mapStatetoProps)(CartDropdown);