import React, { Component } from 'react'

export default class Coin extends Component {
    constructor(props) {    
        super();
        this.state = {
            headSrc: "https://www.pcgs.com/UserImages/21988683o.jpg",
            tailSrc: "https://www.pcgs.com/UserImages/21988683r.jpg"
        }
    }

    render() {
        let coin = this.props.coin;
        let img
        switch (coin.isHead) {
            case true:
                img = this.state.headSrc
                break;
            case false:
                img = this.state.tailSrc
                break;
            default:
                img = this.state.headSrc
                break;
        }
        return (
            <div>
                <p>Out of <span id="flipTimes">{coin.flipTimes}</span> flips, there have been <span id='headTimes'>{coin.headTimes}</span> heads and <span id='tailTimes'>{coin.tailTimes}</span> tails.</p>
                <img id='head' src={img} alt="" />
                {/* <img id='tail' src="" alt="" /> */}
            </div>
        )
    }
}
