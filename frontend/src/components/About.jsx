import React from 'react'
import "../About.css"
import "../Background.css"
export const About = () => {
  return (
    <>
      <div className="about-us-container">
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <h2>About Us</h2>
        <hr style={{ border: "2px solid darkcyan", borderRadius: "20px" }} />
        <p >
          Established in 2019 by an automotive engineer with a vision for <span style={{ fontWeight: 'bold' }}>sustainable and robust mobility solutions</span>, Rhyno EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately driving innovation in the electric vehicle industry. We believe in <span style={{ fontWeight: 'bold' }}>engineering solutions that solve problems</span>.
        </p>
        <p >
          With our first product, we've taken a bold step to create something more than just a vehicle; it's a unique experience of <span style={{ fontWeight: 'bold' }}>elegance, comfort, and style</span>, addressing the pitfalls of conventional electric scooters. Our design prioritizes <span style={{ fontWeight: 'bold' }}>safety</span>, eliminating concerns of fires and ensuring a longer battery lifespan with our battery technology.
        </p>
        <p >
          Perfectly suited for <span style={{ fontWeight: 'bold' }}>fleet operators</span>, especially in tourist-centric locations like Goa, our rugged yet aesthetically appealing scooters are engineered for <span style={{ fontWeight: 'bold' }}>longevity and reliability</span>. Join us as we pioneer a new era in <span style={{ fontWeight: 'bold' }}>sustainable and dependable electric transportation</span>.
        </p>
        <p>
          Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our <span style={{ fontWeight: 'bold' }}>flexible rental model</span>, available for a week or a month, allowing you to experience the Rhyno firsthand before committing. Simply visit our authorized dealerships to unlock this opportunity.
        </p>
        <p>
          Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in <span style={{ fontWeight: 'bold' }}>sustainable and convenient transportation</span>.
        </p>

      </div>
    </>
  )
}
