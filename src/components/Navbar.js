import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (

        <nav className={`navbar navbar-expand-lg bg-${props.Mode}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.Mode === 'dark' ? 'light' : 'dark'}`} to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <div className={`form-check form-switch text-${props.Mode === 'dark' ? 'light' : 'dark'}`}>
                    <input className="form-check-input" onClick={props.funswitch} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode
                    </label>
                </div>
            </div>
        </nav>

    )

}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: "Set Title",
    about: "Set About"
};