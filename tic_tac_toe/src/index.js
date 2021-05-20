import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
return (
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
  );
}
  
class Board extends React.Component {
  constructor(props) {    
    super(props);    
    this.state = { 
      squares: Array(27).fill(null), 
      xIsNext: true, 
    };  
  }

  handleClick(i) {    
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) { return; }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }


  renderSquare(i) {
    return (
      <Square value={ this.state.squares[i] } 
              onClick={() => this.handleClick(i)}
      />
    );
  }
  
  render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) { status = 'Winner: ' + winner;
        } else if (!this.state.squares.some(sq => sq === null)) {
            status = "Cat’s game."
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        } 
    
    // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="board-row">
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
        </div>
        <div className="board-row">
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
        </div>
      </div>
    );
  }
}
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [9, 10, 11],
      [18, 19, 20],
      [0, 9, 18],
      [1, 10, 19],
      [2, 11, 20],
      [0, 10, 20],
      [2, 10, 18],
      [3, 4, 5],
      [12, 13, 14],
      [21, 22, 23],
      [3, 12, 21],
      [4, 13, 22],
      [5, 14, 23],
      [3, 13, 23],
      [5, 13, 21],
      [6, 7, 8],
      [15, 16, 17],
      [24, 25, 26],
      [6, 15, 24],
      [7, 16, 25],
      [8, 17, 26],
      [6, 16, 26],
      [1, 11, 21],
      [2, 12, 22],
      [4, 14, 24],
      [5, 15, 25],
      [7, 15, 23],
      [6, 14, 22],
      [4, 12, 20],
      [3, 11, 19]
    ];
    for (let z = 0; z < lines.length; z++) {
      const [a, b, c, d, e, f, g, h, i] = lines[z];
      if ((squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) || 
      (squares[d] && squares[d] === squares[d] && squares[e]=== squares[f]) ||
       (squares[g] && squares[g] === squares[g] && squares[h] === squares[i])){
        return squares[a];
      }
    }
    return null;
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
