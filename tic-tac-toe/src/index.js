import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"

const Board = () => {
  return (
    <div className="board">
      <div className="board-row">
        <div className="square">1</div>
        <div className="square">2</div>
        <div className="square">3</div>
      </div>
      <div className="board-row">
        <div className="square">4</div>
        <div className="square">5</div>
        <div className="square">6</div>
      </div>
      <div className="board-row">
        <div className="square">7</div>
        <div className="square">8</div>
        <div className="square">9</div>
      </div>
    </div>
  )
}

const Game = () => {
  return (
    <>
      <div className="container">
        <Board />
      </div>
    </>
  )
}

ReactDOM.render(<Game />, document.querySelector("#root"))
