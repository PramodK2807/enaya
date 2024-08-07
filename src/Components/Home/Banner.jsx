import React from "react";
import Card1 from "../Common/Card1";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    // dots:false,
  };
  return (
    <>
      <section className="banner_home">
        <div className="container">
          <div className="bannerslider_main">
            <div className="bannerbox_left">
              <div className="sliderbanner">
                <Slider {...settings}>
                  <div className="bannerbox_inner">
                    <h1>Insurance for your business and teams</h1>
                    <p>
                      Insurance options with coverage tailored for your
                      employees.
                    </p>
                    <ul className="ul_tick ps-0">
                      <li>Corporate Plans</li>
                      <li>SME Plans</li>
                      <li>Visa Insurance</li>
                    </ul>
                    <Link className="banner_btn" to="/get-quote">
                      Get a Quote
                    </Link>
                  </div>
                  <div className="bannerbox_inner">
                    <h1>Insurance for your business and team</h1>
                    <p>
                      Insurance options with coverage tailored for your
                      employees.
                    </p>
                    <ul className="ul_tick ps-0">
                      <li>Corporate Plans</li>
                      <li>SME Plans</li>
                      <li>Visa Insurance</li>
                    </ul>
                    <Link className="banner_btn" to="/get-quote">
                      Get a Quote
                    </Link>
                  </div>
                  <div className="bannerbox_inner">
                    <h1>Insurance for your business and team</h1>
                    <p>
                      Insurance options with coverage tailored for your
                      employees.
                    </p>
                    <ul className="ul_tick ps-0">
                      <li>Corporate Plans</li>
                      <li>SME Plans</li>
                      <li>Visa Insurance</li>
                    </ul>
                    <Link className="banner_btn" to="/get-quote">
                      Get a Quote
                    </Link>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="bannerbox_right">
              <img src="/assets/img/Homepage.jpg" alt="i" />
            </div>
          </div>
        </div>
      </section>
      <section className="therre_boxes">
        <div className="container pb-5 overflow-hidden">
          <div className="row">
            <Card1
              title={"SME"}
              description={"For companies with up to 250 members"}
              logoPath={"assets/img/sme.png"}
              data_aos={"fade-right"}
              customStyle={"sme_box"}
              navigation={'/sme-plan'}
            />
            <Card1
              title={"Corporate"}
              description={"For companies with over 20 members"}
              logoPath={"assets/img/Corporate.png"}
              data_aos={"fade-up"}
              customStyle={"sme_box"}
              navigation={'/corporate-plan'}
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
