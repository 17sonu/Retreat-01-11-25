import React, { useEffect, useState } from "react";
import logoWhite from "../assets/logo--white.svg";
import logoColor from "../assets/logo--black.svg"; // add your alternate logo
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const searchBar = document.querySelector(".hero-head");

    const handleScroll = () => {
      if (!searchBar) return;
      const searchRect = searchBar.getBoundingClientRect();

      // ✅ Trigger when bottom of search bar goes above viewport
      setScrolled(searchRect.bottom <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-logo">
        <img
          src={scrolled ? logoColor : logoWhite}
          alt="retreat.guru logo"
          className="logo-img"
        />
      </div>

      <ul className="nav-links">
        <li><a href="#"><i className="fas fa-heart"></i></a></li>
        <li><a href="#">Retreat Leaders</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
