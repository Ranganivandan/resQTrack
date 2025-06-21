import React from "react"
import "../Styles/Card1.css"

function Card1() {
  return (
    <div className="container">
      <div className="left-section">
        <div className="header">
          <span className="small-text">
            Know your roadside assistance options better
          </span>
        </div>

        <h1>Roadside Assistance & Safety</h1>
        <p className="description">
        Track roadside assistance requests in real-time and analyze locations, response times, and service effectiveness. Understand emergency trends and optimize support for faster, more reliable help.
        </p>

        {/* <button className="demo-button">Book a demo</button> */}
      </div>

      <div className="right-section">
        <div className="graph-card">
          <div className="graph-header">
            <h2>Roadside Assistance Network Expansion</h2>
            <div className="controls">
              <button className="live-button">Live Now</button>
            </div>
          </div>
          <div className="graph">
            <img
              src="src/assets/roadsideui.webp"
              alt="Analytics graph showing growth trend"
              className="graph-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card1

