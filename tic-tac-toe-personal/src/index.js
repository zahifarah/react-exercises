import React, { Component } from "react"
import ReactDOM from "react-dom"

import "./styles.css"

// do you need "props" argument here?
const Square = (props) => {
  console.log(props.onClick)
  return (
    <button className={`square`} onClick={(e) => props.onClick(e)}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={(e) => this.props.onClick(i, e)}
      />
    )
  }

  render() {
    return (
      <div className="board">
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
    )
  }
}

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  handleClick = (i, e) => {
    e.target.classList.add(this.state.xIsNext ? "x" : "circle")
    const squares = this.state.squares.slice()
    squares[i] = this.state.xIsNext ? "X" : "O"
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    })
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="status">Next Player: X</div>
          <div className="board-container">
            <Board
              squares={this.state.squares}
              onClick={(i, e) => this.handleClick(i, e)}
            />
          </div>
        </div>
      </>
    )
  }
}

ReactDOM.render(<Game />, document.querySelector("#root"))

// const calculateWinner = (squares) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ]
//   const [a, b, c] = lines

//   if ((squares[a] === squares[b]) === squares[c]) {
//     return squares[a]
//   }
//   return null
// }
