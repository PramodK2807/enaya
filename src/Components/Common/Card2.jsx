import React from "react";

const Card2 = ({ title, desc, logoPath }) => {
  return (
    <div className="col-md-4 my-3 d-flex align-items-stretch" data-aos="fade-up">
      <div className="ouronline_box w-100">
        <img src={logoPath} alt="i" />
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card2;
