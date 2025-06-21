import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "../Styles/Hero.css";

const Hero = () => {
  const iconRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      iconRefs.current,
      {
        x: (i) => (i % 2 === 0 ? -100 : 100), // Even index icons come from the left, odd from the right
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);



  return (
    <>
      <section className="hero">
        <div className="content">
          <div className="badge">
            <span>⚡ Instant Report</span>
          </div>
          <h1 className="title">
          Track, Alert and Access
            <br />
            Emergency Assistance with Ease
          </h1>
          <p className="subtitle">
          Get real-time alerts on emergencies, accident reports and 
            <br />
            nearby assistance, all in one place.
          </p>
        </div>
        <div className="dashboard">
          <img
            src="src/assets/Odoo_dashboard.png"
            alt="TrendTide Dashboard"
            className="dashboard-image"
          />
     
       
        </div>
      </section>
    </>
  );
};

export default Hero;