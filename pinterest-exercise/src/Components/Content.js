import React from "react"

const Content = ({ content }) => {
  console.log(content)
  return (
    <main className="content">
      {content.map((card) => (
        <div className="content-card" key={card.id}>
          <div className="card-titles">
            <h1>{card.title}</h1>
            <h2>{card.subtitle}</h2>
          </div>
          <div className="banner">
            <img className="banner-image" src={card.banner} alt="" />
            <span className="banner-pin">{card.pin}</span>
          </div>
          <div className="thumbnails">
            <img src={card.thumbnail_1} className="thumbnail-1" alt="" />
            <img src={card.thumbnail_2} className="thumbnail-2" alt="" />
            <img src={card.thumbnail_3} className="thumbnail-3" alt="" />
          </div>
        </div>
      ))}
    </main>
  )
}

export default Content
