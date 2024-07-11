import React from "react";
import Card1 from "../Common/Card1";

const Banner = () => {
  return (
    <>
      <section className="banner_home">
        <div className="container">
          <div className="bannerslider_main">
            <div className="bannerbox_left">
              <div className="sliderbanner">
                {/* <div className="bannerbox_inner">
           
              <h1>Insurance for your business and team</h1>
              <p>
                Insurance options with coverage tailored for your employees.
              </p>
              <ul className="ul_tick ps-0">
                <li>Corporate Plans</li>
                <li>SME Plans</li>
                <li>Visa Insurance</li>
              </ul>
              <a className="banner_btn" href="smeplan.html">
                Get a Quote
              </a>
            </div> */}
                <div className="bannerbox_inner">
                  <h1>Insurance for your business and team</h1>
                  <p>
                    Insurance options with coverage tailored for your employees.
                  </p>
                  <ul className="ul_tick ps-0">
                    <li>Corporate Plans</li>
                    <li>SME Plans</li>
                    <li>Visa Insurance</li>
                  </ul>
                  <a className="banner_btn" href="smeplan.html">
                    Get a Quote
                  </a>
                </div>
                {/* <div className="bannerbox_inner">
              <h1>Insurance for your business and team</h1>
              <p>
                Insurance options with coverage tailored for your employees.
              </p>
              <ul className="ul_tick ps-0">
                <li>Corporate Plans</li>
                <li>SME Plans</li>
                <li>Visa Insurance</li>
              </ul>
              <a className="banner_btn" href="smeplan.html">
                Get a Quote
              </a>
            </div> */}
              </div>

              <div className="sliderbanner owl-carousel"></div>
            </div>
            <div className="bannerbox_right">
              <img src="assets/img/banner_img.png" alt />
            </div>
          </div>
        </div>
      </section>
      <section className="therre_boxes">
        <div className="container overflow-hidden">
          <div className="row">
            <Card1
              title={"SME"}
              description={"For companies with up to 250 members"}
              logoPath={"assets/img/sme.png"}
              data_aos={"fade-right"}
              customStyle={"sme_box"}
            />
            <Card1
              title={"Corporate"}
              description={"For companies with over 20 members"}
              logoPath={"assets/img/Corporate.png"}
              data_aos={"fade-up"}
              customStyle={"sme_box"}
            />
            <Card1
              title={"Get Insured"}
              description={"Purchase your policy now"}
              logoPath={"assets/img/sme.png"}
              data_aos={"fade-left"}
              bgImage={'url("assets/img/WEBYNAYAArtboard_12.png")'}
              customStyle={"sme_box1"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
