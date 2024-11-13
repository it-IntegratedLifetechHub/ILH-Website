import React from "react";
import logo from "../assets/ILHlogo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footerbox">

        <div className="ftbox">

        <img className="footer-logo" src={logo} alt="ILH Logo" />

        <p className="logo-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero aut
          perspiciatis placeat consequatur quisquam eos molestiae. Repellat,
          officia! Nostrum qui incidunt est nisi voluptatem beatae ratione sit
          et corporis?
        </p>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-head">Quick Links</h4>
            <hr />
            <ul>
              <li>
                <i className="ri-arrow-right-s-line"></i>
                <a href="/" className="footer-desc">
                  Home
                </a>
              </li>
              <li>
                <i className="ri-arrow-right-s-line"></i>
                <a href="#aboutus" className="footer-desc">
                  About Us
                </a>
              </li>
              <li>
                <i className="ri-arrow-right-s-line"></i>
                <a href="#projects" className="footer-desc">
                  Our Projects
                </a>
              </li>
              <li>
                <i className="ri-arrow-right-s-line"></i>
                <a href="#contact-form" className="footer-desc">
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
                <i className="ri-phone-line"></i>
                <a href="tel:+9168339168" className="footer-desc">
                  +91 68 33 9168
                </a>
              </li>
              <li>
                <i className="ri-mail-line"></i>
                <a
                  href="mailto:realhomedevelopers9@gmail.com"
                  className="footer-desc"
                >
                  realhomedevelopers9@gmail.com
                </a>
              </li>
              <li>
                <i className="ri-map-pin-line"></i>
                <a
                  href="https://www.google.co.in/maps/place/Omega+Business+Park/@19.2037254,72.9521011,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b9f5c38d909d:0xbd382394b6bff4f7!8m2!3d19.2037254!4d72.954676!16s%2Fg%2F11ghfd4gys?entry=ttu"
                  className="footer-desc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Location
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.804820733738!2d72.95467599999999!3d19.2037254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9f5c38d909d%3A0xbd382394b6bff4f7!2sOmega%20Business%20Park!5e0!3m2!1sen!2sin!4v1724338422171!5m2!1sen!2sin"
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

      <div className="bottom">
        <h3>
          Real Homes Developers © 2024 All Rights Reserved | Designed and
          Developed by The PixelDev
        </h3>
      </div>
    </div>
  );
}

export default Footer;
