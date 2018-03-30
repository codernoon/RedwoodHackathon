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
                    this.props.reviews.map(item => (
                        <div key = { item._id }>
                            <div key = { item._id } id="new-review" className="row">
                                <p>School: {item.schoolName} </p>
                                <p>Name: {item.reviewersName} </p>
                                <p>Rating: {item.rating} </p>
                                <p>dateAttended: {item.dateAttended} </p>

                                {/* {if(item.strongTeachers == true){
                                    <p>Good Teachers  <span class="glyphicon glyphicon-class-name"></span> </p>
                                }}

                                if(item.collegePrep == true){
                                    <p>collegePrep  <span class="glyphicon glyphicon-class-name"></span> </p>
                                }

                                if(item.athleticProgram == true){
                                    <p> Strong Athletics Programs <span class="glyphicon glyphicon-class-name"></span> </p>
                                }

                                if(item.artProgram == true){
                                    <p>Good Arts Programs  <span class="glyphicon glyphicon-class-name"></span> </p>
                                }

                                if(item.musicProgram == true){
                                    <p>Good Music Programs  <span class="glyphicon glyphicon-class-name"></span> </p>
                                }

                                if(item.niceCampus == true){
                                    <p>Nice Campus  <span class="glyphicon glyphicon-class-name"></span> </p>
                                }

                                if(item.strongAdministration == true){
                                    <p>Strong Administration  <span class="glyphicon glyphicon-class-name"></span> </p>
                                }

                                if(item.safeArea == true){
                                    <p>Safe Location  <span class="glyphicon glyphicon-class-name"></span> </p>
                                }

                                if(item.schoolSecurity == true){
                                    <p>Security On Campus  <span class="glyphicon glyphicon-class-name"></span> </p>
                                } */}

                            </div>
                        </div>
                    ))
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