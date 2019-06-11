import React from 'react';
import {Link} from 'react-router-dom';
// import ItemCardDetails from './ItemCardDetails';

const DropdownLinks = (props) => {
    return(
        <ul>
            {props.links && props.links.map((item) => {
                return(
                    <li onClick={props.handleClick}><Link to ={`/${item.tag_id}`}>{item.food_name}</Link></li>
                )
            })}
        </ul>
    
    )
}
    

export default DropdownLinks