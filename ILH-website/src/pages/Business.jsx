import React, { useEffect, useState } from "react";
import "./business.css";
import allbusiness from "../assets/allbusiness.png";
import { Link } from "react-router-dom";

const Business = () => {
  const [sections, setSections] = useState([]);

  // Utility function to truncate long descriptions
  const truncateDescription = (text, maxLength = 200) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setSections(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="business-page">
        <img
          src={allbusiness}
          alt="Our Business Overview"
          className="ourbusiness-img"
        />
        <div className="business-text">
          <h1 className="business-page-title">Our Business</h1>
          <p className="business-page-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum modi
            incidunt tempora assumenda est minima mollitia unde! Mollitia cumque
            exercitationem, amet adipisci ullam nemo culpa, placeat similique
            tempora facere eius.
          </p>
        </div>
      </div>
      <div className="about-container">
        {sections.map((section, index) => (
          <div
            className={`about-section ${index % 2 !== 0 ? "row-reversed" : ""}`}
            key={section.id}
          >
            <div className="bgbox">
              <img
                src={section.image}
                alt={`${section.title} Image`}
                className="business-image"
              />
              <div className="text-content">
                <h1 className="about-title">{section.title}</h1>
                <p className="about-description">
                  {truncateDescription(section.description)}
                </p>
                <div>
                  <Link
                    to={`/single-business/${section.link.split("/").pop()}`}
                  >
                    <button className="about-button">Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Business;
