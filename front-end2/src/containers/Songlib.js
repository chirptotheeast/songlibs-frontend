import React, { Component } from 'react'
import { Link } from "react-router-dom";
import sololib from "../images/sololib.png";
import LoveBalloon from "../audio/loveballoon.mp3";

export default class Songlib extends Component {


    render() {
const songaudio = new Audio(LoveBalloon);

const start = () => {
  songaudio.play();
};

        const lastlib = this.props.songlibs.length - 1;
        return (
          <div>
            <h1>This is your nice,</h1>
            <img src={sololib} alt="logo" />
            <button className="button" onClick={start}>
              sing-it
            </button>
            <p>{this.props.songlibs[lastlib].user_input}</p>
            <div>
              <Link to="/">
                <button className="btn vertbottom">go back</button>
              </Link>
            </div>
          </div>
        );
    }
}
