import React from "react";
import { Link } from "react-router-dom";

const Card1 = ({
  title,
  description,
  data_aos,
  logoPath,
  bgImage,
  customStyle,
}) => {
  return (
    <>
      <div className="col-md-4 d-flex align-items-stretch mb-md-0 mb-4">
        <Link
          style={{ backgroundImage: bgImage }}
          className={`${customStyle} w-100`}
          data-aos={data_aos}
        >
          <img className="icon_sme" src={logoPath} alt="i" />
          <h2>{title}</h2>
          <p>{description}</p>
        </Link>
      </div>
    </>
  );
};

export default Card1;
