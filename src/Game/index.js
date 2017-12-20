import React, { PureComponent } from 'react';
import './index.css';

class Game extends PureComponent {
    render() {
        return (
            <div className="game-wrapper">
              <div className="game">
                <div className="opponents">
                    <div className="player">
                        <div className="title">Aviram</div>
                        <div className="cards">
                            <div className="card"></div>
                            <div className="card"></div>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div className="cards">
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                </div>
                <div className="actions">
                    <div className="action">Income</div>
                    <div className="action">Foreign aide</div>
                    <div className="action">Coup</div>
                </div>
            </div>
          </div>
        );
    }
}

export default Game;
