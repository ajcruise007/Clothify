import React ,{useState} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectoryItems } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';



function Directory({sections}){
    // const [value, setValue] = useState({section: ""});

    return (
        <div className="menu"
        >
           
            {sections.map(({title, imageUrl, size, id, linkUrl}) => 
                 <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
            )}
    
          </div>
    );
}

const mapStatetoProps = state => createStructuredSelector({
    sections: selectDirectoryItems
});

export default connect(mapStatetoProps)(Directory);