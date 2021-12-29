import React from "react"

import Header from "./Header"

const Profile = ({ profileData }) => {
  const { headerData: header, contentData: content } = profileData

  return (
    <>
      <div className="container">
        <Header header={header} />
        <div className="content">
          {content.map((card) => (
            <h2>{card.title}</h2>
          ))}
        </div>
      </div>
    </>
  )
}

export default Profile
