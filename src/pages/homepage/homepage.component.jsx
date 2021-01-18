import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.components';
import MenuItem from '../../components/menu-item/menu-item.component';

function Homepage(){
    return (
        <div className="homepage">
          <Directory />
        </div>
      );
}

export default Homepage;
