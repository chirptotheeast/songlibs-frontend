import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Songlib extends Component {
    render() {
        return (
          <div>
            <h1>This is your nice Songlib !</h1>
            <div>
              <Link to="/">
                <button className="btn vertbottom">go back</button>
              </Link>
            </div>
          </div>
        );
    }
}
