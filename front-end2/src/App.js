import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import Card from './containers/Card'

const songurls = "http://localhost:3000/songs";
const user = "http://localhost:3000/users/1";


class App extends Component {
  state = {
    user: [],
    songs:[]
  }


  async componentDidMount() {
    const response = await fetch(songurls);
    const songData = await response.json();
    console.log(songData)
    this.setState({songs: songData})

    const userResponse = await fetch(user);
    const userData = await userResponse.json()
    console.log(userData)
    this.setState({ user: userData });
  }

  render() {
    return (
      <div className="App">
        <div>
          <Card songs={this.state.songs} user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default App;
