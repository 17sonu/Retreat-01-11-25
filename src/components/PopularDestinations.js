import React from "react";
import "./PopularDestinations.css";

const destinations = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    name: "Rishikesh",
    country: "India",
    img: "https://media.gettyimages.com/id/931057198/photo/pictures-of-diverse-faces-and-people-in-india-representing-the-daily-life-in-the-region-of.jpg?s=612x612&w=0&k=20&c=0MJgiTYrh8TSSYTNPmL3im6Aqb4Qwe7qSpSljwurT0g=",
  },
  {
    id: 3,
    name: "Tulum",
    country: "Mexico",
    img: "https://h2.gifposter.com/bingImages/CityofGuanajuato_EN-US1849642207_1920x1080.jpg_mb",
  },
  {
    id: 4,
    name: "Costa Rica",
    country: "Central America",
    img: "https://media.gettyimages.com/id/1496441789/photo/a-woman-balancing-on-a-log-under-a-palm-tree-while-watching-sunset-from-a-beach-in-costa-rica.jpg?s=612x612&w=0&k=20&c=NzZ5YyV_8EnK8gk41Ccy3MXqN6skn_B0MI__VGA6Ggg=",
  },
  {
    id: 5,
    name: "Goa",
    country: "India",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
];

const PopularDestinations = () => {
  return (
    <section className="popular-destinations">
      <h2>Popular Retreat Destinations</h2>

      <div className="destinations-grid">
        {destinations.map((dest) => (
          <div key={dest.id} className="destination-card">
            <img src={dest.img} alt={dest.name} className="destination-img" />
            <div className="destination-overlay">
              <h3>{dest.name}</h3>
              <p>{dest.country}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
