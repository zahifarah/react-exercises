import React from "react"

import Genre from "./Genre"

const Genres = ({ arrayOfGenres }) => {
  return (
    <>
      {arrayOfGenres.map((genre, index) => {
        let size = "btn-xs"
        if (index < 10) {
          size = "btn-lg"
        } else if (index < 30) {
          size = "btn-md"
        }
        return <Genre size={size} key={index} genre={genre} />
      })}
    </>
  )
}

export default Genres
