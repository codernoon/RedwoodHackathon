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
                <div className="form-group">
                   <select onChange={this.changeValue.bind(this)} value={this.state.value} className="custom-select">
                        <option value="default">Search By</option>
                        <option value="school">School</option>
                        <option value="city">City</option>
                        <option value="type">Type</option>
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

const mapDispatchToProps = dispatch => {
    return {
        reduxState: api => dispatch(initialApiCall(api))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);