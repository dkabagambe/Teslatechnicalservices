import React from "react";
import "../styles/Clients.css";
import img1 from "../images/rea-1-300x225.png";
import img2 from "../images/uedcl-1.png";
import img3 from "../images/umeme.png";
import img4 from "../images/urc.png";
import img5 from "../images/gou.png";
import img6 from "../images/nwsc.png";

const Clients = () => {
  return (
    <div>
      <h3>Our Clients</h3>
      <div className="clients">
        <div className="card">
          <img src={img5} alt="clients" />
        </div>
        <div className="card">
          <img src={img2} alt="clients" />
        </div>
        <div className="card">
          <img src={img3} alt="clients" />
        </div>

        <div className="card">
          <img src={img1} alt="clients" />
        </div>
        <div className="card">
          <img src={img4} alt="clients" />
        </div>
        <div className="card">
          <img src={img6} alt="clients" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
