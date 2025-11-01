import React, { useState } from "react";
import "./SpotlightSection.css";

const retreats = [
  {
    id: 1,
    category: "Plant Medicine",
    title: "1 to 1 Mushroom Session, near Barcelona, optional overnight stay",
    location: "After the Rains, Barcelona, Spain",
    date: "Package Dates",
    price: "$490",
    rating: "5.00",
    img: "https://images.unsplash.com/photo-1557683316-973673baf926", // sample image
  },
  {
    id: 2,
    category: "Plant Medicine",
    title: "Traumadelics - Post Ceremony Stress Disorder Therapy",
    location: "Bernice Andersen IXCA, Online",
    date: "Flexible Dates",
    price: "From $111",
    rating: "5.00",
    img: "https://images.unsplash.com/photo-1544476915-ed1370594142",
  },
  {
    id: 3,
    category: "Yoga",
    title: "Yoga and Aerial Fitness",
    location: "Sweet Retreats, Barra de Navidad, Mexico",
    date: "Feb 14 - 21, 2026",
    price: "From $2,000 / 8 days",
    rating: "5.00",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
  },
  {
    id: 4,
    category: "Plant Medicine",
    title: "10 Day Ayahuasca Retreat",
    location: "La Medicina, Yurimaguas, Peru",
    date: "December 6 - 15, 2025",
    price: "From $2,650 / 10 days",
    rating: "5.00",
    img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
  },
  {
    id: 5,
    category: "Meditation",
    title: "7 Day Mindful Reset",
    location: "Himalayan Retreats, Dharamshala, India",
    date: "Jan 4 - 11, 2026",
    price: "From $1,200 / 7 days",
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
    {
    id: 6,
    category: "Plant Medicine",
    title: "Traumadelics - Post Ceremony Stress Disorder Therapy",
    location: "Bernice Andersen IXCA, Online",
    date: "Flexible Dates",
    price: "From $111",
    rating: "5.00",
    img: "data:image/jpeg;base64,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", 
  },
  {
    id: 7,
    category: "Yoga",
    title: "Yoga and Aerial Fitness",
    location: "Sweet Retreats, Barra de Navidad, Mexico",
    date: "Feb 14 - 21, 2026",
    price: "From $2,000 / 8 days",
    rating: "5.00",
    img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3",
  },
];

const SpotlightSection = () => {
  const [page, setPage] = useState(0);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(retreats.length / cardsPerPage);

  const nextPage = () => setPage((p) => (p + 1) % totalPages);
  const prevPage = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  const startIndex = page * cardsPerPage;
  const visibleCards = retreats.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className="spotlight-container">
      <div className="spotlight-header">
        <h2>Retreat Spotlight</h2>
        <div className="pagination-info">
          <button onClick={prevPage}>&lt;</button>
          <span>{page + 1} / {totalPages}</span>
          <button onClick={nextPage}>&gt;</button>
        </div>
      </div>

      <div className="card-slider">
        {visibleCards.map((retreat) => (
          <div className="spotlight-card" key={retreat.id}>
            <div className="card-image">
              <img src={retreat.img} alt={retreat.title} />
              <span className="tag">{retreat.category}</span>
            </div>
            <div className="card-content">
              <h3>{retreat.title}</h3>
              <p className="location">{retreat.location}</p>
              <p className="date">{retreat.date}</p>
              <div className="bottom-row">
                <span className="price">{retreat.price}</span>
                <span className="rating">⭐ {retreat.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpotlightSection;
