import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Form extends Component {
    render() {
        return (
          <div>
            <form>
              <h1>'{this.props.song.name} ...'</h1>
              <p>{this.props.song.lyrics}</p>
              <input type="text" />
            </form>
            <div>
              <Link to="/topics">
                <button className="btn vertical">go back</button>
              </Link>
              <button className="btn vertical">listen</button>
              <button className="btn vertical">submit</button>
            </div>
          </div>
        );
    }
}
