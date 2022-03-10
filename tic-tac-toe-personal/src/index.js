import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"

const Game = () => {
  return (
    <>
      <div className="container">
        <div className="status">Turn: X</div>
        <div className="board">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
          <button className="square">4</button>
          <button className="square">5</button>
          <button className="square">6</button>
          <button className="square">7</button>
          <button className="square">8</button>
          <button className="square">9</button>
        </div>
      </div>
    </>
  )
}

ReactDOM.render(<Game />, document.querySelector("#root"))
