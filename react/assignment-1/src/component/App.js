import React from "react";
import "./App.css";
import Counter from "./Counter";

import {EnhancedUser} from './User'
function App() {
  const nameList=["puza","neha", "ichya","Kirtika","Srijana","Bishika","Neeta",];
  const names = [
    "puza",
    "neha",
    "ichya",
    "Kirtika",
    "Srijana",
    "Bishika",
    "Neeta",
    "Elisha",
    "Kirtee",
    "Trija",
    "Rachana",
    "kusum",
    "sami",
    
  ];
  return (
    <div className="App">
      <div className="first">
      <h1>Assignment-1</h1>
      {names.map((name, index) => {
        return <Counter key={name.concat(index)} name={name} />;
      })}
      </div>

      <div className="userList">
        <h1>Assignment-3</h1>
      {nameList.map((name, index) => {
        return <EnhancedUser key={name.concat(index)} name={name} />
      
  }  )}
      </div>   
    </div>
  );
}

export default App;