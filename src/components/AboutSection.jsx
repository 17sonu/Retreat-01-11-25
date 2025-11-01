import React from "react";
import "./AboutSection.css";
import Aboutimg from "../assets/moto.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-video">
          <iframe
            src="https://player.vimeo.com/video/76979871?h=8272103f6e"
            title="About Us"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="about-text">
          <h2>Who is Retreat Guru?</h2>
          <p>
            We’re a team of 30 people who’ve been on countless retreats. Our
            experiences have been so profound that we built this site to help
            people like you find authentic, safe retreats worldwide.
          </p>
          <button className="learn-more-btn">LEARN MORE</button>
        </div>
      </div>

      <div className="team-photo">
        <img
          src={Aboutimg}
          alt="Our Team"
        />
      </div>
    </section>
  );
};

export default AboutSection;
