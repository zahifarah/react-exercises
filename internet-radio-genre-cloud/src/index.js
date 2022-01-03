import React from "react"
import ReactDOM from "react-dom"

import "./CSS/minireset.min.css"
import "./CSS/styles.css"

const Panel = ({ genresList }) => {
  return (
    <>
      <div className="container">
        <div className="panel">
          <div className="panel-header">
            <h2>Popular Genres</h2>
          </div>
          <div className="genres-list">
            <button className="button">Smooth Jazz</button>
            <button className="button">Rock</button>
            <button className="button">Hip Hop</button>
          </div>
        </div>
      </div>
    </>
  )
}

const genresList = [
  {
    id: 1,
    genre: "Smooth Jazz",
  },
  {
    id: 2,
    genre: "Christmas",
  },
  {
    id: 3,
    genre: "Classic Rock",
  },
  {
    id: 4,
    genre: "Blues",
  },
  {
    id: 5,
    genre: "Easy Listening",
  },
  {
    id: 6,
    genre: "Jazz",
  },
  {
    id: 7,
    genre: "Classical",
  },
  {
    id: 8,
    genre: "Country",
  },
  {
    id: 9,
    genre: "80s",
  },
  {
    id: 10,
    genre: "Rock",
  },
  {
    id: 11,
    genre: "Dance",
  },
  {
    id: 12,
    genre: "Oldies",
  },
  {
    id: 13,
    genre: "House",
  },
  {
    id: 14,
    genre: "Ambient",
  },
  {
    id: 15,
    genre: "Lounge",
  },
]

ReactDOM.render(
  <Panel genresInfo={genresList} />,
  document.querySelector("#root")
)
