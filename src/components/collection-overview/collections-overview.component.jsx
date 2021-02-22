import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsToArray } from '../../redux/shop/shop.selectors';



const CollectionsOverview = ({collections}) =>{ 
  
    collections.map(collection => {console.log(collection)})
    return (
    <div className="collections-overview">
         {collections.map((collection) => 
          <CollectionPreview key={collection.id} items={collection.items} title={collection.title}
           />)}
    </div>
)};

const mapStateToProps = state => createStructuredSelector({
    collections: selectCollectionsToArray
}

);




export default connect(mapStateToProps)(CollectionsOverview);

