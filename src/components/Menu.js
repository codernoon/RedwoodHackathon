import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg fixed-top">
                <div className="navbar-header">
                        <a className="navbar-brand" href='www.google.com'>Education</a>
                    </div>
                    <ul className='nav navbar-nav'>
                        <li> <Link to='/add-review'> Add a Review </Link> </li>
                    </ul>
                </nav>
            </div>
         )
    }
}
 
export default Menu;