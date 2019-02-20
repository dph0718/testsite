import React, { Component } from 'react';

import CarouselContainer from '../../components/CarouselContainer';
import oldcomputer from '../../images/oldcomputer.png'
import hourglass from "../../images/hourglass-animated.gif";
import './folioPage.css';

//try an import function


//Importing components

class FolioScreen extends Component {

  state = {
    carouselLoaded: false
  };

  reportLoaded = () => {
    if (this.state.carouselLoaded === false) {

      setTimeout(() => {
        this.setState({ carouselLoaded: true })
      }, 2000);

    } else {
      // console.log('it was true.')
      return
    }
  }


  render() {
    const Placeholder = () => {
      if (this.state.carouselLoaded === false) {
        return <div ><img id="hourglass-image"src={hourglass} alt="spinning hourglass"/></div>

      } else {
        return        <div className="Folio">

          <img id="old-computer" alt="computer screen"
            src={oldcomputer}
          />

          <CarouselContainer />
        </div>


      }
    }


    return (
      <div>
        <img className="invisible"
          src={oldcomputer}
          onLoad={this.reportLoaded}
          alt="invisible computer"
           />
        <Placeholder />
      </div>
    );
  }
}


export default FolioScreen;
