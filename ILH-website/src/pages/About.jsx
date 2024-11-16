import React, { useState } from "react";
import "./about.css";
import Tagline from "../assets/Tagline.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const handleToggle = () => {
    setActiveTab((prevTab) => (prevTab === "vision" ? "mission" : "vision"));
  };

  return (
    <>
      <div className="about-page">
        <img src={Tagline} alt="Company Tagline" className="tagline-img" />
        <div className="about-text">
          <p className="about-page-title">About Us</p>
          <p className="about-page-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi
            incidunt tempora assumenda est minima mollitia unde! Mollitia cumque
            exercitationem, amet adipisci ullam nemo culpa, placeat similique
            tempora facere eius.
          </p>
        </div>
      </div>
      <div className="vision-mission-container">
        {/* Toggle Switch */}
        <div className="switch-container">
          <div className="switch" onClick={handleToggle}>
            <span
              className={`switch-label ${
                activeTab === "vision" ? "active" : ""
              }`}
            >
              VISION
            </span>
            <div
              className={`switch-slider ${
                activeTab === "mission" ? "right" : ""
              }`}
            ></div>
            <span
              className={`switch-label ${
                activeTab === "mission" ? "active" : ""
              }`}
            >
              MISSION
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="content">
          {activeTab === "vision" && (
            <p>
              Leading a Soil and Biodiversity Revolution through India’s
              Agricultural Heritage: Restoring the Environment, Empowering All
              Living Organisms, and Sustaining Resources with Innovative
              Solutions that Serve Today’s Essential Needs.
            </p>
          )}
          {activeTab === "mission" && (
            <p>
              Leading a Soil and Biodiversity Revolution through India’s
              Agricultural Heritage, by restoring the environment, empowering
              all living organisms, and sustaining resources with innovative
              solutions that meet today's essential needs. We are committed to
              fostering sustainable agricultural practices that enhance
              biodiversity, promote ecological balance, and empower communities
              to thrive in harmony with nature.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
