import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './pullDown.css'

class PullDownBar extends Component {

    state = {

        seconds: 2,
        pullBarState: 'down',
        interval: '',

    }

    componentDidMount() {
        this.setState({
            interval: setInterval(
                () => {
                    this.setState({ seconds: this.state.seconds - 1 }, this.timedHide)
                }, 1000),
        })
    }

    handleMouseEnter = () => {
        clearInterval(this.state.interval);
        if (this.state.pullBarState == 'hidden') {
            this.setState({ pullBarState: 'down' });
        } 
    }

    timedHide = () => {
        let secs = this.state.seconds;
        if (secs === 0) {
            clearInterval(this.state.interval);
            this.setState({ seconds: 1, pullBarState: 'hidden' })
        } 
    }

    handleMouseLeave = () => {
        this.setState({
            seconds: 1, interval: setInterval(
                () => {
                    this.setState({ seconds: this.state.seconds - 1 }, this.timedHide)
                }, 1000)
        })
    }

    stylePullBar = () => {
        let secs = this.state.seconds;
        if (secs === 0) {
            clearInterval(this.state.interval);
            this.setState({ seconds: 1, pullBarState: 'hidden' })
        }
    }

    doOurOptions = () => {
        let options = this.props.options;
        let optionEls = options.map(option => {
            return (
                <div >
                    <Link className='navLink' to={option.link}> {option.name} </Link>
                </div>
            )
        })
        return optionEls;
    }

    render() {
        let dropStyle;

        if (this.state.pullBarState === "down") {
            dropStyle = { position: 'fixed', top: '-5%' }
        } else if (this.state.pullBarState === "hidden") {
            dropStyle = { position: 'fixed', top: '-17%' }
        }

        return (
            <div className="pullDownBar" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={dropStyle}>
                {this.doOurOptions()}
            </div>
        )
    }
}

export default PullDownBar;