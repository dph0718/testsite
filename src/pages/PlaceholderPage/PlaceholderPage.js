import React, { Component } from 'react';
import './placeholderPage.css';
import hourglass from "../../images/hourglass-animated.gif";


class placeholderPage extends Component {

  state = {
    frame: 0,
    typedString: "...",
    wordSoFar: "",
  };

  printOutCharacters = () => {
    //string = whatever string is stored in the state to be "typed" animated
    let string = this.state.typedString;
    let length = string.length;
    //array to break, store, & iterate over string's characters.
    let stringArray = string.split('');
    //stored in this letter array.
    let letArray = [];
    //the string that has been built so far through the iteration of string.
    let totalWord = "";

    //loop until the frame # is reached and push that letter.
    for (let i = 0; i <= this.state.frame; i++) {
      let letter = stringArray[i];
      letArray.push(letter)
    }

    totalWord = letArray.join('');

    let trueFrame;

    if (this.state.frame === length - 1) {
      trueFrame = -1;
    } else {
      trueFrame = this.state.frame += 1
    }
    this.setState({ frame: trueFrame, wordSoFar: totalWord })
  }

  componentDidMount() {
    this.dotInterval = setInterval(this.printOutCharacters, 750)
  }


  render() {
    return (
      <div className="placeholder-page">
        <div className="hourglass-image"><img src={hourglass} /></div>
        <div className="placeholder-message" >
          I'm working on it {this.state.wordSoFar} </div>
      </div>
    );
  }
}

export default placeholderPage;
