import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css";

function Landing_Page () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
   
    const navigate = useNavigate();
    useEffect(() => {
        // Check if the user is logged 
        const authToken = sessionStorage.getItem('auth-token');
        setIsLoggedIn(!!authToken); // Update isLoggedIn state based on the presence of the auth token
     
    }, []);
if ( isLoggedIn) {
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
               Wellness is not just a destination, it's a journey of mindful choices and daily transformations. Nurture your health with love, and watch it bloom into a beacon of jey and vitality.
                </h4>
            </div>
    
          </div>
        </section>
      );
    
} else {
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
                <Link to="/services">
                    <button className="button">Get Started</button>
                </Link>
            </div>
    
          </div>
        </section>
      );
}
    

 
};

export default Landing_Page;