import React from "react"
import ReactDOM from "react-dom"

import images from "./images"

import Profile from "./Components/Profile"

import "./CSS/minireset.min.css"
import "./CSS/styles.css"

const aviationExplorer = {
  headerData: {
    heroTitle: "Aviation Explorer",
    heroLogo: images.Logo,
    heroStatList: {
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
      title: "Flying too close to the Sun!",
      subtitle: "Narcissus",
      banner: images.Banner1,
      times_pinned: 4850,
      thumbnail_1: images.Thumb1,
      thumbnail_2: images.Thumb1,
      thumbnail_3: images.Thumb1,
    },
    {
      id: 2,
      title: "Planes",
      subtitle: "Moar planes",
      banner: images.Banner2,
      times_pinned: 641,
      thumbnail_1: images.Thumb2,
      thumbnail_2: images.Thumb2,
      thumbnail_3: images.Thumb2,
    },
    {
      id: 3,
      title: "Intro to paperplanes",
      subtitle: "Delicate hands at work",
      banner: images.Banner3,
      times_pinned: 209,
      thumbnail_1: images.Thumb3,
      thumbnail_2: images.Thumb3,
      thumbnail_3: images.Thumb3,
    },
    {
      id: 4,
      title: "The Future is Now",
      subtitle: "But can you see it?",
      banner: images.Banner4,
      times_pinned: 1495,
      thumbnail_1: images.Thumb4,
      thumbnail_2: images.Thumb4,
      thumbnail_3: images.Thumb4,
    },
    {
      id: 5,
      title: "Space X",
      subtitle: "Time to go to Mars",
      banner: images.Banner5,
      times_pinned: 1495,
      thumbnail_1: images.Thumb5,
      thumbnail_2: images.Thumb5,
      thumbnail_3: images.Thumb5,
    },
    {
      id: 6,
      title: "WW2",
      subtitle: "Never again",
      banner: images.Banner6,
      times_pinned: 75,
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
