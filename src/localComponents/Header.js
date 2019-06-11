import React from 'react';
import Dropdown from './Dropdown.js';
import { tsPropertySignature } from '@babel/types';

const Header = (props) => {
    return (
        <header>
            <nav>
                <h4>Superfood Navigation</h4>
                <Dropdown
                    onCompareClick={props.onCompareClick}
                    compareList={props.compareList}
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