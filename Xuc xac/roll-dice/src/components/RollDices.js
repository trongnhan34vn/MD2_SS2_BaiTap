import React, { Component } from 'react'
import Dices from './Dices'

export default class RollDices extends Component {
    render() {
        return (
            <div>
                <Dices/>
                <button className="btn btn-dark">Roll Dice!</button>
            </div>
        )
    }
}
