import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class StartPage extends Component {
    render() {
        return (
          <div>
            <img src={require("../images/songlibsbg.png")} alt="logo" />I am the
            div monster
            <Link to="/topics">
              <button className="button">Click to Start</button>
            </Link>
          </div>
        );
    }
}
