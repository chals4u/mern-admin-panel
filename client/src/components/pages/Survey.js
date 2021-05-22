import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { addSurvey } from "../../actions/userActions";
import Navbar from "../partials/Navbar";
import Sidebar from "../partials/Sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons/faList";
import {Link} from "react-router-dom";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons/faUserAlt";
import classnames from "classnames";
class Survey extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            age: "",
            occupation: "",
            education: "",
            errors: {}
        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/survey");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name:  this.state.name,
            address:  this.state.address,
            age:  this.state.age,
            occupation:  this.state.occupation,
            education:  this.state.education,
           
            
        };
        this.props.addSurvey(newUser, this.props.history);
    };
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        //const { user } = this.props.auth;
        return (
            <div>
                <Navbar/>
                <div className="d-flex" id="wrapper">
                    <Sidebar/>
                    <div id="page-content-wrapper">
                    <div className="card-body p-1">
                        <h2 className="text-center text-primary mt-3">Survey Form</h2>
                        <form noValidate onSubmit={this.onSubmit}  className="white">
                            <label htmlFor="name">Name</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.name}
                                
                                id="name"
                                type="text"
                                className="form-control"
                            />
                           
                            <br/>
                            <label htmlFor="address">Address</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.address}
                               
                                id="address"
                                type="text"
                                className="form-control"
                            />
                            
                            <br/>
                            <label htmlFor="address">Age</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.age}
                                
                                id="age"
                                type="text"
                                className="form-control"
                            />
                           
                            <br/>
                            <label htmlFor="address">Occupation</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.occupation}
                               
                                id="occupation"
                                type="text"
                                className="form-control"
                            />
                             <br/>
                            <label htmlFor="address">Education</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.education}
                               
                                id="education"
                                type="text"
                                className="form-control"
                            />
                            
                            <p className="text-center pb-0 mt-2">
                                <button
                                    type="submit"
                                    className="btn btn-large btn-primary mt-2 px-5">
                                    Add
                                </button>
                            </p>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

Survey.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    addSurvey: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser,addSurvey }
)(Survey);
