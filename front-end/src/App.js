import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';

const API = "http://localhost:3000/users";

class App extends Component {
  state = {
    user: []
  }


  async componentDidMount() {
    const response = await fetch(API);
    const userData = await response.json();
    this.setState({ user: userData });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            What a cool appy app app <code>src/App.js</code> and save to reload.
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
      </div>
    );
  }
}

export default App;
