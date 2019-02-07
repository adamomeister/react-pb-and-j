import React, { Component } from 'react';
// import logo from './logo.svg';
import NavBar from './components/navbar';
import Footer from './components/footer';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <NavBar />
        <h1>Hello, React!</h1>
      </header>
      <Footer />
      </div>
    );
  }
}

export default App;
