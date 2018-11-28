import React, { Component } from 'react';

import CarouselContainer from '../components/CarouselContainer';

//Importing components

class FolioScreen extends Component {

  state = {

  };

  render() {

    return (
      <div className="Folio">
              <img id="old-computer"
        src="images/oldcomputer.png" />
              {/* <img id="old-computer"
        src="images/oldcomputerframe.png" /> */}
        <CarouselContainer />
      </div>
    );
  }
}

export default FolioScreen;
