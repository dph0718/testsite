import React, { Component } from 'react';

import CarouselContainer from '../components/CarouselContainer';
import oldcomputer from '../images/oldcomputer.png'
//Importing components

class FolioScreen extends Component {

  state = {

  };

  render() {
    console.log('folio has load')

    return (
      <div className="Folio">
        <img id="old-computer"
          src={oldcomputer} />
        {/* <img id="old-computer"
        src="images/oldcomputerframe.png" /> */}
        <CarouselContainer />
      </div>
    );
  }
}

export default FolioScreen;
