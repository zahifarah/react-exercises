import React from "react"

const Genre = ({ genre, size }) => {
  console.log(size)
  return (
    <>
      <button className={`genre-list-item ${size}`}>{genre}</button>
    </>
  )
}

export default Genre
