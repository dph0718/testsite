import React, { Component } from 'react';

import portfolioItems from "../data/portfolioObjects"
import carouselArrange from "../functions/carouselArrange.js"

// [ ] When making the Css for this, make sure to ...
// [ ] inline styles for x-position to be received as props from the parent, who shifts arrays. 

class PortfolioCard extends Component {

    render() {

        let row = this.props.row;
        let pos = this.props.position;
        let pic = this.props.portfolioImage;
        let alt = this.props.alt;
        let color = "limegreen";
        let moving = carouselArrange(portfolioItems, pos, row);
        let distance = moving.distance;
        let className = moving.className;
        let display = moving.display;
        let styling = {
            className: className + " portfolio-card",
            left: distance,
            color: color,
            display: display,
        }
        return (
            <div className={styling.className}
                style={styling} >
                    <h4>{this.props.title}</h4>
                <a  href={this.props.githubLink} target="_blank">
                    <img src={pic} alt="good picture" title={alt} className="portfolio-pic"></img>
                </a>
            </div>
        )
    }
}

export default PortfolioCard;