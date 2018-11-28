import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard.js'
import makeCarousel from '../functions/makeCarousel.js'
import CarouselContainer from './CarouselContainer.js'

class Overall extends Component {

    state = {
        macaroons: 'todo'
    };

    recordState = () => {
        console.log(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps !== this.props) {
            this.setState(newProps.prevState)
        }
    };
    render() {
        let boogie = <h2>Yes sir.</h2>
        console.log(this.state)
        return (
            <div className="Overall">
                <CarouselContainer />
                {boogie}
                <button
                    onClick={this.props.prop06}
                >Button.</button>
                <button
                    onClick={this.recordState}
                >button 2</button>
            </div>
        );
    }
}

export default Overall;
