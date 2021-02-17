import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss'
import {connect} from 'react-redux';
import {addCartItem} from '../../redux/cart/cart.action';


const CollectionItem = (props) => {
    const {item, addCartItem} = props;
    
   return(
        <div className ="collection-item">
            <div className="collection-item-image" style={{backgroundImage: `url(${item.imageUrl})`}}></div>
                <div className="collection-footer"> 
                    <span className="name">{item.name}</span>
                    <span className="price">${item.price}</span>
                    
                </div>
            <CustomButton value="Add to Cart" inverted handleClick ={() => addCartItem(item)}/>
        </div>
   )
}

const mapDispatchtoProps = (dispatch) => ({
    addCartItem: (item) => dispatch(addCartItem(item))
}); 

export default connect(null, mapDispatchtoProps)(CollectionItem) ;