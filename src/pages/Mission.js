import React from "react";
import "../styles/Mission.css";
import img1 from "../images/Organizational Structure.png";
import img2 from "../images/branch.png";

const Mission = () => {
  return (
    <div className="all">
      <div className="mission">
        <h4>Mission Statement</h4>
        <p>
          “To provide safe, quality, cost effective, and timely solutions to the
          engineering needs of the community by 2020”
        </p>
        <h4>our Vision</h4>
        <p>
          “Striving to be among the leading dynamic and professional service
          providers in the revolving engineering world”
        </p>
        <h4>our Core Values</h4>
        <p>The Company Stands on Four Strong Pillars of:</p>
        <ol>
          <li>Teamwork</li>
          <li>Integrity</li>
          <li>Safety Compliance</li>
          <li>Customer satisfaction</li>
          <li>Professionalism</li>
        </ol>
        <h4>Company Motto</h4>
        <p>“Engineering Solutions powered for excellence”</p>
      </div>
      <div className="structure">
        <div>
          <h2>
            Tesla technical services limited organizational structure for power
            lines project management
          </h2>
        </div>
        <div className="structure-image">
          <img src={img2} alt="structure" />
        </div>
        <div className="structure-image">
          <img src={img1} alt="structure" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
