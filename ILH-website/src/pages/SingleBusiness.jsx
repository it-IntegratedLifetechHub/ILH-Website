import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singlebusiness.css";

const SingleBusiness = () => {
  const { businessId } = useParams(); // Retrieve the dynamic route parameter
  const [business, setBusiness] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the data.json file from the public folder
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data.json");
        }
        return response.json();
      })
      .then((data) => {
        // Match the clicked business using the route parameter
        const matchedBusiness = data.find(
          (item) => item.link.split("/").pop() === businessId
        );
        setBusiness(matchedBusiness);
      })
      .catch((err) => setError(err.message));
  }, [businessId]);

  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  if (!business) {
    return <p className="loading-message">Loading...</p>;
  }

  return (
    <div className="single-business-container">
      {/* Header Image */}
      <div className="image-section">
        <img
          src={business.image.replace(".", "")} 
          alt={business.title}
          className="header-image"
        />
      </div>

      {/* Title Section */}
      <div className="title-section">
        <h1 className="title">{business.title}</h1>
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <p>{business.description}</p>
      </div>
    </div>
  );
};

export default SingleBusiness;
