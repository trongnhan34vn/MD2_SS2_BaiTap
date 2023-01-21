import logo from './logo.svg';
import './App.css';
import RollDices from './components/RollDices';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RollDices/>
      </div>
    );
  }
}

export default App;
