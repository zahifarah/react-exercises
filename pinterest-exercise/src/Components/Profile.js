import React from "react"
import ReactDOM from "react-dom"

const Profile = ({ profileData }) => {
  const { headerData: header, contentData: content } = profileData
  const { heroStats } = header

  return (
    <>
      <img className="hero-logo" src={header.heroLogo} alt="" />
      <h1>{header.heroTitle}</h1>
      <div className="hero-stats">
        <div className="hero-stat">{heroStats.boards}</div>
        <div className="hero-stat">{heroStats.followers}</div>
        <div className="hero-stat">{heroStats.following}</div>
        <div className="hero-stat">{heroStats.likes}</div>
        <div className="hero-stat">{heroStats.pins}</div>
      </div>
    </>
  )
}

export default Profile
