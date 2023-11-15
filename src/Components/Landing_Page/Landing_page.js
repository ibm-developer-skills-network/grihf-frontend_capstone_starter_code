import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function Landing_Page () {
  return (
    <section className="hero-section">
      <div>
        <div data-aos="fade-up" className="flex-hero">
            
            <h1>
              Your Health<br/>

              <span className="text-gradient">
                
                Our Responsibility
              </span>
            </h1>
              <div className="blob-cont">
                  <div className="blue blob"></div>
              </div>
              <div className="blob-cont">
                  <div className="blue1 blob"></div>
              </div>
            <h4>
            StayHealthy conducted an extensive survey to assess the medical facilities available in remote areas and found that several patients have a tough time finding the right doctor at the right time. The initiative from StayHealthy will help get patients access to general physicians and specialists at the right time easily.
            </h4>
            <a href="#services">
              <button className="button">Get Started</button>
            </a>
        </div>

      </div>
    </section>
  );
};

export default Landing_Page;