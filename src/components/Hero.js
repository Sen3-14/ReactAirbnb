import React from "react";
import middleSection from "../images/section.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img src={middleSection} alt="bnbphotos" className="hero--photo" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts-all all
        without leaving home
      </p>
    </section>
  );
}
