import React from "react"

import Genre from "./Genre"

const Genres = ({ arrayOfGenres }) => {
  return (
    <>
      {arrayOfGenres.map((genre) => (
        <Genre key={arrayOfGenres.indexOf(genre)} genre={genre} />
      ))}
    </>
  )
}

export default Genres
