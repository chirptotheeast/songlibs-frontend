import React, { Component } from 'react'
import reveal from '../images/cropreveal.png'
import songlib from'../images/sololib.png'
//import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import Songlib from "./Songlib.js"


export default class Reveal extends Component {
 
  render() {
    return (
      <div>
        <div>
          <img className="morevert" src={reveal} alt="logo" />
          <div>
            <div>
              <Link to="/songlib">
                <button className="btnreveal">push</button>
              </Link>
            </div>
          </div>
          <img src={songlib} alt="logo" />
        </div>
      </div>
    );
  }
}
