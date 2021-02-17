import React from 'react';
import './checkout-item.styles.scss'

const CheckoutItem = ({item, totalPrice}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={item.imageUrl} alt="item"></img>
        </div>
       <div className="name"> {item.name}</div>
       <div className="quantity">
           {item.quantity}
       </div>
        <div className="price">{item.price * item.quantity} </div>
        <div className="remove-button"><span>&#10006;</span></div>
    </div>
)


export default CheckoutItem;