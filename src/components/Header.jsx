import React from "react";
import "./Header.css";

function Header() {
  const text = "NICE TO MEET YOU NICE TO MEET YOU NICE TO MEET YOU";

  return (
    <header>
      <div className="header_bg"></div>
      <div className="container-all">
        <div className="container-logo-detail">
          <div className="image-logo">
            <div className="image-profile">
              <img src="src\image\imageProfile.png" alt="image profile" />
            </div>
            <div className="curve-text">
              <div className="text">
                {text.split("").map((letter, index) => (
                  <span
                    key={index}
                    style={{ transform: `rotate(${index * 7}deg)` }}
                  >
                    {letter}
                  </span>
                ))}

              </div>
            </div>
          </div>
          <div className="detail-by-logo">
            <div className="detail-title">DESIGN / DEVELOPER</div>
            <div className="my-name">Weerayuth</div>
            <div className="my-name"> Aridej</div>
            <button className="contact-me-button">Contact Me</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
