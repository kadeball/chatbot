import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Welcome from "./components/Welcome";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
      <Route path='/'  component={Welcome}  exact/>
      <Route path='/Page1'  component={Page1}  exact/>
      <Route path='/Page2'  component={Page2}  exact/>
      <Route path='/Page3'  component={Page3}  exact/>
      <Route path='/Page4'  component={Page4}  exact/>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
