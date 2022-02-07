import React from "react"

import Genres from "./Genres"

const PopularGenres = ({ arrayOfGenres }) => {
  return (
    <>
      <div className="panel">
        <div className="panel-header">
          <h1 className="title">Popular Genres</h1>
        </div>
        <div className="panel-body">
          <div className="genre-list">
            <Genres arrayOfGenres={arrayOfGenres} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularGenres
