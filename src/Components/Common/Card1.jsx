import React from "react";
import { Link } from "react-router-dom";

const Card1 = ({
  title,
  description,
  data_aos,
  logoPath,
  bgImage,
  customStyle,
  navigation,
}) => {
  return (
    <>
      <Link
        to={navigation}
        className="col-md-4 d-flex align-items-stretch mb-md-0 mb-4"
      >
        <div
          style={{ backgroundImage: bgImage }}
          className={`${customStyle} w-100`}
          data-aos={data_aos}
        >
          <img className="icon_sme" src={logoPath} alt="i" />
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </>
  );
};

export default Card1;
