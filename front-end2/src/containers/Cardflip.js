// import React, { Component } from "react";
// import ReactCardFlip from "react-card-flip";
// import Reveal from "./Reveal.js"
// import { Link } from "react-router-dom";
// import Songlib from "./Songlib.js"


// export default class Cardflip extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isFlipped: false,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     e.preventDefault();
//     this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
//   }

//   render() {
//     return (
//     <div>
//         <ReactCardFlip
//           isFlipped={this.state.isFlipped}
//           flipDirection="vertical"
//         >
//           <Reveal>

//             <button onClick={this.handleClick}>Click to flip</button>
//           </Reveal>

//           <Songlib>
//             This is the back of the card.
//             <button onClick={this.handleClick}>Click to flip</button>
//           </Songlib>
//         </ReactCardFlip>
//     </div>
//     )
//   }
// }
