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
          {heroStatList.boards} <div>boards</div>
        </div>
        <div className="hero-stat followers">
          {heroStatList.followers} <div>followers</div>
        </div>
        <div className="hero-stat following">
          {heroStatList.following} <div>following</div>
        </div>
        <div className="hero-stat likes">
          {heroStatList.likes} <div>likes</div>
        </div>
        <div className="hero-stat pins">
          {heroStatList.pins} <div>pins</div>
        </div>
      </div>
    </header>
  )
}

export default Header
