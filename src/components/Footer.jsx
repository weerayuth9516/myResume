import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer_bg"></div>
      <div className="contact-container">
        <div className="footer-title">Get in touch!</div>
        <div className="contact-detail">
        <a href="https://mail.google.com/mail/?view=cm&to=weerayuth9516@gmail.com," target="_blank">weerayuth9516@gmail.com</a> | 093-9959516
        </div>
        <div className="social-icon">
          <img src="src\image\facebook.png" />
          <img src="src\image\instagram.png" />
          <img src="src\image\linkedin.png" />
          <img src="src\image\twitter.png" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
