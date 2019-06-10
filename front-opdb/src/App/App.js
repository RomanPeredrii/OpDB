import React from 'react';
//import logo from '../logo.svg';
import './App.css';
import Login from '../pages/Login/Login';
import Work from '../pages/Work/Work';
import Admin from '../pages/Admin/Admin';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/admin" component={Admin} />
      </Router>
    </div>
  );
}

export default App;
