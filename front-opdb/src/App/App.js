import React from 'react';
//import logo from '../logo.svg';
import './App.css';
import Login from '../pages/Login/Login';
import Work from '../pages/Work/Work';
import Admin from '../pages/Admin/Admin';
import Footer from '../components/Footer/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
      </header> */}


      {/* 
<Link className="nav-link" to="/">Home</Link> */}
      <main>


        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/admin" component={Admin} />
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
