import React from "react";
import "./topbar.css";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import * as routes from "../../constants/routes";

class Topbar extends React.Component {
// const Topbar = () => {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
    };
  }

  handleTextChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  search = (event) => {
    event.preventDefault();
    this.props.setSearchText(this.state.searchText);
  };

  render() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand pt-2" href="javascript:">
          <i className="fa fa-bars px-2" aria-hidden="true"></i>
          <a href="https://fontmeme.com/netflix-font/"></a><Link to={routes.HOME} >
        <img src="https://fontmeme.com/permalink/200825/23c21e73bc5321e9d4cd67900457f4b2.png" alt="netflix-font" border="0"></img>
        </Link>
        </a>
       

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={this.state.searchText}
                onChange={this.handleTextChange}
                />
              </form>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:">
                <i className="fa fa-search" aria-hidden="true"></i>
              </a>
            </li>

          </ul>
          <ul className="navbar-nav ml-auto">
            <li ><i className= "sign-in"><Link to={routes.SIGN} title= "Sign">Sign Out</Link></i></li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:">
                <i class="fa fa-bars " aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
  }
};

Topbar.propTypes = {
  setSearchText: PropTypes.func,
};

export default Topbar;
