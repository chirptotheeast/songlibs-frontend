import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Topics extends Component {



    render() {
        return (
          <div>
              Choose Your Topic 
              {this.props.songs.map((song) => {
                  return (
                    <Link to={`/song/${song.id}`}>
                      <button className="button"> {song.topic}</button>
                    </Link>
                  );
              })}
    
          </div>
        );
    }
}
