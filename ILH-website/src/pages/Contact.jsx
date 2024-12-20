import React from "react";
import { useEffect } from "react";
import "./contact.css";

const Contact = () => {
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
    <div className="contact-page">
      <div className="contact-us">
        <div className="contact-form-section slide-in-left">
          <h4>Any Query?</h4>
          <h2>
            <span>Get In Touch With Us</span>
          </h2>
          <p>
            Feel free to reach out anytime! Our customer support team is always
            ready to assist you and is available 24/7 to provide the help you
            need.
          </p>
          <form className="contact-page-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone"
                />
              </div>
            </div>
            <button className="contact-page-button" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="contact-info-section zoom-in">
          <iframe
            src="https://maps.google.com/maps?q=M.K.%20Hydraulics,%20Andheri%20East,%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="Google Map"
            className="map"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div className="contact-details">
            <h3>Corporate Address</h3>
            <p>
              Office No. 403, Midas, Sahar Plaza Complex, Andheri East, Mumbai -
              400059.
            </p>
            <h3>Quick Contact</h3>
            <p>+91 9820013932 | 022-69011476</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
