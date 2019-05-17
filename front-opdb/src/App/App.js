import React from 'react';
//import logo from '../logo.svg';
import './App.css';
import Login from '../pages/Login/Login';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
      </header> */}
      
      <main>
        <Login />
      </main>
      <Footer />
    </div>
  );
}

export default App;
