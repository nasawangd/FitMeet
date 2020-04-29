import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component{
  render() {
    return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            FitMeet
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    );
  }

}


class Body extends Component{
  render() {
    return (
      <p>
        Body render
      </p>
    )
  }
}




class App extends Component{
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      
      </div>
    );
  }
}
export default App;
