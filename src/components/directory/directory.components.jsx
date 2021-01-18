import React ,{useState} from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import sections from '../../data/sections.homepage';


function Directory(){
    const [value, setValue] = useState({section: ""});
    return (
        <div className="menu"
        >
           
            {sections.map(({title, imageUrl, size, id}) => 
                 <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
            )}
    
          </div>
    );
}

export default Directory;