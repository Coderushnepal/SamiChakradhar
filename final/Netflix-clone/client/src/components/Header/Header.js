import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  const [search, setsearch] = useState("");

  return (
    <nav className="navbar navbar-expand-lg text-light ">
      <a href="https://fontmeme.com/netflix-font/"></a><Link  to="/">
      <img src="https://fontmeme.com/permalink/200825/23c21e73bc5321e9d4cd67900457f4b2.png" alt="netflix-font" border="0"></img>
      </Link>
      <button
        className="navbar-toggler bg-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        More
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
          {search ? (
            <Link to={`/search/${search}`}>
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
              >
                
              </button>
            </Link>
          ) : (
            <button
              className="btn my-2 my-sm-0"
              type="button"
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          )}
        </form>
        <a className="admin"><Link to={`/A_D_M_I_N`}>admin</Link></a>
        <a className="nav-link" href="javascript:">
                <i class="fa fa-bars " aria-hidden="true"></i>
              </a>
      </div>
    </nav>
  );
}
