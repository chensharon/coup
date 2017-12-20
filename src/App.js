import React, { PureComponent } from 'react';
import Game from './Game';
import './App.css';


class App extends PureComponent {
  render() {
    return (
      <div className="App">
          <Game />
      </div>
    );
  }
}

export default App;
