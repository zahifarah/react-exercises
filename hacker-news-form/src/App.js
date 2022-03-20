import React, { useState, useEffect } from "react"
import LoadingSpinner from "./LoadingSpinner"

import "./App.css"

const App = () => {
  const [data, setData] = useState({ hits: [] })
  const [query, setQuery] = useState("")
  const [url, setUrl] = useState(
    `http://hn.algolia.com/api/v1/search?tags=front_page`
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      fetch(url)
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch(() => setIsError(true))
        .then(() => setIsLoading(false))
    }

    fetchData()
    setQuery("")
  }, [url])

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
    }
  }

  return (
    <div className="container">
      <form
        className="search-form"
        onSubmit={(event) => {
          setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          event.preventDefault()
        }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" disabled={isLoading} className="search-button">
          Search
        </button>
      </form>

      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ul>
          {data.hits.map((item) => {
            return (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default App
