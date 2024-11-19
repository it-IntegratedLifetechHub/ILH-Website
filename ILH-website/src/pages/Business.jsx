import React from "react";
import "./business.css";
import allbusiness from "../assets/allbusiness.png";

const Business = () => {
  return (
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
  );
};

export default Business;
