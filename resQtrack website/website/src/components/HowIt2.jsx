import React from "react";


const HowIt2 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "32px 0px", // top/bottom 32px, left/right 8px
        maxWidth: "1580px",
        margin: " auto",

        
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#eef6ff",
          
          
        }}
      >

        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#1e3a5f",
              lineHeight: "1.2",
              maxWidth: "40rem",
              margin: "0 auto",
              paddingTop: "6rem",
              marginTop: "2rem"
              
            }}
          >
            Take control of <br /> your safety today!
          </h1>
        </div>

        <div style={{ marginTop: "24px",  marginBottom:"30px"}}>
          <img
            src="src/assets/tag.jpg"
            alt="QR Code"
            style={{ width: "400px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HowIt2;
