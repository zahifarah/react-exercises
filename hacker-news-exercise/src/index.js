import React from "react"
import ReactDOM from "react-dom"

import Logo from "./Assets/y-combinator-logo.png"

import "./CSS/minireset.min.css"
import "./CSS/index.css"

import Header from "./Components/Header"

const App = ({ forum }) => {
  const { header } = forum
  return (
    <>
      <Header header={header} />
    </>
  )
}

const forum = {
  header: {
    source: "Hacker News",
    sourceList: [
      {
        id: 1,
        text: "new",
      },
      {
        id: 2,
        text: "past",
      },
      {
        id: 3,
        text: "comments",
      },
      {
        id: 4,
        text: "ask",
      },
      {
        id: 5,
        text: "show",
      },
      {
        id: 6,
        text: "jobs",
      },
      {
        id: 7,
        text: "submit",
      },
    ],
    icon: {
      link: "#",
      logo: Logo,
    },
  },
}

ReactDOM.render(<App forum={forum} />, document.querySelector("#root"))
