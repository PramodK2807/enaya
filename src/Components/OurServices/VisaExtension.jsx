import React from "react";
import Card2 from "../Common/Card2";
import Layout from "../Layout/Layout";

const VisaExtension = () => {
  return (
    <Layout>
      <section className="common_banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <div className="common_img">
                <img src="/assets/img/fraud.png" alt="fraud" />
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div class="common_content">
                <h2>
                  Visit <span>Visa</span> Extension
                </h2>
                <strong>Extend Your Saudi Enaya Visit Visa Online</strong>
                <p>
                  Are you enjoying your stay in Saudi Arabia and wish to extend
                  your visit? Saudi Enaya makes it easier than ever to extend
                  your visit visa and maintain your insurance coverage, all from
                  the comfort of your home.
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ouronline_services comman_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12" data-aos="fade-up">
              <div className="comman_head text-center">
                <h2>Why Choose Saudi Enaya?</h2>
              </div>
            </div>

            <Card2
              title="Reputable Provider"
              desc="As a leading insurance provider, Saudi Enaya is trusted by visitors and residents a like."
              logoPath="/assets/img/claims.png"
            />
            <Card2
              title="Customer Satisfaction"
              desc="We prioritize your satisfaction and are constantly improving our services based on your feedback."
              logoPath="/assets/img/carbon_certificate-check.png"
            />
          </div>
        </div>
      </section>

      <section className="similardesign comman_padding">
        <div className="container">
          <div className="row similar1 align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <div className="similar_img">
                <img src="/assets/img/semplan.png" alt />
              </div>
            </div>
            <div className="col-md-6 pe-md-5" data-aos="fade-left">
              <div className="similar_content">
                <h2>Easy and Convenient</h2>
                <p>
                  With Saudi Enaya's online portal, you can extend your visit
                  visa and insurance coverage in just a few clicks. Our
                  user-friendly interface guides you through the process,
                  ensuring a smooth and stress-free experience.
                </p>
              </div>
            </div>
          </div>
          <div className="row similar2 align-items-center">
            <div className="col-md-6 ps-md-5" data-aos="fade-right">
              <div className="similar_content">
                <h2>Quick Processing</h2>
                <p>
                  Time is of the essence, and we understand that. Our efficient
                  processing system ensures that your visa extension and
                  insurance renewal are completed promptly. You can focus on
                  enjoying your time in Saudi Arabia without any interruptions.
                </p>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="similar_img">
                <img src="/assets/img/corporateplan.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VisaExtension;
