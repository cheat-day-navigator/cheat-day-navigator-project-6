import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <h4>Superfood Navigation</h4>
                <ul className="menu">
                    <li>Saved Items</li>
                    {/* <ul className="drop-down">
                        <li>Saved Item</li>
                    </ul> */}
                </ul>
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
                <h3>Learn about all your favourite foods and compare their micronutrient content!
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