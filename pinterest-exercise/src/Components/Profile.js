import React from "react"

import Header from "./Header"
import Content from "./Content"

const Profile = ({ profileData }) => {
  const { headerData: header, contentData: content } = profileData

  return (
    <>
      <div className="container">
        <Header header={header} />
        <Content content={content} />
      </div>
    </>
  )
}

export default Profile
