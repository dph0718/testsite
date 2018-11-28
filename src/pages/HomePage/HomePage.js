import React, { Component } from 'react';
import stackNavCards from '../../functions/stackNavCards';
import './homePage.css';

class HomePage extends Component {

  state = {

  };

  render() {

    return (
      <div className="Home">
        <div id="navCardContainer">
          {stackNavCards()}
        </div>
      </div>
    );
  }
}

export default HomePage;
