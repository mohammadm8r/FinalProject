import React , { Component } from 'react';
import './App.css';
import SignIn from './SignIn.js';
import Dashboard from './Dashboard.js';
import Student from './Student.js';
import Correction from './Correction';

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/Signin" component={SignIn} />
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/student" component={Student}/>
            <Route exact path="/correction" component={Correction}/>
            {/* <Student /> */}
        </div>
      </Router>
    );
  }
}

export default App;
