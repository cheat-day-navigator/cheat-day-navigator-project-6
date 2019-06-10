import React, { Component } from 'react';
import firebase from './../globalComponents/firebase.js';

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
            }

            this.setState({
                savedItems
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
    }

    render() {
        return (
            <ul className="menu" >
                <li><button onClick={this.openCompareList}>Compare List</button><div className="counter"><p>{this.state.comparedItems && this.state.comparedItems.length}</p></div></li>
                <li><button onClick={this.openDropdown}>Saved Items</button><div className="counter"><p>{this.state.savedItems && this.state.savedItems.length}</p></div></li>
                {this.state.listOpen ?
                    <ul className="drop-down">
                        {this.state.savedItems.map((item) => {
                            return (
                                <li>{item.food_name}</li>
                            )
                        })}
                    </ul>
                    : null}
            </ul>
        )
    }
}

export default Dropdown;