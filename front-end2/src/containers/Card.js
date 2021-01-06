import React, { Component } from "react";
import {Route} from 'react-router-dom'
import StartPage from './StartPage.js'
import Topics from './Topics.js'
import Form from './Form.js'



class Card extends Component {

  render() {
    return (
      <div className="flex-container">
      <div className="rcorners1">
        <Route exact path="/" component={StartPage} />
        <Route exact path="/Topics" render={() => <Topics songs={this.props.songs} user={this.props.user}/> }/>
        <Route exact path="/song/:id" render={(props) => {
          const song = this.props.songs? this.props.songs.find((song) => song.id === props.match.params.id) :null
          console.log(song)
          return song ? <Form song={song}/> : null
        }}/>
      </div>
      </div>
    );
  }
}

export default Card;
