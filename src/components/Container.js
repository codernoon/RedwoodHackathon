import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

import Menu from './menu'
import Search from './Search'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
        <div>
            <Menu />
            <Search />

            <Switch>
                <Route exact path='/add-review' component={Search} />
            </Switch>
        </div> )
    }
}
 
export default Container;