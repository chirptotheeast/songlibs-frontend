import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Form extends Component {

    state = {
        songLibinput: []
    }

   submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
   }


    render() {
         const lyricsArr = this.props.song.lyrics.split(" ")
         let newArr = lyricsArr.map((char) => {
             if (char === "___") {
               return char = <input 
               onChange={() => {}}
                type="text" /> 
             } else {
                 return char
             }
         })

        
        console.log(newArr.join(" "));
        return (
          <div>
              
            <form onSubmit={(event) => this.submitHandler(event)}>
               
              <h1>'{this.props.song.name} ...'</h1>
              <p>
                {newArr.map((element) => {
                  return <p>{element}</p>;
                })}
              </p>
              <input type="text" />

              <div>
                <Link to="/topics">
                  <button className="btn vertical">go back</button>
                </Link>
                <button className="btn vertical">listen</button>
                <input type="submit" className="btn vertical" />
              </div>
            </form>
          </div>
        );
    }
}
