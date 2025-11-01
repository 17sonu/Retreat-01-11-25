import React from "react";
import "./RetreatCards.css";

const RetreatCards = () => {
  const retreatCards = [
    {
      subtitle: "Promote your Event",
      title: "List a Retreat",
      text: "Retreat Guru has the largest collection of transformative experiences. List your event on Retreat Guru’s retreat marketplace today and unlock exposure to hundreds of thousands of highly engaged retreat-seekers globally.",
      image: "https://images.unsplash.com/photo-1552650272-b8a34e21bc4b",
    },
    {
      subtitle: "Free Online Experience",
      title: "The Journey Within: Synthesis Circles",
      text: "Join a live event including a psychedelic Q&A, plus guided sound healing and breathwork to deepen awareness, connection, and integration.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      subtitle: "The All-In-One Solution",
      title: "Retreat Guru RMS",
      text: "Streamline and simplify the running of your retreats, with our fully integrated and unified Retreat Management System built exclusively for retreat centers.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
  ];

  return (
    <section className="retreat-section">
      <div className="retreat-row">
        {retreatCards.map((card, index) => (
          <div className="retreat-card" key={index}>
            <img src={card.image} alt={card.title} />
            <div className="retreat-overlay">
              <h4>{card.subtitle}</h4>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <button className="learn-btn">LEARN MORE</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RetreatCards;
