import React from "react"
import ReactDOM from "react-dom"

import images from "./images"

import Profile from "./Components/Profile"

const aviationExplorer = {
  headerData: {
    heroTitle: "Aviation Explorer",
    heroLogo: images.Logo,
    heroStats: {
      boards: 37,
      pins: 8.9,
      likes: 186,
      followers: 8.9,
      following: 1.8,
    },
  },

  contentData: [
    {
      id: 1,
      title: "Aviation 1",
      subtitle: "Some subtitle 1",
      banner: images.Banner1,
      pins: 4850,
      thumbnail_1: images.Thumb1,
      thumbnail_2: images.Thumb1,
      thumbnail_3: images.Thumb1,
    },
    {
      id: 2,
      title: "Aviation 2",
      subtitle: "Some subtitle 2",
      banner: images.Banner2,
      pins: 641,
      thumbnail_1: images.Thumb2,
      thumbnail_2: images.Thumb2,
      thumbnail_3: images.Thumb2,
    },
    {
      id: 3,
      title: "Aviation 3",
      subtitle: "Some subtitle 3",
      banner: images.Banner3,
      pins: 209,
      thumbnail_1: images.Thumb3,
      thumbnail_2: images.Thumb3,
      thumbnail_3: images.Thumb3,
    },
    {
      id: 4,
      title: "Aviation 4",
      subtitle: "Some subtitle 4",
      banner: images.Banner4,
      pins: 1495,
      thumbnail_1: images.Thumb4,
      thumbnail_2: images.Thumb4,
      thumbnail_3: images.Thumb4,
    },
    {
      id: 5,
      title: "Aviation 5",
      subtitle: "Some subtitle 5",
      banner: images.Banner5,
      pins: 1495,
      thumbnail_1: images.Thumb5,
      thumbnail_2: images.Thumb5,
      thumbnail_3: images.Thumb5,
    },
    {
      id: 6,
      title: "Aviation 6",
      subtitle: "Some subtitle 6",
      banner: images.Banner6,
      pins: 75,
      thumbnail_1: images.Thumb6,
      thumbnail_2: images.Thumb6,
      thumbnail_3: images.Thumb6,
    },
  ],
}

ReactDOM.render(
  <Profile profileData={aviationExplorer} />,
  document.querySelector("#root")
)
