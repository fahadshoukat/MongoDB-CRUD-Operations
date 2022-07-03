import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/MERN-logo.png"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
            <div className="container">
                <Link className='navbar-brand fw-bold' to="/">
                    <img src={logo} alt="logo" height="40" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className='nav-link active fw-bold' to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link active fw-bold' to="/createUser">Create User</Link>
                        </li>
                        <li className="nav-item">
                        <Link className='nav-link active fw-bold' to="/allUsers">All User</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar