import React from 'react'
import "../Styles/Benifit.css"

const Benifits = () => {
  return (
    <section className="features-section">
    <div className="features-header">
      <div className="features-label">
        <span className="icon lock-icon"></span>
        <span>Our Features</span>
      </div>
      <h2>Maximize the efficiency of your roadside assistance</h2>
      <p>
      Connect your services, connect your support. With a wide network of roadside assistance providers, help is just a click away whenever you need it.
      </p>
    </div>

    <div className="features-grid">
      <div className="feature-card">
        <span className="icon lock-icon"></span>
        <h3>Trusted Mechanics Near You</h3>
        <p>
        Enhance roadside support. Track service efficiency, manage requests, and make data-driven decisions to improve response times.
        </p>
      </div>

      <div className="feature-card">
        <span className="icon grid-icon"></span>
        <h3>Seamless Assistance Application Access</h3>
        <p>
          All your data in one place. With TrendTise's intuitive interface, view all key metrics in an organized and
          visually clear dashboard for easy analysis.
        </p>
      </div>

      <div className="feature-card">
        <span className="icon chart-icon"></span>
        <h3>Instant Response Tracking</h3>
        <p>
        Stay informed about roadside assistance requests. Get real-time updates, ensuring quick response and improved safety on the road.
        </p>
      </div>

      <div className="feature-card">
        <span className="icon users-icon"></span>
        <h3>Emergency QR Scanner</h3>
        <p>
        Quickly access critical information in emergencies. Instantly notify family, emergency contacts, and nearby hospitals for rapid assistance.
        </p>
      </div>
    </div>
  </section>
  )
}

export default Benifits