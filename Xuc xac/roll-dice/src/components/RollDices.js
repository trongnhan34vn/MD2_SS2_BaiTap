import React, { Component } from 'react'
import Dices from './Dices'

// Tạo giá trị cho 2 con xx, từ 1 đến 6
const diceArr = ["one", "two", "three", "four", "five", "six"]

export default class RollDices extends Component {
    constructor(props) {
        super()
        this.state = {
            diceValue: {
                // Gắn giá trị random cho từng xx
                dice1: diceArr[Math.floor(Math.random() * diceArr.length)],
                dice2: diceArr[Math.floor(Math.random() * diceArr.length)],
            },
            // Set biến trạng thái: nếu true thì xx rung, sau 1 khoảng thời gian thì false
            status: false,
        }
    }
    // Tạo hàm rand cho mỗi lần click
    rand = () => {
        let dice1 = diceArr[Math.floor(Math.random() * diceArr.length)];
        let dice2 = diceArr[Math.floor(Math.random() * diceArr.length)];

        this.setState({
            status: true
        })
        setTimeout(() => {
            this.setState({
                diceValue: {
                    dice1: dice1,
                    dice2: dice2
                },
                status: false,
            })
        }, 1000)
    }
    // Chặn spam click 

    debounce = (func, timeout = 1000) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }

    throttle(func, delay = 1000) {
        let lastCall = 0;

        return function (...args) {
            const now = new Date().getTime();

            console.log(now);

            if (now - lastCall < delay) {
                return;
            }

            lastCall = now;
            return func(...args);
        };
    }

    processChange = this.throttle(() => this.rand())

    render() {
        return (
            <div>
                <Dices shaking={this.state.status} diceValue={this.state.diceValue} />
                <button onClick={this.processChange} className="btn btn-dark">Roll Dice!</button>
            </div>
        )
    }
}
