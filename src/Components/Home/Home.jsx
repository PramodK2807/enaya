import React from "react";
import Layout from "../Layout/Layout";
import Banner from "./Banner";
import OnlineServices from "./OnlineServices";
import OurMobileApp from "./OurMobileApp";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <OnlineServices />

      <section className="similardesign comman_padding">
        <div className="container">
          <div className="row similar1 align-items-center">
            <div className="col-md-7" data-aos="fade-right">
              <div className="similar_img">
                <img src="assets/img/semplan.png" alt />
              </div>
            </div>
            <div className="col-md-5 ps-md-4 pe-md-5" data-aos="fade-left">
              <div className="similar_content">
                <h2>Our SME Plans</h2>
                <p>
                  Our SME Plans offer comprehensive coverage designed
                  specifically for small and medium enterprises, ensuring your
                  business and employees are well-protected.
                </p>
                <a className="link_part" href="smeplan.html">
                  Learn More
                  <img src="assets/img/arrow.png" alt />
                </a>
              </div>
            </div>
          </div>

          
          <div className="row similar2 align-items-center">
            <div className="col-md-5 pe-md-4 ps-md-5" data-aos="fade-right">
              <div className="similar_content">
                <h2>Our Corporate Plans</h2>
                <p>
                  {" "}
                  Our Corporate Plans provide robust coverage tailored for large
                  businesses, ensuring comprehensive protection for your company
                  and employees.
                </p>
                <a className="link_part" href="corporate-plan.html">
                  Learn More
                  <img src="assets/img/arrow.png" alt />
                </a>
              </div>
            </div>
            <div className="col-md-7" data-aos="fade-left">
              <div className="similar_img">
                <img src="assets/img/corporateplan.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurMobileApp />
    </Layout>
  );
};

export default Home;
