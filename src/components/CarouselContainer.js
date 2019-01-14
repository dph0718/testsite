import React, { Component } from 'react';
import makeCarousel from '../functions/makeCarousel.js'
import portfolioItems from "../data/portfolioObjects"
import positiono from "../functions/assignPosition.js"
import greenCursor from "../images/green-cursor.png"
import dave from "../images/david-small.png"

class CarouselContainer extends Component {
    state = {
        carouselComponentsArray: [],
    }

    componentWillMount = () => {
        positiono.initializePositions(portfolioItems);
        this.setState({ carouselComponentsArray: portfolioItems })
    }

    scrollLeft = () => {
        positiono.increasePositions(portfolioItems);
        this.setState({ carouselComponentsArray: portfolioItems })
    }

    scrollRight = () => {
        positiono.decreasePositions(portfolioItems);
        this.setState({ carouselComponentsArray: portfolioItems })
    }

    render() {

        let style = {
            cursor: greenCursor, 
            backgroundImage: dave 
        }
        return (
            <div className="carousel-container" style={style}>

                <h1 id='left-arrow'
                    className='nav-arrow'
                    onClick={this.scrollLeft}
                >{"<"}</h1>

                <h1 id='right-arrow'
                    className='nav-arrow'
                    onClick={this.scrollRight}
                >{">"}</h1>

                <div id='carousel-back-row'>
                    {makeCarousel('back')}
                </div>

                <div id='carousel-front-row'>
                    {makeCarousel('front')}
                </div>


            </div>
        )
    }
}

export default CarouselContainer;