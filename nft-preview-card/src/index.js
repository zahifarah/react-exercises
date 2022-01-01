import React from "react"
import ReactDOM from "react-dom"

import Artwork from "./Assets/image-equilibrium.jpg"
import Avatar from "./Assets/image-avatar.png"
import IconEthereum from "./Assets/icon-ethereum.svg"
import IconClock from "./Assets/icon-clock.svg"

import "./CSS/minireset.min.css"
import "./CSS/styles.css"

const NftPreview = ({ nfts }) => {
  const {
    id,
    title,
    artId,
    creator,
    description,
    cost,
    timeLeft,
    artworkUrl,
    avatarUrl,
  } = nfts
  return (
    <div className="container">
      <div className="card__nft" key={id}>
        <div className="artwork__container">
          <img src={artworkUrl} alt="" className="artwork__image" />
        </div>
        <div className="artwork__info">
          <div className="artwork__headers">
            <span className="artwork__title">{title}</span>
            <span className="artwork__id">#{artId}</span>
          </div>
          <p className="artwork__desc">{description}</p>
          <div className="time-and-cost__container">
            <div className="cost__container">
              <img className="eth__icon" src={IconEthereum} alt="" />
              <span className="cost">{cost} ETH</span>
            </div>
            <div className="time-left__container">
              <img className="clock__icon" src={IconClock} alt="" />
              <span className="time-left">{timeLeft}</span>
            </div>
          </div>
          <div className="line"></div>
          <div className="creator__info">
            <span className="avatar__container">
              <img className="avatar__image" src={avatarUrl} alt="" />
            </span>
            <span className="creation-of">
              Creation of <span className="creator">{creator}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const nftInfo = {
  id: 1,
  title: "Equilibrium",
  artId: 3429,
  creator: "Jules Wyvern",
  description: "Our Equilibrium collection promotes balance and calm.",
  cost: 0.041,
  timeLeft: "3 days left",
  artworkUrl: Artwork,
  avatarUrl: Avatar,
}

ReactDOM.render(<NftPreview nfts={nftInfo} />, document.querySelector("#root"))
