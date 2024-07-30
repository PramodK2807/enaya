import React from "react";
import { Link } from "react-router-dom";

const Card2 = ({ title, desc, logoPath, navigate }) => {
  return (
    <div
      className="col-md-4 my-3 d-flex align-items-stretch"
      data-aos="fade-up"
    >
      <div className="ouronline_box w-100">
        <Link to={navigate}>
          <img src={logoPath} alt="i" />
          <h3>{title}</h3>
          <p>{desc}</p>
        </Link>
      </div>
    </div>
  );
};

export default Card2;
