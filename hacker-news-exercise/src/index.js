import React from "react"
import ReactDOM from "react-dom"

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
        text: "threads",
      },
      {
        key: 3,
        text: "past",
      },
      {
        key: 4,
        text: "comments",
      },
      {
        key: 5,
        text: "ask",
      },
      {
        key: 6,
        text: "show",
      },
      {
        key: 7,
        text: "jobs",
      },
      {
        key: 8,
        text: "submit",
      },
    ],
    icon: {
      link: "#",
      imageSource: "https://news.ycombinator.com/y18.gif",
    },
  },
}

ReactDOM.render(<App forum={forum} />, document.querySelector("#root"))
