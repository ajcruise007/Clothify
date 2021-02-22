import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
const Checkout = ({cartItems, totalPrice}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                Product
            </div>
            <div className="header-block">
                Description
            </div>
            <div className="header-block">
                Quantity
            </div>
            <div className="header-block">
                Price
            </div>
            <div className="header-block">
                Remove
            </div>


        </div>
        <div className="checkout-items">
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id}item={cartItem} totalPrice = {totalPrice}/>
            ))}

        </div>

        <div className="total-price">
            <span>Total Price: ${totalPrice}</span>
        </div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp date: 01/24 - CVV: 123
        </div>
        <StripeCheckoutButton price={totalPrice}/>
    </div>
)

const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotal
});

export default connect(mapStatetoProps)(Checkout);