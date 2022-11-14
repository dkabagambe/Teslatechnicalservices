import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy;{new Date().getFullYear()} Tesla technical services ltd</p>
    </div>
  );
};

export default Footer;
