import React, { Fragment } from 'react';
import img_arthology_logo from "../static/images/arthology_logo.svg"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../actions/auth";

const Navbar = ({ logout, isAuthenticated }) => {
    const guestLinks = () => (
        <Fragment>
            <span><Link className="btn btn-secondary" to={'/signup'} role="button">Create Account</Link></span>
            <span><Link className="btn btn-outline-secondary ms-2" to={'/login'}
                        role="button">Login</Link></span>
        </Fragment>
    );
    const authLinks = () => (
        <div>
        <span></span>
        <span><a className="btn btn-outline-secondary" href='#!' role="button" onClick={logout}>Logout</a></span>
        </div>
    );


    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">


                    <img className="navbar-brand" src={img_arthology_logo} alt="" width="150"/>


                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                        </li>

                    </ul>

                    {isAuthenticated ? authLinks() : guestLinks()}


                </div>
            </div>
        </nav>
    );

};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {logout})(Navbar);