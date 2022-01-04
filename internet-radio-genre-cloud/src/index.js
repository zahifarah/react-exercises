import React from "react"
import ReactDOM from "react-dom"

import "./CSS/minireset.min.css"
import "./CSS/mixins.css"
import "./CSS/styles.css"

const Panel = ({ genresList }) => {
  return (
    <>
      <div className="container flex-row-center">
        <div className="panel">
          <div className="panel-heading">
            <h1>Popular Genres</h1>
          </div>
          <div className="panel-body flex-row-center">
            <div className="genre-list">
              <button className="genre-list-item">Smooth Jazz</button>
              <button className="genre-list-item">Christmas</button>
              <button className="genre-list-item">Classic Rock</button>
              <button className="genre-list-item">Blues</button>
              <button className="genre-list-item">Easy Listening</button>
              <button className="genre-list-item">Jazz</button>
              <button className="genre-list-item">Classical</button>
              <button className="genre-list-item">Country</button>
              <button className="genre-list-item">80s</button>
              <button className="genre-list-item">Rock</button>
              <button className="genre-list-item">Dance</button>
              <button className="genre-list-item">Oldies</button>
              <button className="genre-list-item">House</button>
            </div>
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
