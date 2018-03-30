import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class School extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div>
                <div>
                    {
                        this.props.reviews.map( item => {

                            return (
                                <div> item.schoolName </div>
                            )
                        })
                    }
                    School
                </div>
            </div>
         )
    }
}
 


const mapStateToProps = state => {
    return {
        reviews: state.reviews

    }
}

export default connect (mapStateToProps)(School);