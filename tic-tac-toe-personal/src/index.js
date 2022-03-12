import React, { Component } from "react"
import ReactDOM from "react-dom"

import "./styles.css"

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  renderSquare(i) {
    return <button className="square">{i}</button>
  }

  render() {
    console.log(this.state)
    return (
      <>
        <div className="container">
          <div className="status">Turn: X</div>
          <div className="board-container">
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
          </div>
        </div>
      </>
    )
  }
}

ReactDOM.render(<Game />, document.querySelector("#root"))
