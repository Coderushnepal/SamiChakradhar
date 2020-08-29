import React from 'react';
import "./Sign.css";
import {Link} from 'react-router-dom';
import * as routes from "../../constants/routes";

class Sign extends React.Component {
    
  
    render() {
      return (
      
        <div className = "avatar"> 
        <h1 className="title">Who's watching?</h1>
        <a> <Link to={routes.HOME} >
        <img className = "nav_avatar"
        src= "https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
        alt = "netflix logo" /></Link> </a>
        <a><Link to={routes.HOME} >
        <img className = "nav_avatar"
        src= "https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
        alt = "netflix logo" /></Link> </a>
        <a><Link to={routes.HOME} >
        <img className = "nav_avatar" 
        src= "https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
        alt = "netflix logo" /></Link> </a>
        <a><Link to={routes.HOME} >
        <img className = "nav_avatar"
        src= "https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
        alt = "netflix logo" /></Link> </a>
        <h3 className = "user-name"> sami</h3>
        <h3 className = "user-name"> kritee</h3>
        <h3 className = "user-name"> kritika</h3>
        <h3 className = "user-name"> sindhu</h3>
        <h3 className="space"></h3>
        </div>
      );
    }
  }
export default Sign;