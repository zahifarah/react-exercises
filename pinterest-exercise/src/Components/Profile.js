import React from "react"

import Header from "./Header"

const Profile = ({ profileData }) => {
  const { headerData: header, contentData: content } = profileData

  return (
    <>
      <div className="container">
        <Header header={header} />
      </div>
    </>
  )
}

export default Profile
