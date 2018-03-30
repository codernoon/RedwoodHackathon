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

    searchParameter() {
        this.setState({
            search: event.target.value
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
                    <input onChange={this.searchParameter.bind(this)} id="search-input" className="form-control" type="text"/>
                    <button onClick= { this.submitSearch.bind(this) } className="btn btn-primary">Go</button>
                </div>
            </div>
         )
    }

    submitSearch() {
        if ( this.state.value= "school") {
            axios.get('http://localhost:8080/api/schools?name=' + this.state.search)
            .then(response => {
                this.props.reduxState(response.data);
            });
        }

        else if (this.state.value = "city") {
            axios.get('http://localhost:8080/api/schools?city=' + this.state.search)
            .then(response => {
                this.props.reduxState(response.data);
            });    
        } 

        else if (this.state.value = "type") {
            axios.get('http://localhost:8080/api/schools?type=' + this.state.search)
            .then(response => {
                this.props.reduxState(response.data);
            });
        }  
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reduxState: api => dispatch(initialApiCall(api))
    }
}

export default connect(mapDispatchToProps)(Search);