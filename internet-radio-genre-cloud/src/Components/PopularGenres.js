import React from "react"

import Genres from "./Genres"

const PopularGenres = ({ genres }) => {
  return (
    <>
      <div className="container flex-row-center">
        <div className="panel">
          <div className="panel-heading">
            <h1>Popular Genres</h1>
          </div>
          <div className="panel-body flex-row-center">
            <div className="genre-list">
              <Genres arrayOfGenres={genres} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularGenres
