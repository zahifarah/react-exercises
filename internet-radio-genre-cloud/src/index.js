import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"

const Panel = ({ genresList }) => {
  return (
    <>
      <h1>Hello World</h1>
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
