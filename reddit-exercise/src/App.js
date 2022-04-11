import React from "react"

import "./App.css"

export default function App() {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <div className="post">
          <div className="reputation">
            <div className="reputation-ele">UP</div>
            <div className="reputation-ele">22</div>
            <div className="reputation-ele">DW</div>
          </div>
          <div className="thumbnail-container">
            <div className="thumbnail"></div>
          </div>
          <div className="information"></div>
        </div>
      </div>
    </div>
  )
}
