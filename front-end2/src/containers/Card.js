import React, { Component } from "react";
import {Route} from 'react-router-dom'
import StartPage from './StartPage.js'
import Topics from './Topics.js'
import Form from './Form.js'

const songurls = "http://localhost:3000/songs";
const user = "http://localhost:3000/users/4";

class Card extends Component {
  state = {
    user: [],
    songs: [],
    userInput: ["We’re going Up up up in my ___Up in the ___ we’ll greet the ___ Up up up we’ll dance and sway in my ___", "Higher and higher we’re reaching for the ___	Higher and higher come on lets have some ___", "We’re going Up up up in my ___ Up in the ___we’ll greet the ___ Up up up we’ll dance and sway in my ___ ", "Higher and higher we’re reaching for the ___	Higher and higher come on lets have some ___ ", "Lala la ___ , lala ___ love ___ Lala la ___ , lala ___ love ___ ___ !"]
  };

  async componentDidMount() {
    const response = await fetch(songurls);
    const songData = await response.json();
    //console.log(songData);
    this.setState({ songs: songData });

    const userResponse = await fetch(user);
    const userData = await userResponse.json();
    //console.log(userData);
    this.setState({ user: userData });
  }

  render() {
    return (
      <div className="flex-container">
        <div className="rcorners1 double">
          <Route exact path="/" component={StartPage} />
          <Route
            exact
            path="/Topics"
            render={() => (
              <Topics songs={this.state.songs} user={this.state.user} />
            )}
          />
          <Route
            exact
            path="/song/:id"
            render={(props) => {
              const paramsId = props.match.params.id;

              const song = this.state.songs.find((songObj) => {
                return songObj.id == paramsId;
              });

              return song ? <Form song={song} /> : null;
            }}
          />
        </div>
      </div>
    );
  }
}

export default Card;
