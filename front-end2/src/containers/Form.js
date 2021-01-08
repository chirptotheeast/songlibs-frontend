import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import { Howl, Howler } from "howler";
// import LoveBalloon from "../audio/love.balloon.mp3";

export default class Form extends Component {
  state = {
    songLibinputzero: "",
    songLibinputone: [],
    songLibinputtwo: [],
    songLibinputthree: [],
    songLibinputfour: [],
    songLibinputfive: [],
    songLibinputsix: [],
    songLibinputseven: [],
    songLibinputeight: [],
  };

    submitHandler = (event) => {
        event.preventDefault()

        let lyricArray = [
            event.target[0].value,
            event.target[1].value
        ]

        let lyricCopy = this.props.song.lyrics
        console.log(lyricCopy, lyricArray)
        
        let user_input = lyricArray.map((lyric) => {
            
            return lyricCopy.replace("___", lyric)
         
        })

        console.log(user_input.join())
         

            let data = {
              user_id: 10,
              song_id: this.props.song.id,
              user_input: user_input.join(),
            };

         const requestOptions = {
             method: "POST",
             headers: { "Content-Type": "application/json"},
             body: JSON.stringify(data)
         }
         fetch("http://localhost:3000/songylibs", requestOptions)
          .then((response) => response.json())
          .then((data) => console.log(data))
     
  };

  
  
//   async componentDidMount(){
//          let data = {
//            user_id: 10,
//            song_id: this.props.song.id,
//            user_input: this.state.songLibinputzero
//          };
         
//          console.log(data)
//          const requestOptions = {
//              method: "POST",
//              headers: { "Content-Type": "application/json"},
//              body: JSON.stringify(data)
//          }
//          const response = await fetch("http://localhost:3000/songylibs", requestOptions);
//          const updateuserData = await response.json()
//          this.setState({data: updateuserData})

//   }




  render() {
    const lyricsArr = this.props.song.lyrics.split(" ");
    let newArr = lyricsArr.map((char) => {
      if (char === "___") {
        return (char = <input onChange={() => {}} type="text" />);
      } else {
        return char;
      }
    });

    //console.log(newArr.join(" "));
    return (
      <div>
        <form onSubmit={(event) => this.submitHandler(event)}>
          <h1>'{this.props.song.name} ...'</h1>
          <p>
            {newArr
              .map((element) => <span>{element}</span>)
              .reduce((prev, curr) => [prev, " ", curr])}
          </p>

          <div>
            <Link to="/topics">
              <button className="btn vertical">go back</button>
            </Link>
            <button className="btn vertical">listen</button>
            <Link to="/reveal">
            <input type="submit" className="btn vertical" />
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
