import React, { useRef } from "react";
import "./StoriesSection.css";

const StoriesSection = () => {
  const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeftStart = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    scrollRef.current.isDown = false;
  };

  const handleMouseUp = () => {
    scrollRef.current.isDown = false;
  };

  const handleMouseMove = (e) => {
    const slider = scrollRef.current;
    if (!slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 1.5; // scroll speed
    slider.scrollLeft = slider.scrollLeftStart - walk;
  };

  return (
    <section className="stories-section">
      <div className="stories-header">
        <h2>Stories and Inspirations</h2>
        <button className="read-more-btn">READ MORE</button>
      </div>

      <div
        className="stories-container"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {[...Array(7)].map((_, i) => (
          <div className="story-card" key={i}>
            <img
              src={`https://picsum.photos/400/250?random=${i + 1}`}
              alt={`Story ${i + 1}`}
            />
            <div className="story-overlay">
              <h3>Story Title {i + 1}</h3>
              <p>Aug {20 + i} · {8 + i} min read</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoriesSection;
