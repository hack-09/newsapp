import React, { Component } from "react";
import {Link} from "react-router-dom";


export class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.searchInput);
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsMonkey
            </a>
            <button className="navbar-toggler" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item "> <Link className="nav-link" to="/about"> About </Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/business"> Business </Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/entertainment"> entertainment </Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/general"> General </Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/health"> Health </Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/science"> Science </Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/sports"> Sports </Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/technology"> Technology </Link> </li>
                
              </ul>
              <form className="d-flex" role="search" onSubmit={this.handleSubmit}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={this.state.searchInput} onChange={this.handleInputChange}/>
                <button className="btn btn-outline-warning" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
