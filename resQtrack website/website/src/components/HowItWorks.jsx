import React from 'react';
import Navbar from './Navbar';
import HowIt2 from "./HowIt2";
import HowIt3 from "./HowIt3";
import HowItWork4 from "./HowItwork4";
import Footer from './Footer';

const HowItWorks = () => {
  return (
    <>
      <Navbar />
      <div
      style={{
        height: "530px",
        backgroundColor: "#eef6ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1rem",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        {/* Badge */}
        <div style={{ display: "inline-block", marginBottom: "2.5rem" }}>
          {/* Optional Badge Content */}
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "70px",
            fontWeight: "800",
            color: "#1e3a5f",
            marginBottom: "2rem",
            lineHeight: "1.2",
            letterSpacing: "-1px",
          }}
        >
          In an Emergency,<br />
          Help is One Scan Away
        </h1>

        {/* Paragraph */}
        <p
          style={{
            color: "#5a7184",
            fontSize: "1.5rem",
            maxWidth: "64rem",
            margin: "0 auto 3rem auto",
            lineHeight: "1.6",
          }}
        >
          Whether your car is in trouble or passengers are at risk, ensure immediate contact with emergency
          services, family, or roadside assistance—all just one scan away.
        </p>

        {/* CTA + Subtext placeholder */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          {/* You can place a button or other content here */}
        </div>
      </div>
    </div>
    <HowIt2 />
    
    <HowIt3 />
    <br /><br /><br />
    <HowItWork4 />
    <br /><br />
    <Footer />
    
      
    </>
  );
}

export default HowItWorks;
