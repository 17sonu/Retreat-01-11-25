import React, { useState } from "react";
import "./HeroSection.css";
import bgVideo from "../assets/42396-431511598.mp4"; // Replace with your actual video path

const HeroSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="hero-container">
      {/* Background Video */}
      <video
        className="hero-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="hero-content">
        <h1 className="hero-head">Find & Book Your Transformative Retreat</h1>

        {/* Glass Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search the World's Best Retreats"
            className="search-input"
          />
          <button className="search-icon">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Info Section */}
        <div className={`info-section ${showMore ? "expanded" : ""}`}>
          <div className="info-item">
            <i className="fa-solid fa-circle-check"></i>
            <div>
              <h4>Best Price Guarantee</h4>
              <div className="info-details">
                <p>
                  Retreat Guru’s price guarantee means that you can be confident
                  you won’t find lower prices on your retreat anywhere else.
                </p>
              </div>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-globe"></i>
            <div>
              <h4>1% to the Planet</h4>
              <div className="info-details">
                <p>
                  We donate 1% of Retreat Guru’s marketplace booking revenue to
                  protecting the sacred headwaters of the Amazon Rainforest.
                </p>
              </div>
            </div>
          </div>

          <div className="info-item">
            <i className="fa-solid fa-person-praying"></i>
            <div>
              <h4>4000+ Retreats Worldwide</h4>
              <div className="info-details">
                <p>
                  Choose from thousands of retreats hosted by world-renowned
                  retreat centers. There’s a perfect retreat for everyone, no
                  matter the criteria.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Show More / Less Button */}
        <button className="show-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less ▲" : "Show More ▼"}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
