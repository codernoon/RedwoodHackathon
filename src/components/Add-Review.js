import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

class AddReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolName: "",
            reviewerName: "",
            rating: 0,
            writtenReview: "",
            dateAttended: "",
            artProgram: false,
            musicProgram: false,
            athleticProgram: false,
            strongTeachers: false,
            collegePrep: false,
            strongAdmin: false,
            safeArea: false,
            schoolSecurity: false,
            niceCampus: false,

            addedReview: []
        }
    }
    render() {
        return (
            <div id="add-review-field">
                <form action="">
                    <label htmlFor="">Name</label>
                    <input onChange={(e) => { this.setState({ reviewerName: e.target.value }) }} value={this.state.reviewerName} className="form-control" type="text" />

                    <label htmlFor="">School</label>
                    <input onChange={(e) => { this.setState({ schoolName: e.target.value }) }} value={this.state.schoolName} className="form-control" type="text" />

                    <label htmlFor="">Rating</label>
                    <input onChange={(e) => { this.setState({ rating: e.target.value }) }} value={this.state.rating} className="form-control" type="text" />

                    <label htmlFor="">Date(s) Attended</label>
                    <input onChange={(e) => { this.setState({ dateAttended: e.target.value }) }} value={this.state.dateAttended} className="form-control" type="text" />

                    <div>
                        <label className="checkbox-inline"><input onChange={(e) => { this.setState({ strongTeachers: true }) }} value={this.state.strongTeachers} type="checkbox" />Strong Teachers</label>
                        <label className="checkbox-inline"><input onChange={(e) => { this.setState({ collegePrep: true }) }} value={this.state.collegePrep} type="checkbox" />College Prep</label>
                        <label className="checkbox-inline"><input onChange={(e) => { this.setState({ athleticProgram: true }) }} value={this.state.athleticProgram} type="checkbox" />Good Athletics Programs</label>
                    </div>

                    <div>
                        <label className="checkbox-inline"><input onChange={(e) => { this.setState({ artProgram: true }) }} value={this.state.artProgram} type="checkbox" />Good Arts Program</label>
                        <label className="checkbox-inline"><input type="checkbox" onChange={(e) => { this.setState({ musicProgram: true }) }} value={this.state.musicProgram} /> Good Music Program</label>
                        <label className="checkbox-inline"><input type="checkbox" onChange={(e) => { this.setState({ niceCampus: true }) }} value={this.state.niceCampus} />Nice Campus</label>
                    </div>

                    <div>
                        <label className="checkbox-inline"><input type="checkbox" onChange={(e) => { this.setState({ strongAdmin: true }) }} value={this.state.strongAdmin} />Strong Administration</label>
                        <label className="checkbox-inline"><input type="checkbox" onChange={(e) => { this.setState({ safeArea: true }) }} value={this.state.safeArea} />Safe Location</label>
                        <label className="checkbox-inline"><input type="checkbox" onChange={(e) => { this.setState({ schoolSecurity: true }) }} value={this.state.schoolSecurity} />School Security on Campus</label>
                    </div>

                    <label htmlFor="">Review</label>
                    <textarea className="form-control" rows="5"></textarea>
                    <button onClick={this.postToApi.bind(this)} id="add-button" className="btn btn-primary"> Add </button>
                </form>

                {
                    this.state.addedReview.map((item, index) => (
                        <div>
                            <div id="new-review" className="row">
                                <p>School: {item.schoolName} </p>
                                <p>Name: {item.reviewersName} </p>
                                <p>Rating: {item.rating} </p>
                                <p>dateAttended: {item.dateAttended} </p>
                                <p>Review:</p>
                                <p> {item.writtenReview} </p>

                                {/* if(item.strongTeachers == true){
                                    <p>Good Teachers  <span class="glyphicon glyphicon-class-name"></span> </p>
                                }

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
            </div>
        )
    }

    postToApi() {

        const review = {
            schoolName: this.state.schoolName,
            writtenReview: this.state.writtenReview,
            reviewersName: this.state.reviewerName,
            rating: this.state.rating,
            dateAttended: this.state.dateAttended,
            artProgram: this.state.artProgram,
            musicProgram: this.state.musicProgram,
            athleticProgram: this.state.athleticProgram,
            strongTeachers: this.state.strongTeachers,
            collegePrep: this.state.collegePrep,
            strongAdministration: this.state.strongAdmin,
            safeArea: this.state.safeArea,
            schoolSecurity: this.state.schoolSecurity,
            niceCampus: this.state.niceCampus
        }

        axios({
            method: 'post',
            url: 'http://localhost:5000/api/schools',
            data: review,
            headers: {
                //  'Authorization': 'bearer ${token}',
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                this.setState({ addedReview: review});
            })
    }
}

export default AddReview;