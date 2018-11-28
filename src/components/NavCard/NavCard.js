import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './NavCard.css';


class NavCard extends Component {

  state = {
    active: false,
  };

  //function for toggling active state
  toggleActive = () => {
    this.setState({ active: !this.state.active })
  }

  //makes the card's text html formattable. But dangerously so. 
  textToHTML = () => {
    return { __html: this.props.text }
  }

  render() {
    let defaultStyle = {
      cardStyle: {
        height: `70vh`,
        width: '20vw',
        zIndex: '2',
        left: this.props.xDisplace,
      },

      imageStyle: {
        backgroundImage: `url(${this.props.backgroundImage})`,
        height: '100%',
        width: '100%',
        filter: `blur(5px) sepia(90%) brightness(50%) hue-rotate(${this.props.hue})`,
      },

      titleStyle: {
        fontSize: '2em',
        filter: 'blur(0px)',
        textShadow: '8px 8px 12px black, -8px -8px 12px black',
      },

      textStyle: {
        fontSize: '1em',
        filter: 'blur(3px)',
        fontWeight: 'normal',
        textShadow: '1.5px 1.5px 1.5px black, -1.5px -1.5px 1.5px black',
      }
    }

    let activeStyle = {
      cardStyle: {
        height: `77vh`,
        width: '22vw',
        zIndex: '4',
        left: this.props.xDisplace,
      },

      imageStyle: {
        backgroundImage: `url(${this.props.backgroundImage})`,
        height: '100%',
        width: '100%',
        filter: 'blur(1px) sepia(0%) brightness(140%) hue-rotate(0) '
      },

      titleStyle: {
        fontSize: '1.7em',
        filter: 'blur(2px)',
        textShadow: '2px 2px 4px black, -2px -2px 4px black',
      },

      textStyle: {
        top: '30%',
        filter: 'blur(0px)',
        fontSize: '1.5em',
        fontWeight: 'bolder',
        textShadow: '8px 8px 8px rgba(2, 2, 2, 0.3), -8px -8px 8px rgba(2, 2, 2, 0.3)',
      }
    }

    let cardStyle;
    let imageStyle;
    let titleStyle;
    let textStyle;

    //sets the style based on whether it's active
    if (this.state.active) {
      cardStyle = activeStyle.cardStyle;
      imageStyle = activeStyle.imageStyle;
      titleStyle = activeStyle.titleStyle;
      textStyle = activeStyle.textStyle;
    } else {
      cardStyle = defaultStyle.cardStyle;
      imageStyle = defaultStyle.imageStyle;
      titleStyle = defaultStyle.titleStyle;
      textStyle = defaultStyle.textStyle;
    }

    return (
      <Link to={this.props.link} >
        <div className={"Card "} id={this.props.id} onMouseEnter={this.toggleActive} onMouseLeave={this.toggleActive} style={cardStyle}>
          <div className={"backgroundDiv "} style={imageStyle} ></div>
          <h2 className={"cardTitle "} style={titleStyle}>{this.props.title}</h2>
          <p className={"cardText "} dangerouslySetInnerHTML={this.textToHTML()} style={textStyle}></p>
        </div>
      </Link>
    );
  }
}

export default NavCard;