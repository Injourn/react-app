import React, { Component } from 'react';

class Counter extends Component {
    

    /*styles = {
        fontSize: 50,
        fontWeight: 'bold'
    };*/

    /*constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }*/

    render() {     
        return (
            <div>       
                {this.props.children}             
                <span className="badge badge-primary m-2">
                    {this.formatCount()}
                </span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>);
    }
    formatCount(){
        const {value: count} = this.props.counter;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;