import React from "react";
import Card2 from "../Common/Card2";

const OnlineServices = () => {
  return (
    <section className="ouronline_services comman_padding">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <div className="comman_head text-center">
              <h2>Our Online Services</h2>
              <p>
                Explore our online services designed to meet your insurance
                needs quickly and efficiently.
              </p>
            </div>
          </div>

          <Card2
            title={"Claims"}
            desc={"Submit new or track existing claims."}
            logoPath={"assets/img/claims.png"}
          />
          <Card2
            title={"Search Provider Network"}
            desc={
              "Find hospitals and clinics in our network with our easy search tool."
            }
            logoPath={"assets/img/carbon_certificate-check.png"}
          />
          <Card2
            title={"Visit Visa Insurance Extension"}
            desc={
              "Extend your visit visa insurance effortlessly through our user-friendly portal."
            }
            logoPath={"assets/img/onlineservices.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default OnlineServices;
