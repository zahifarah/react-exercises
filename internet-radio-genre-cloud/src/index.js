import React from "react"
import ReactDOM from "react-dom"

import PopularGenres from "./Components/PopularGenres"

import arrayOfGenres from "./Data/listOfGenres.json"

import "./CSS/minireset.min.css"
import "./CSS/styles.css"

ReactDOM.render(
  <PopularGenres arrayOfGenres={arrayOfGenres} />,
  document.getElementById("root")
)
