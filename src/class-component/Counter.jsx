import React, { Component } from 'react'

export default class Counter extends Component {
    // step 1: initialize state 

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    // step 2: define the method to modify the this.state.
    increment = () => {
        this.setState({ count: this.state.count + 9 });
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    // step 3: render ui
    render() {
        return (
            <div>
                <h2>count :{this.state.count}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
