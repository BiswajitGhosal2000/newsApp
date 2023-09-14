// import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <Link className="navbar-brand" to="/">
            News Today
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse mx-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item mx-4">
                <Link className="nav-link" to="/">
                  Breaking News <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
