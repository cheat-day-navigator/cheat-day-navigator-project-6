import React from 'react';
// import {Link} from 'react-router-dom';

const ItemCardDetails = (props) => {
    console.log(props.details)
    return(
        <ul>
        <li>test</li>
            {props.details && props.details.map((item) => {
                return(
                    <div className="card2">
                        <h2>{item.tag_name}</h2>
                        <h3>Nutrition Facts</h3>
                        <p className="line">{item.serving_qty} {item.serving_unit}</p>
                    </div>
                )
            })}
        </ul>
    
    )
}
    

export default ItemCardDetails