import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };

    /*styles = {
        fontSize: 50,
        fontWeight: 'bold'
    };*/

    /*constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }*/

    handleIncrement = product =>{
        console.log(product);
        this.setState({value: this.state.value + 1});
    };

    render() {     
        return (
            <div>                    
                <span className="badge badge-primary m-2">
                    {this.formatCount()}
                </span>
                <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm">Increment</button>
            </div>);
    }
    formatCount(){
        const {value: count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;