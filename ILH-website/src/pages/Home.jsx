import React from "react";
import aboutus from "../assets/aboutus.png";

const Home = () => {
  return (
    <>
      <div className="homepage" id="home">
        <div className="hero-content">
          <h1 className="hero-title">
            Integrated <br />
            Lifetech Hub <br />
            India Pvt. Ltd.
          </h1>

          <hr className="hero-divider" />

          <p className="hero-subtitle">Bhu-Samriddhi, Jeevan-Unnati</p>

          <div className="hero-image">
            {/* Background image styled via CSS */}
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="bgbox">
          <img src={aboutus} alt="" srcset="" />
        </div>
      </div>
    </>
  );
};

export default Home;
