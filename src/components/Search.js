import React, { Component } from 'react';
import { connect } from 'react-redux'

import School from './school'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: 'default'
         }
    }

    changeValue() {
        this.setState({
            value: event.target.value
        });  
    }

    render() { 
        return ( 
            <div>
                <div id="search-field" className="form-group">
                   <select id="search-select" onChange={this.changeValue.bind(this)} value={this.state.value} className="form-control">
                        <option value="default">Search By</option>
                        <option value="school">School</option>
                        <option value="city">City</option>
                        <option value="type">Type</option>
                    </select>
                    <input id="search-input" className="form-control" type="text"/>
                    <button className="btn">Go</button>
                </div>
            </div>
         )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reduxState: api => dispatch(initialApiCall(api))
    }
}

export default connect(mapDispatchToProps)(Search);