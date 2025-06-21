import React from 'react'
import "../Styles/Card1.css"

const Card2 = () => {
  return (
    <div className="container" style={{background:"linear-gradient(135deg, #fef7ee, #fdf0e385)"}}>
    <div className="left-section">
      <div className="header">
        <span className="small-text">
          <img src="src/assets/card2icon.png" alt="" width={16}/>
          Ensure Faster Emergency Response
        </span>
      </div>

      <h1>Enhancing Response Efficiency with Real-Time Analysis</h1>
      <p className="description">
      Improve roadside assistance efficiency with detailed metrics on response times, service requests, and resolutions. Identify critical areas for faster support and ensure reliable emergency assistance.
      </p>
    </div>

    <div className="right-section">
      <div className="graph-card">
        <div className="graph-header">
          <h2>Real-Time Assistance Support</h2>
          <div className="controls">
            <button className="live-button">24/7 Assistance</button>
          </div>
        </div>
        <div className="graph">
          <img
          
            src="src/assets/roadsideassistance.webp"
            alt="Analytics graph showing growth trend"
            className="graph-image"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card2


