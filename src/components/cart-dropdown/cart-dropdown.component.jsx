import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return( <div className="cart-dropdown">
        
            <div className="cart-items">
                {cartItems.length ? null :  <span className="empty-message">CART EMPTY</span>}
                {cartItems.map((item) => (<CartItem key={item.id } item={item}></CartItem>))}
            </div>
            <CustomButton value="Go to Checkout" handleClick={() =>{ 
                history.push('/checkout') 
                dispatch(toggleCartHidden())
            }}/>
        </div>)
};

const mapStatetoProps = createStructuredSelector({
    cartItems : selectCartItems
})

export default withRouter(connect(mapStatetoProps)(CartDropdown));