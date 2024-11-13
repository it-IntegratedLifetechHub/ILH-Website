import React from "react";
import aboutus from "../assets/aboutus.png";
import agriculture from "../assets/business1.png";
import advisory from "../assets/business2.png";
import finance from "../assets/business3.png";
import food from "../assets/business4.png";
import warehousing from "../assets/business5.png";

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
          <img src={aboutus} alt="About Us Image" className="about-image" />
          <div className="text-content">
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
              <button className="about-button">Know More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="business-section">
        <div className="business-bgbox">
          <h1 className="business-subtitle">
            Integrated Lifetech Hub India Pvt. Ltd.
          </h1>
          <h1 className="business-title">Our Division</h1>
          <span className="bottom-dot">•••</span>
          <div className="business-cards">
            {[
              { title: "Agriculture", imgSrc: agriculture },
              { title: "Advisory", imgSrc: advisory },
              { title: "Finance", imgSrc: finance },
              { title: "Food Processing", imgSrc: food },
              { title: "Warehousing", imgSrc: warehousing },
            ].map((card, index) => (
              <div className="bcard" key={index}>
                <h1>{card.title}</h1>
                <img src={card.imgSrc} alt={card.title} />
              </div>
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
          <span className="highlight-brown">Bhu-Samriddhi</span>,{" "}
          <span className="highlight-green">Jeevan-Unnati</span>
        </h1>
        <h2>Brown Revolution</h2>
      </div>
    </>
  );
};

export default Home;
