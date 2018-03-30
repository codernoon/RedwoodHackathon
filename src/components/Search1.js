import React, { Component } from 'react';
import { connect } from 'react-redux'

import School from './school'

class SearchOne extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: 'default'
         }
    }

    change() {
        this.setState({
            value: event.target.value
        });
        
    }

    render() { 
        return ( 
            <div>
                <div className="form-group">
                   <select onChange={this.change.bind(this)} value={this.state.value} className="custom-select">
                        <option value="default">Search By</option>
                        <option value="1">School</option>
                        <option value="2">City</option>
                        <option value="3">Type</option>
                    </select>
                    <input className="form-control" type="text"/>
                    <button className="btn">Go</button>
                </div>
            </div>
         )
    }
}

const mapStateToProps = state => {
    return {
       
    }
}

export default connect(mapStateToProps)(SearchOne);