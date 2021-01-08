import React, { Component } from "react";
import {Route} from 'react-router-dom'
import StartPage from './StartPage.js'
import Topics from './Topics.js'
import Form from './Form.js'
import Reveal from './Reveal.js'
import Cardflip from './Cardflip.js'
import Songlib from './Songlib.js'

const songurls = "http://localhost:3000/songs";
const user = "http://localhost:3000/users/10";

class Card extends Component {
  state = {
    user: [],
    songs: [],
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
          <Route exact path="/reveal" render={() => <Reveal />} />
          <Route exact path="/cardflip" render={() => <Cardflip />} />
          <Route exact path="/songlib" render={() => <Songlib />} />
        </div>
      </div>
    );
  }
}

export default Card;
