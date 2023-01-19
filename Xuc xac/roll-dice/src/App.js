import logo from './logo.svg';
import './App.css';
import RollDices from './components/RollDices';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      diceArr: ["one", "two", "three", "four", "five", "six"],
      dice1: "",
      dice2: ""
    }
  }
  diceInit = () => {
    let diceArr = this.state.diceArr;
    let dice1 = diceArr[Math.floor(Math.random() * diceArr.length)];
    let dice2 = diceArr[Math.floor(Math.random() * diceArr.length)];
    this.setState({
      dice1: dice1,
      dice2: dice2
    })
  }
  render() {
    return (
      <div className="App">
        <RollDices diceArr={this.state.diceArr} diceInit = {this.diceInit} />
      </div>
    );
  }
}

export default App;
