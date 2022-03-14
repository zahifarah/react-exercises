import React, { Component } from "react"
import ReactDOM from "react-dom"

import "./styles.css"

const Square = (props) => {
  return (
    <button
      className={`square ${props.xIsNext ? "circle" : "x"}`}
      onClick={(e) => props.onClick(e)}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  handleClick = (i, e) => {
    console.log(e.target)
    const squares = this.state.squares.slice()
    squares[i] = this.state.xIsNext ? "X" : "O"
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    })
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={(e) => this.handleClick(i, e)}
        xIsNext={this.state.xIsNext}
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
  render() {
    return (
      <>
        <div className="container">
          <div className="status">Next Player: X</div>
          <div className="board-container">
            <Board />
          </div>
        </div>
      </>
    )
  }
}

ReactDOM.render(<Game />, document.querySelector("#root"))
