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
        this.state = {
            listOpen: false,
            compareOpen: false
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref('savedItems/');
        dbRef.on('value', (response) => {
            const savedItems = [];
            const data = response.val();

            for (let key in data) {
                savedItems.push(data[key])
                // console.log(data)
            }

            this.setState({
                savedItems
                // data
            })
        });

        const compareRef = firebase.database().ref('comparedItems/');
        compareRef.on('value', (response) => {
            const comparedItems = [];
            const data = response.val();

            for (let key in data) {
                comparedItems.push(data[key])
            }

            this.setState({
                comparedItems
            })

        });
    }


    openDropdown = () => {
        this.setState({
            listOpen: !this.state.listOpen    
        })

        this.props.callback(this.state.savedItems)
    }

    openCompare = () => {
        this.setState({
            compareOpen: !this.state.compareOpen
        })
    }

    render() {
        return (
            <ul className="menu" >
                <li><button onClick={this.openCompare}>Compare List</button><div className="counter"><p>{this.state.comparedItems && this.state.comparedItems.length}</p></div></li>
                {this.state.compareOpen ?
                    <ul className="drop-down compared-items">
                        {this.state.comparedItems.map((item) => {
                            return (
                                <li>{item.tag_name}</li>
                            )
                        })}
                        <li><button onClick={this.props.onCompareClick} className="compare-btn">Compare!</button></li>
                    </ul> : null}
                <li><button onClick={this.openDropdown}>Saved Items</button><div className="counter"><p>{this.state.savedItems && this.state.savedItems.length}</p></div></li>
                {this.state.listOpen ?
                            <ul className="drop-down">
                                <Route path ="/" render = { () => { return (<DropdownLinks links={this.state.savedItems} />)}}/> 
                            </ul>
                        :null}
            </ul>
        )
    }
}

export default Dropdown;