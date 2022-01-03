import React from "react"
import ReactDOM from "react-dom"

import "./CSS/layout.css"
import "./CSS/minireset.min.css"

import CardList from "./Components/CardList"

const productBacklog = [
  {
    id: 1,
    text: "FrontEnd",
  },
  {
    id: 2,
    text: "Finished page - for Cluster",
  },
  {
    id: 3,
    text: "Frontend - Branch / Cluster / Question page setup",
  },
  {
    id: 4,
    text: "Backend",
  },
  {
    id: 5,
    text: "Coffee bean Tree Theme",
  },
  {
    id: 6,
    text: "AJAX for each templates",
  },
  {
    id: 7,
    text: "Write instruction & Make questions based on the Virtual Tree and Repo classes.",
  },
  {
    id: 8,
    text: "JUnit transition into Mockito lesson",
  },
  {
    id: 9,
    text: "Mockito",
  },
  {
    id: 10,
    text: "Display graduation page of newly blossomed Java tree",
  },
  {
    id: 11,
    text: "finished tree html page ???????",
  },
]

const parkingLot = [
  {
    id: 1,
    text: "Home page: Google Log In/Github API ---Update: Have Google Cloud account for this",
  },
  {
    id: 2,
    text: "Screenshots of steps needed to setup test class w/annotation & imports",
  },
  {
    id: 3,
    text: "blank templates of Java/ Spring/ CSS / JS / HTML",
  },
  {
    id: 4,
    text: "hide radio button?",
  },
  {
    id: 5,
    text: "pop up that page is completed",
  },
]

const phoneFeatures = [
  {
    key: 1,
    text: "Subwoofer",
  },
  {
    key: 2,
    text: "Non-porous, washable",
  },
  {
    key: 3,
    text: "Wings",
  },
  {
    key: 4,
    text: "Beveled Bezel",
  },
  {
    key: 5,
    text: "Bezeled Bevel",
  },
  {
    key: 6,
    text: "Seedless",
  },
]

const listOfCards = [
  {
    id: 1,
    title: "Parking Lot",
    children: parkingLot,
  },
  {
    id: 2,
    title: "Product Backlog",
    children: productBacklog,
  },
  {
    id: 3,
    title: "Phone Features",
    children: phoneFeatures,
  },
]

ReactDOM.render(
  <CardList cards={listOfCards} />,
  document.querySelector("#root")
)
