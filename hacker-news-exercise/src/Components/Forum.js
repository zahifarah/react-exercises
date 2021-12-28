import React from "react"
import PropTypes from "prop-types"

import Header from "./Header/Header"
import PostList from "./Content/PostList"

const Forum = ({ header, content }) => {
  return (
    <>
      <div className="center">
        <Header header={header} />
        <div className="page-space"></div>
        <PostList content={content} />
      </div>
    </>
  )
}
Forum.propTypes = {
  header: PropTypes.shape({
    source: PropTypes.string.isRequired,
    sourceList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
    icon: PropTypes.shape({
      link: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    }),
  }),
  content: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      ranking: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      upvotes: PropTypes.number.isRequired,
      by: PropTypes.string.isRequired,
      submitted_at: PropTypes.string.isRequired,
      comments: PropTypes.number.isRequired,
    })
  ),
}

export default Forum
