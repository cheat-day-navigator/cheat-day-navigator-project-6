import React from 'react';
import {Link} from 'react-router-dom';
// import ItemCardDetails from './ItemCardDetails';

const DropdownLinks = (props) => {
    console.log(props.links)
    return(
        <ul>
            {props.links && props.links.map((item) => {
                return(
                    <li><Link to ={`/${item.tag_id}`}>{item.food_name}</Link></li>
                    // <Route path ={`/${item.tag_id}`} component={ItemCardDetails}/>
                )
            })}
        </ul>
    
    )
}
    

export default DropdownLinks