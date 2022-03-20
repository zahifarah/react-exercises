import React, { useState, useEffect } from "react"
import LoadingSpinner from "./LoadingSpinner"

import "./App.css"

const App = () => {
  const [data, setData] = useState({ hits: [] })
  const [query, setQuery] = useState("Redux")
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  )
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setData(json)
          setIsLoading(false)
        })
        .catch(() => {
          setErrorMessage("Unable to fetch posts")
          setIsLoading(false)
        })
    }

    fetchData()
  }, [url])

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
    }
  }

  return (
    <div className="container">
      <div className="search-bar">
        <input
          autoFocus
          type="text"
          onKeyDown={handleKeyDown}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          disabled={isLoading}
          className="search-button">
          Search
        </button>
      </div>

      {/* Display Posts */}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ul>
          {data.hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
