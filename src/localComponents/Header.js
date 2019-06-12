import React from 'react';
import Dropdown from './Dropdown.js';
import { tsPropertySignature } from '@babel/types';

const Header = (props) => {

    const callback = (e) => {
        props.callbackHell(e)
    }

    return (
        <header>
            <nav>
                <h4><a href="">Superfood Navigation</a></h4>
                <Dropdown
                    callback={callback}
                    onCompareClick={props.onCompareClick}
                    compareList={props.compareList}
                    savedItems={props.savedItems}
                />
            </nav>
            <div className="title-container">
                <h1>Superfood Navigation
                    <div className="bottom-lines lines">
                        <div className="bar line1"></div>
                        <div className="bar line2"></div>
                        <div className="bar line3"></div>
                        <div className="bar line2"></div>
                        <div className="bar line1"></div>
                    </div>
                </h1>

            </div>
            <div className="title-info-container">
                <h3>Learn about all your favourite foods!
                    <div className="top-lines lines">
                        <div className="bar line1"></div>
                        <div className="bar line2"></div>
                        <div className="bar line3"></div>
                        <div className="bar line2"></div>
                        <div className="bar line1"></div>
                    </div>
                </h3>
            </div>
        </header>
    )
}

export default Header;