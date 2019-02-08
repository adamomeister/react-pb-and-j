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
      </header>
      <div className="container">
        <button className="btn btn-warning"><a href="https://appcenter.intuit.com/connect/oauth2?client_id=Q0PvPlI6Vc6oEWJD4AeumjFSSLdQI4HSniUXk1weWXIGDJlawv&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=com.intuit.quickbooks.accounting&state=randomState">OAuth Sign In</a></button>
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
