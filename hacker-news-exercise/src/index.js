import React from "react"
import ReactDOM from "react-dom"

import Logo from "./Assets/y-combinator-logo.png"

import "./CSS/minireset.min.css"
import "./CSS/index.css"

import Header from "./Components/Header/Header"
import Content from "./Components/Content/Content"

const App = ({ header, content }) => {
  return (
    <>
      <Header header={header} />
      <div className="page-space"></div>
      <Content content={content} />
    </>
  )
}

const headerData = {
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
}

const contentInfo = [
  {
    id: 1,
    ranking: 1,
    title: "Nasa kills 50 plants!",
    source: "evolution.com",
    upvotes: 2821,
    user: "Acrah",
    submitted_at: "2021-12-21 07:30:00",
    comments: 1203,
  },
  {
    id: 2,
    ranking: 2,
    title:
      "Family owned Zammaria corporation takes-on the F&B industry in Europe",
    source: "wsj.com",
    upvotes: 1993,
    user: "ThE_nYghTT",
    submitted_at: "2021-12-20 12:30:00",
    comments: 620,
  },
  {
    id: 3,
    ranking: 3,
    title: "Lebanon: the story of a failed nation",
    source: "decrypt.com",
    upvotes: 1566,
    user: "vaylx",
    submitted_at: "2019-10-17 12:30:00",
    comments: 900,
  },
  {
    id: 4,
    ranking: 4,
    title:
      "Netflix Embraces GraphQL Microservices for Rapid Application Development",
    source: "infoq.com",
    upvotes: 789,
    user: "raminos",
    submitted_at: "2021-12-16 07:30:00",
    comments: 183,
  },
  {
    id: 5,
    ranking: 5,
    title: "Why be happy when you can be sad? Emo teenagers speak out",
    source: "sexandscandal.com",
    upvotes: 550,
    user: "dOwN_wiTh_CaPiTaLi$m",
    submitted_at: "2021-04-07 12:30:00",
    comments: 800,
  },
  {
    id: 6,
    ranking: 6,
    title: "Ccoolccat: not so cool after all",
    source: "basho.com",
    upvotes: 420,
    user: "Walt3r_Mur$h",
    submitted_at: "2021-12-01 12:30:00",
    comments: 69,
  },
]

ReactDOM.render(
  <App header={headerData} content={contentInfo} />,
  document.querySelector("#root")
)
