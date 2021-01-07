import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from "../images/orange.png";

export default class StartPage extends Component {
    render() {
        return (
          <div>
            <div>
              <img src={logo} alt="logo" />
            </div>

            <Link to="/topics">
              <button className="button">click to start</button>
            </Link>
          </div>
        );
    }
}
