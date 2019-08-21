import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
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
        this.setState({count: this.state.count + 1});
    };

    doHandleIncrement = () =>{
        this.handleIncrement({id: 1})
    };

    render() {     
        return (
            <React.Fragment>                    
                <span className="badge badge-primary m-2">
                    {this.formatCount()}
                </span>
                <button onClick={this.doHandleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>);
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;