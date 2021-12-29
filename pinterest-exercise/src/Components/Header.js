import React from "react"

import "../CSS/Header.css"

const Header = ({ header }) => {
  const { heroStatList } = header
  return (
    <header className="hero-header">
      <img className="hero-logo" src={header.heroLogo} alt="" />
      <h1 className="hero-title">{header.heroTitle}</h1>
      <div className="hero-stats">
        <div className="hero-stat boards">
          {heroStatList.boards} <span>Boards</span>
        </div>
        <div className="hero-stat followers">
          {heroStatList.followers} <span>Followers</span>
        </div>
        <div className="hero-stat following">
          {heroStatList.following} <span>Following</span>
        </div>
        <div className="hero-stat likes">
          {heroStatList.likes} <span>Likes</span>
        </div>
        <div className="hero-stat pins">
          {heroStatList.pins} <span>Pins</span>
        </div>
      </div>
    </header>
  )
}

export default Header
