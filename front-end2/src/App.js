import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import Card from './containers/Card'


class App extends Component {


  render() {
    return (
      <div className="App">
        <div>
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
