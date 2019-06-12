import React from 'react';
import Dropdown from './Dropdown.js';

const Header = (props) => {

    const callback = (e) => {
        props.callbackHell(e)
    }

    return (
        <header>
            <nav>
                <h4>Superfood Navigation</h4>
                <Dropdown
                    callback={callback}
                    onCompareClick={props.onCompareClick}
                    compareList={props.compareList}
                    savedItems={props.savedItems}
                />
            </nav>
            <div className="title-container">
                <h1>Superfood Navigation</h1>
            </div>
        </header>
    )
}

export default Header;