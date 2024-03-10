import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import WelcomeIntro from "../components/WelcomeIntro";

function Homepage() {
  return (
    <div className="relative">
      <Hero />
      <Cards />
      <WelcomeIntro />
    </div>
  );
}

export default Homepage;
