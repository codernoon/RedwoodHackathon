import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'


import SearchOne from './Search1'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/schools').
        then(response => {
            this.props.reduxState(response.data);
        })
    }

    render() { 
        return ( 
        <div>
            <SearchOne />
        </div> )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reduxState: api => dispatch(initialApiCall(api))
    }
}
 
export default connect(null, mapDispatchToProps)(SearchOne);