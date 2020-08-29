import React from 'react';
import './List.css'

class List extends React.Component {
    
  
    render() {
      return (
          <div>
              <h1 className="header">My Listing</h1>
              <form class="form-inline my-2 my-lg-1">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="My listing"
                  aria-label="Search"
                ></input>
              </form>
              <div className="space"></div>
          </div>
      )
    }
}
export default List;
