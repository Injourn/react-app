import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1','tag2','tag3']
    };

    /*styles = {
        fontSize: 50,
        fontWeight: 'bold'
    };*/

    render() {     
        return (
            <React.Fragment>                    
                <span className="badge badge-primary m-2">
                    {this.formatCount()}
                </span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>);
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;