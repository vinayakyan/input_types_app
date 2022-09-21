import React from 'react'
import { NavLink } from 'react-router-dom'
function MyHeader() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">MyApp</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/user">User</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/display">Display</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default MyHeader;