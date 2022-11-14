import React from "react";
import ReactWhatsapp from "react-whatsapp";
import "../styles/WhatsApp.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div>
      <ReactWhatsapp
        number="2-567-046-45061"
        message="Hey i got your number from the Tesla website!!!"
        className="whatsapp_float"
      >
        <FaWhatsapp className="whatsapp" />
      </ReactWhatsapp>
    </div>
  );
};

export default WhatsApp;
