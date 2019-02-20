import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './contactCard.css';
import $ from 'jquery'

class ContactCard extends Component {

  state = {
    shadX: 0,
    shadY: 0,
    rotate: 360,
    shadBlur: 0,
    swingTime: 3,
  };

  componentDidMount() {
    // this.blurpee();
  }


  // Just reinstate this.swing() if ever you want it to swing again.
  swing = () => {
    let assignPosition, shadoBlur, rotate;
    if (this.state.shadX === -100) {
      assignPosition = 100;
      shadoBlur = 10;
      rotate = 370
    } else {
      assignPosition = -100;
      shadoBlur = 1;
      rotate = 350;
    }
    this.setState({ shadX: assignPosition, shadY: 0, rotate: rotate, shadBlur: shadoBlur });
  }

  swingSubstitute = () => {
    this.setState({ shadX: !this.state.shadX })
  }



  callinBack = () => {
    // console.log('placeholder callback.')
  }



  render() {

    let shadStyle = {
      // backgroundColor: "blue",
      // textShadow: '20px 20px 2px red',
      // filter: ` drop-shadow(${this.state.shadX}px ${this.state.shadY}px 2px teal)`,
      transform: `rotateZ(${this.state.rotate * 2}deg) rotateY(${this.state.rotate})`,
      transformOrigin: `50% -100%`,
      transition: `all ${this.state.swingTime}s cubic-bezier(0.5, 0, 0.5, 1)`,
    }

    let cardStyle = {
      filter: ` drop-shadow(${this.state.shadX}px ${this.state.shadY}px ${this.state.shadBlur}px  teal)`,
      transform: `rotateZ(${this.state.rotate * 2}deg) rotateY(${this.state.rotate}deg) `,
      transition: `all ${this.state.swingTime}s cubic-bezier(0.5, 0, 0.5, 1)`,
      // transition: `all ${this.state.swingTime}s cubic-bezier(1, 0, 0, 1)`,

      // transform: `rotateY(${this.state.rotate * 2}deg)`,

      // transform: `rotate(${this.state.rotate}deg)`,
      transformOrigin: `50% -500% 0`
    }
    setTimeout(this.swingSubstitute, this.state.swingTime * 1000)

    return (
      <div className="contact-card" style={cardStyle}  >
        <div className='contact-info' style={shadStyle}>
          <h2>find me on: </h2>
          <h2><a href="https://www.linkedin.com/in/david--huffman/" target="_blank">LinkedIn <i className="fa fa-linkedin-square"></i></a></h2>
          <h2><a href="https://github.com/dph0718" target="_blank">GitHub <i className="fa fa-github"></i></a></h2>
        </div>
      </div>
    );
  }
}

export default ContactCard;