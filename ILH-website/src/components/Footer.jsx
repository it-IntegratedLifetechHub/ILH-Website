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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4118.397708933418!2d72.86370788274873!3d19.112913304675434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8395823ec0d%3A0x5207f8aa721e8c91!2sSahar%20Plaza%20Midas%20II%2C%20Andheri%20-%20Kurla%20Rd%2C%20Bhim%20Nagar%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400053!5e1!3m2!1sen!2sin!4v1734510694998!5m2!1sen!2sin"
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
