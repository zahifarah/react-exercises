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
        key: 1,
        text: "new",
      },
      {
        key: 2,
        text: "past",
      },
      {
        key: 3,
        text: "comments",
      },
      {
        key: 4,
        text: "ask",
      },
      {
        key: 5,
        text: "show",
      },
      {
        key: 6,
        text: "jobs",
      },
      {
        key: 7,
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
