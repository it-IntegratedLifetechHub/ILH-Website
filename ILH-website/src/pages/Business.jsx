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

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add the visible class for animation
          } else {
            entry.target.classList.remove("visible"); // Remove the visible class if no longer visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    // Select all elements with animation classes
    const animatedElements = document.querySelectorAll(
      ".fade-in, .fade-in-scale, .slide-in-left, .zoom-in, .rotate-in, .slide-in-bounce, .fade-in-color, .scale-rotate, .swing-in"
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => {
      animatedElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <>
      <div className="business-page">
        <img
          src={allbusiness}
          alt="Our Business Overview"
          className="ourbusiness-img slide-in-left"
        />
        <div className="business-text zoom-in">
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
