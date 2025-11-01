import React from "react";
import "./DiscoverSection.css";

const retreats = [
  {
    title: "Upcoming Retreats",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format",
  },
  {
    title: "Retreats Near Me",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format",
  },
  {
    title: "Affordable Retreats",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format",
  },
  {
    title: "Deluxe Retreats",
    img: "https://images.unsplash.com/photo-1584824486539-53bb4646bdbc?q=80&w=1000&auto=format",
  },
  {
    title: "Retreat for the Weekend",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format",
  },
  {
    title: "Top-Rated Retreats",
    img: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=1000&auto=format",
  },
];

const DiscoverSection = () => {
  return (
    <section className="discover-section">
      <h2>Discover Your Retreat</h2>
      <div className="retreat-grid">
        {retreats.map((retreat, index) => (
          <div key={index} className="retreat-card1">
            <img src={retreat.img} alt={retreat.title} />
            <div className="retreat-overlay">
              <h3>{retreat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverSection;
