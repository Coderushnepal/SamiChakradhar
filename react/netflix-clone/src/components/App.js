import React from "react";
import "./App.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Topbar from "./Topbar/Topbar";
import Sign from './Sign/Sign';
import Home from './Home/Home';
import List from './List/List';
// import Main from './Main/Main'

class App extends React.Component {
  render() {

    return (
  
      <BrowserRouter>
      <div className="App">
        <Topbar />
        {/* <Modal /> */}
        <Switch>
        <Route exact path="/"  component = {Home} />
          <Route exact path="/Sign"  component = {Sign} />
          <Route exact path="/List"  component = {List} />
        </Switch>
        
      </div>
      </BrowserRouter>
     );
    }
}

export default App;

//c727fa048d12c0e056aa7b5c30c33384
