import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DiscoverSection from "./components/DiscoverSection";
import SpotlightSection from "./components/SpotlightSection";
import PopularDestinations from "./components/PopularDestinations";
import RetreatCards from "./components/RetreatCards";
import StoriesSection from "./components/StoriesSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DiscoverSection />
      <SpotlightSection />
      <PopularDestinations />
      <RetreatCards />
      <StoriesSection />
      <AboutSection />
      <div style={{ height: "1500px" }}></div> {/* For scroll testing */} 
    </>
  );
}

export default App;
