import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <>
      <Link onClick={() => navigate(-1)}>
        <img src="/assets/img/arrow-left1.png" alt="i" />
      </Link>
    </>
  );
};

export default BackBtn;
