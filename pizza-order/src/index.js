import React, { Component } from "react"
import ReactDOM from "react-dom"

import "./index.css"

class PizzaOrder extends Component {
  constructor() {
    super()
    this.state = {
      // name: "React",
    }

    this.onValueChange = this.onValueChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  onValueChange(event) {
    // console.log('"checked": ', event.target.checked)
    // console.log('"target": ', event.target.value)
    this.setState({
      selectedOption: event.target.value,
    })
  }

  formSubmit(event) {
    event.preventDefault()
    console.log(this.state.selectedOption)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.formSubmit}>
          <div className="title">
            <h2>Order Your Pizza</h2>
          </div>
          <div className="section-title">Size</div>
          <div className="size">
            <div className="radio">
              <label>
                <input
                  id="first"
                  type="radio"
                  value="small"
                  checked={this.state.selectedOption === "small"}
                  onChange={this.onValueChange}
                />
                Small
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="medium"
                  checked={this.state.selectedOption === "medium"}
                  onChange={this.onValueChange}
                />
                Medium
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="large"
                  checked={this.state.selectedOption === "large"}
                  onChange={this.onValueChange}
                />
                Large
              </label>
            </div>
          </div>
          <button id="btn-submit" type="submit">
            Send Order
          </button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<PizzaOrder />, document.querySelector("#root"))
