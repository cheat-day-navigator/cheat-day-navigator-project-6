import React, { Component } from 'react';
import firebase from './../globalComponents/firebase.js';
import {
    // BrowserRouter as Router,
    Route,
    // Link,
    // NavLink
} from 'react-router-dom';
import DropdownLinks from "./DropdownLinks.js";
import ItemCardDetails from "./ItemCardDetails.js"


class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);

        this.state = {
            listOpen: false,
            compareOpen: false, 
        }
        
    }


    componentDidMount() {

        const compareRef = firebase.database().ref('comparedItems/');
        // creating a compare variable to send to firebase
        compareRef.on('value', (response) => {
            const comparedItems = [];
            // setting an empty array for the compared items to update state
            const data = response.val();
            // getting the value of the response paramater

            for (let key in data) {
                comparedItems.push(data[key])
            }
            // pushing the compared items to the array along with a key identifer

            this.setState({
                comparedItems
            })

            // setting state with the compared items

        });
    }

    handleClick() {
        if (!this.state.listOpen) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            listOpen: !prevState.listOpen,
        }))
    }

    handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
            return;
        }
        this.handleClick();
    }

    openCompare = () => {
        this.setState({
            compareOpen: !this.state.compareOpen
        })
    }

    render() {
        return (
            <div ref={node => {this.node = node;}}>
                <ul className="menu" >
                    <li><button onClick={this.openCompare}>Compare List</button><div className="counter"><p>{this.state.comparedItems && this.state.comparedItems.length}</p></div></li>
                    {this.state.compareOpen ?
                        <ul className="drop-down compared-items">
                            {this.state.comparedItems.map((item) => {
                                return (
                                    <li>{item.tag_name}</li>
                                )
                            })}
                            <li><button onClick={this.props.onCompareClick}  className="compare-btn">Compare!</button></li>
                        </ul> : null}
                    <li><button onClick={this.handleClick}>Saved Items</button><div className="counter"><p>{this.props.savedItems && this.props.savedItems.length}</p></div></li>
                    {this.state.listOpen ?
                        <ul className="drop-down">
                            <Route path="/" render={() => { return (<DropdownLinks links={this.props.savedItems} handleClick={this.handleClick} />) }} />
                        </ul>
                        : null}
                </ul>
            </div>
        )
    }
}

export default Dropdown;