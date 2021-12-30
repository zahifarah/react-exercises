import React from "react"

import "../CSS/Content.css"

const Content = ({ content }) => {
  console.log(content)
  return (
    <main className="content">
      {content.map((card) => (
        <div className="content-card" key={card.id}>
          <div className="card-titles">
            <h1 className="card-title">{card.title}</h1>
            <h2 className="card-subtitle">{card.subtitle}</h2>
          </div>
          <div className="banner">
            <img className="banner-image" src={card.banner} alt="" />
          </div>
          <span className="banner-pin">{card.times_pinned}</span>
          <div className="thumbnails">
            <img src={card.thumbnail_1} className="thumbnail" alt="" />
            <img src={card.thumbnail_2} className="thumbnail" alt="" />
            <img src={card.thumbnail_3} className="thumbnail" alt="" />
          </div>
          <button className="content-card-button">Follow Me</button>
        </div>
      ))}
    </main>
  )
}

export default Content
