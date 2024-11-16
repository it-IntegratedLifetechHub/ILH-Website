import React from "react";
import logo from "../assets/ILHLogo.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img className="footer-logo" src={logo} alt="ILH Logo" />
            <p className="logo-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero
              aut perspiciatis placeat consequatur quisquam eos molestiae.
              Repellat, officia! Nostrum qui incidunt est nisi voluptatem beatae
              ratione sit et corporis? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Voluptatum, sapiente repellendus! Totam nostrum
              ea unde sed similique officia magni. Sit accusamus facere
              similique odio quam consequuntur quasi! Vel, nostrum fugit.
            </p>
          </div>

          <div className="footer-content">
            <div className="footer-section">
              <h4 className="footer-head">Quick Links</h4>
              <hr />
              <ul>
                <li>
                  <a href="/" className="footer-desc">
                    <IoIosArrowForward />
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="footer-desc">
                    <IoIosArrowForward />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/our-divisions" className="footer-desc">
                    <IoIosArrowForward />
                    Our Divisions
                  </a>
                </li>
                <li>
                  <a href="/contact" className="footer-desc">
                    <IoIosArrowForward />
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-head">Contact</h4>
              <hr />
              <ul>
                <li>
                  <a
                    href="https://www.google.co.in/maps/place/Omega+Business+Park"
                    className="footer-desc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Office No. 403, Midas , Sahar Plaza Complex, Andheri East.
                    Mumbai - 400059.
                  </a>
                </li>

                <li>
                  <a href="tel:+9168339168" className="footer-desc">
                    +91 9820013932 | 022-69011476
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:realhomedevelopers9@gmail.com"
                    className="footer-desc"
                  >
                    it@integratedlifetechhub.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-head">Follow Us</h4>
              <hr />
              <div className="social-links">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiInstagramFill />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare />
                </a>
              </div>
            </div>

            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <h3>
          Integrated Lifetech Hub India Pvt. Ltd. © 2024 All Rights Reserved
        </h3>
      </div>
    </>
  );
}

export default Footer;
