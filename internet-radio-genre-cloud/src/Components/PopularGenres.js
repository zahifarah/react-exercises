import React from "react"

import Genres from "./Genres"

const PopularGenres = ({ genres }) => {
  return (
    <>
      <div className="panel">
        <div className="panel-heading">
          <h1 className="title">Popular Genres</h1>
        </div>
        <div className="panel-body">
          <div className="genre-list">
            <Genres arrayOfGenres={genres} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularGenres
