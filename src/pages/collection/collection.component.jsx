import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component'
import './collection.styles.scss';

const CollectionPage = ({match, collection}) => {

    const {title, items} = collection;

    return (
    <div className = 'collection-page'>
        <h2 className="title">  {title} </h2>
        <div className='collection-items'>
            {items.map(item => <CollectionItem item={item}/>)}
        </div>
    </div>
   )
}
   
const mapStatetoProps = (state, ownProps) =>({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
});



export default connect(mapStatetoProps)(CollectionPage);