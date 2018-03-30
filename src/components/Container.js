import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { Switch, Route} from 'react-router-dom'


import Title from './title'
import Search from './Search'
import AddReview from './Add-Review';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
        <div>
            <Title />
            
            <Switch>
                    <Route exact path='/' component={Search} />
                    <Route path='/add-review' component={AddReview}/>
            </Switch>
        </div> 
        )
    }
}
 
export default Container;