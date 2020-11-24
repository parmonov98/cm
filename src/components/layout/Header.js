import React from 'react'
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">Contact manager</a>
        <div>
          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item">
              <Link to="/" className="nav-link">
              <i className="fa fa-home mr-1" aria-hidden="true"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
              <i className="fa fa-plus mr-1" aria-hidden="true"></i>
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
              <i className="fa fa-info mr-1" aria-hidden="true"></i>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/test" className="nav-link">
              <i className="fa fa-info mr-1" aria-hidden="true"></i>
                Test
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Header;