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
            listOpen: false
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
    }


    openDropdown = () => {
        this.setState({
            listOpen: !this.state.listOpen    
        })

        this.props.callback(this.state.savedItems)
    }

    render() {
        return (
                    <ul className="menu" >
                        <li><button onClick={this.openDropdown}>Saved Items</button></li>
                        {this.state.listOpen ?
                            <ul className="drop-down">
                                {/* {this.state.savedItems.map((item) => {
                                    return (
                                        <li>{item.food_name}</li>
                                    )    
                                })} */}
                                <Route path ="/" render = { () => { return (<DropdownLinks links={this.state.savedItems} />)}}/> 
                                <Route path ="/:tagID" render = { () => { return (<ItemCardDetails details={this.state.savedItems}/>)}}/>  
                            </ul>
                        :null}
                    </ul>
        )
    }
}

export default Dropdown;