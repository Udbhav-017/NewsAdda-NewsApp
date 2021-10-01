import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light " style={{"backgroundColor":"#e3f2fd"}}>
        <div className="container-fluid">
          <span className="navbar-brand text-primary">NewsAdda</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link className="nav-link" to="/">General</Link>
              </li>
              <li>
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li>
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li>
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
              <li>
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li>
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li>
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search news that includes.." aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}
