import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import choose from "../images/choose.png";

export default class Topics extends Component {



    render() {
        return (
          <div className="vertical">
            <img src={choose} alt="choose" />
            <div className="vertbottom" >
              {this.props.songs.map((song) => {
                return (
                  <Link to={`/song/${song.id}`}>
                    <button className="button"> {song.topic}</button>
                  </Link>
                );
              })}
            </div>
            <div >
                <Link to="/">
                    <button className="btn vertical">go back</button>
                </Link>
            </div>
          </div>
        );
    }
}
