import React, { Component } from 'react';

import portfolioItems from "../data/portfolioObjects"
import carouselArrange from "../functions/carouselArrange.js"

// [ ] When making the Css for this, make sure to ...
// [ ] inline styles for x-position to be received as props from the parent, who shifts arrays. 

class PortfolioCard extends Component {
    state = {
        clicked: false
    }


    changeClickedState = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    render() {

        let deploy = this.props.deployedLink;
        let removeDeco = {

            textDecoration: "none",
        }
        let DeployOption = () => {
            if (this.props.deployedLink === 'unavailable') {
                let noWayJose = {
                    textDecoration: "none",
                    cursor: 'not-allowed'
                }
                return <h4 style={noWayJose} >no good deployment</h4>
            } else if (this.props.deployedLink === 'current') {
                return <h4>this <em>is</em> the deployed version.</h4>
            } else {
                return <a rel="noopener noreferrer" target="_blank" href={this.props.deployedLink}> <h4>see deployed</h4></a>
            }
        }

        let CardContent = () => {
            if (this.state.clicked) {
                return (
                    <div>
                        <div className="portfolio-link portfolio-pic">
                            <a target='_blank' href={this.props.githubLink} ><h4 style={removeDeco}>see on GitHub</h4></a>
                        </div>
                        <div className="portfolio-link portfolio-pic">
                            <DeployOption style={removeDeco} />
                        </div></div>
                )
            } else {
                return (
                    // <div>
                    <img src={pic} alt="good picture" title={alt} className="portfolio-pic"></img>
                    // </div>
                )

            }
        }



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
                style={styling}
                onClick={this.changeClickedState}>
                <h4>{this.props.title}</h4>
                <CardContent />
            </div>
        )
    }
}

export default PortfolioCard;