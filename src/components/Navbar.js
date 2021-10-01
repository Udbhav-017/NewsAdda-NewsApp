import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    word: ''
  }

  handleChange=(event)=>{
    this.setState({word: event.target.value});
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ "backgroundColor": "#e3f2fd" }}>
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
            <div className="d-flex">
              <input className="form-control me-2" type="search" value={this.state.word} onChange={this.handleChange} placeholder="Search news related to..." aria-label="Search" />
              <Link  to={`/:${this.state.word}`}> <button className="btn btn-outline-primary" onClick={()=>{this.props.getKeyword(this.state.word)}} >Search</button> </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
