import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './contactCard.css';
// import "./Makisu/css/style.css"
//import the $ function (which is an extension of jQuery??) from makisu.js
import $ from "./Makisu/js/makisu.js"

class ContactCard extends Component {

  state = {
  };

  //function for toggling active state
  toggleActive = () => {
    this.setState({ active: !this.state.active })
  }

  componentDidMount() {

    //when the component mounts,
    //store the element as a variable, then
    // var $sashimi = $('.sashimi');

    console.log("We;re about to hit some gnarly shit.");
    console.log($);
    //make the sashimi menu with the makisu function...
    // $sashimi.fn.makisu({
    //   selector: 'dd',
    //   overlap: 0.8,
    //   speed: 0.8,
    // });

  }

  open = () => {
    
  }

  render() {



    return (
      <dl class="list sashimi" onClick={this.open}>
        <dt>Sashimi</dt>
        <dd>Maguro</dd>
        <dd>Toro</dd>
        <dd>Ebi</dd>
        <dd>Saba</dd>
        <dd>Ika</dd>
        <dd>Tako</dd>
        <dd>Tomago</dd>
        <dd>Kani</dd>
        <dd>Katsuo</dd>
        <dd>Maguro</dd>
      </dl>
    );
  }
}

export default ContactCard;