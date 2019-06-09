import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOpen: false
        }
    }

    openDropdown = () => {
        this.setState({
            listOpen: !this.state.listOpen
        })
    }

    render() {
        return (
            <ul className="menu" >
                <li><button onClick={this.openDropdown}>Saved Items</button></li>
                {this.state.listOpen ?
                    <ul className="drop-down">
                        <li>Saved Item</li>
                        <li>Saved Item</li>
                        <li>Saved Item</li>
                        <li>Saved Item</li>
                        <li>Saved Item</li>
                        <li>Saved Item</li>
                        <li>Saved Item</li>
                        <li>Saved Item</li>
                        <li>Saved Item</li>
                    </ul>
                    : null}
            </ul>
        )
    }
}

export default Dropdown;