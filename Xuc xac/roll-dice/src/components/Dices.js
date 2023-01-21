import React, { Component } from 'react'

export default class Dices extends Component {

    render() {
        let dice1 = this.props.diceValue.dice1;
        let dice2 = this.props.diceValue.dice2;
        let shaking = this.props.shaking;

        return (
            // Nếu true thì add class shaking false thì xoá class shaking
            <div className={shaking ? "dice shaking" : "dice"}>
                <i className={"fa-solid fa-dice-" + dice1}></i>
                <i className={"fa-solid fa-dice-" + dice2}></i>
            </div>
        )
    }
}
