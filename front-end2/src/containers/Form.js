import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Howl, Howler } from "howler";
import LoveBalloon from "../audio/loveballoon.mp3";
// import IGotStar from "../audio/igotastar.mp3"
// import BuzzBuzz from "../audio/buzzbuzz.mp3"

//  const audioArray = [
//      {sound: LoveBalloon, label: 'Going Up'},
//      {sound: IGotStar, label: 'I Got A'},
//      {sound: BuzzBuzz, label: 'Buzz'}
//  ]

export default class Form extends Component {
    // SoundPlay = (src) => {
    //     const sound = new Howl({
    //         src
    //     })
    //     sound.play()
    // }

    // RenderButtonAndSound = () => {
    //     return audioArray.map((soundObj, index) => {
    //         <button className="btn" key={index} onClick={this.SoundPlay(soundObj.sound)}>{soundObj.label}</button>
    //     })
    // }

    submitHandler = (event) => {
        event.preventDefault()

        let lyricArray = [
            event.target[0].value,
            event.target[1].value,
            event.target[2].value,
            event.target[3].value,
            event.target[4].value,
            event.target[5].value,
            event.target[6].value,
            event.target[7].value,
            event.target[8].value
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

  



  render() {
      Howler.volume(.80)
      const songaudio = new Audio(LoveBalloon)

      const start = () => {
        songaudio.play()
      }

    const lyricsArr = this.props.song.lyrics.split(" ");
    let newArr = lyricsArr.map((char) => {
      if (char === "___") {
        return (char = <input onChange={() => {}} type="text" />);
      } else {
        return char;
      }
    });

  
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
            <button
              className="btn vertical"
              onClick={start}
            >
              listen
            </button>
            <Link to="/reveal">
              <input type="submit" className="btn vertical" />
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
