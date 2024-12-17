import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import aboutus from "../assets/aboutus.png";
import agriculture from "../assets/business1.png";
import advisory from "../assets/business2.png";
import finance from "../assets/business3.png";
import food from "../assets/business4.png";
import warehousing from "../assets/business5.png";

const Home = () => {
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
      <div className="homepage zoom-in" id="home">
        <div className="hero-content">
          <h1 className="hero-title">
            Integrated <br />
            Lifetech Hub <br />
            India Pvt. Ltd.
          </h1>

          <hr className="hero-divider" />

          <p className="hero-subtitle">Bhu-Samriddhi, Jeevan-Unnati</p>

          <div className="hero-image"></div>
        </div>
      </div>

      <div className="about-section">
        <div className="bgbox">
          <img
            src={aboutus}
            alt="About Us Image"
            className="about-image slide-in-left"
          />
          <div className="text-content zoom-in">
            <h1 className="about-title">Introduction</h1>
            <p className="about-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              porro quibusdam reiciendis modi sed impedit recusandae in tenetur
              animi maiores laudantium libero dolore ratione autem. Totam est
              earum excepturi placeat. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Itaque, porro quibusdam reiciendis modi sed
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              porro quibusdam reiciendis modi sed impedit recusandae in tenetur
              animi maiores laudantium libero dolore ratione autem. Totam est
            </p>
            <div>
              <Link to="/about-us">
                <button className="about-button">Know More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="business-section">
        <div className="business-bgbox">
          <div className="business-content fade-in-color">
            <h1 className="business-subtitle">
              Integrated Lifetech Hub India Pvt. Ltd.
            </h1>
            <h1 className="business-title">Our Division</h1>
            <span className="bottom-dot">•••</span>
          </div>
          <div className="business-cards zoom-in">
            {[
              {
                title: "Agriculture",
                imgSrc: agriculture,
                link: "agriculture",
              },
              {
                title: "Advisory",
                imgSrc: advisory,
                link: "advisory",
              },
              {
                title: "Finance",
                imgSrc: finance,
                link: "finance",
              },
              {
                title: "Food Processing",
                imgSrc: food,
                link: "food-processing",
              },
              {
                title: "Warehousing",
                imgSrc: warehousing,
                link: "warehousing",
              },
            ].map((card, index) => (
              <Link to={`/single-business/${card.link}`} key={index}>
                <div className="bcard">
                  <h1>{card.title}</h1>
                  <img src={card.imgSrc} alt={card.title} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="contact-bgbox">
          <h1 className="contact-subtitle">
            Integrated Lifetech Hub India Pvt. Ltd.
          </h1>
          <h1 className="contact-title">Our Division</h1>
          <span className="bottom-dot">•••</span>

          <div className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone No." />
            <button type="submit">SUBMIT HERE</button>
          </div>
        </div>
      </div>

      <div className="tagline">
        <h1>
          <span className="highlight-brown">Bhu-Samriddhi</span>,
          <span className="highlight-green">Jeevan-Unnati</span>
        </h1>
        <h2>Brown Revolution</h2>
      </div>
    </>
  );
};

export default Home;
