import React, { Component } from "react"
import ReactDOM from "react-dom"

import "./styles.css"

const Square = (props) => {
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
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick = (i, e) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()

    if (calculateWinner(squares) || squares[i]) {
      return
    }

    e.target.classList.add(this.state.xIsNext ? "x" : "circle")

    squares[i] = this.state.xIsNext ? "X" : "O"

    this.setState({
      // with or without brackets?
      history: history.concat({
        squares: squares,
      }),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    })
  }

  jumpTo = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    })
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move # " + move : "Go to game start"
      return (
        <span key={move} className="move">
          <button className="move-btn" onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </span>
      )
    })

    let status = winner
      ? `Winner: ${winner}`
      : ` Next player: ${this.state.xIsNext ? "X" : "O"}`

    return (
      <>
        <div className="container">
          <div className="status">{status}</div>
          <div className="board-container">
            <Board
              squares={current.squares}
              onClick={(i, e) => this.handleClick(i, e)}
            />
          </div>
          <div className="moves">{moves}</div>
        </div>
      </>
    )
  }
}

ReactDOM.render(<Game />, document.querySelector("#root"))

// Given an array of 9 squares, this function will check for a winner
// and return 'X', 'O', or null as appropriate.
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
