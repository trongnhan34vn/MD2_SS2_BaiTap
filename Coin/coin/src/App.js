import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Coin from './components/Coin';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      coin: {
        flipTimes: 3,
        headTimes: 0,
        tailTimes: 0,
        isHead: true
      }
    }
  }
  flip = () => {
    let flipTimes = this.state.coin.flipTimes;
    let headTimes = this.state.coin.headTimes;
    let tailTimes = this.state.coin.tailTimes;
    let isHead = this.state.coin.isHead;
    if (flipTimes > 0) {
      flipTimes = flipTimes - 1;
      if (this.rand()) {
        isHead = true;
        headTimes = headTimes + 1;
      } else {
        tailTimes = tailTimes + 1;
        isHead = false;
      }
    } else {
      headTimes = this.state.coin.headTimes;
      tailTimes = this.state.coin.tailTimes;
      isHead = this.state.coin.isHead;
      alert("Bỏ đi mà làm người!");
    }
    this.setState({
      coin: {
        flipTimes: flipTimes,
        headTimes: headTimes,
        tailTimes: tailTimes,
        isHead: isHead,
      }
    })
  }
  reset = () => {
    alert("Reset thành công!")
    this.setState({
      coin: {
        flipTimes: 3,
        headTimes: 0,
        tailTimes: 0,
        isHead: true,
      }
    })
  }
  rand = () => {
    let rand = Math.random() < 0.5
    console.log(rand);
    return rand
  }
  render() {
    return (
      <div className="App">
        <h1>Let's flip a coin!</h1>
        <button className='btn btn-primary' onClick={this.flip}>Flip me!</button>
        <button onClick={this.reset} className="btn btn-danger">Reset</button>
        <Coin coin={this.state.coin} />
      </div>
    );
  }
}

export default App;
