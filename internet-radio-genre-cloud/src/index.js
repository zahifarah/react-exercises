import React from "react"
import ReactDOM from "react-dom"

import arrayOfGenres from "./Data/listOfGenres.json"

import "./CSS/minireset.min.css"
import "./CSS/mixins.css"
import "./CSS/styles.css"

const Panel = ({ genres }) => {
  console.log(genres)
  return (
    <>
      <div className="container flex-row-center">
        <div className="panel">
          <div className="panel-heading">
            <h1>Popular Genres</h1>
          </div>
          <div className="panel-body flex-row-center">
            <div className="genre-list">
              {genres.map((genre) => (
                <>
                  <button className="genre-list-item">{genre}</button>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ReactDOM.render(
  <Panel genres={arrayOfGenres} />,
  document.querySelector("#root")
)
