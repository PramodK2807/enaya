import React from "react";
import Layout from "../Layout/Layout";
import Card2 from "../Common/Card2";

const BrokerPortal = () => {
  return (
    <>
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
                <div className="common_content">
                  <h2>
                    Broker <span>Portal</span>
                  </h2>
                  <strong>
                    Discover the Future of Insurance Sales with Our Online
                    Portal
                  </strong>
                  <p>
                    Welcome to the next generation of insurance sales! Our
                    cutting-edge online portal is designed exclusively for
                    brokers, providing a seamless, user-friendly interface that
                    makes selling insurance products easier than ever before.
                  </p>
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
                  <h2>Why Choose Our Online Portal?</h2>
                </div>
              </div>

              <Card2
                title="Simplified Process"
                desc="With just a few simple steps, you can easily start and finalize your entire policy sale process. Our intuitive design ensures that even the most complex products are easy to understand and sell."
                logoPath="/assets/img/claims.png"
              />
              <Card2
                title="Comprehensive Product Range"
                desc="Our portal offers a wide array of insurance products to meet every client's needs."
                logoPath="/assets/img/carbon_certificate-check.png"
              />
              <Card2
                title="User-Friendly Interface"
                desc="Designed with brokers in mind, our portal features an intuitive interface that simplifies every aspect of the sales process. Navigate effortlessly through product options, quotes, and policy details."
                logoPath="/assets/img/onlineservices.png"
              />
              <Card2
                title="Secure and Reliable"
                desc="Security is our top priority. Our portal uses advanced encryption and security measures to protect your data and ensure your security."
                logoPath="/assets/img/onlineservices.png"
              />
              <Card2
                title="Personalized Support"
                desc="Our dedicated support team is always here to help. Whether you need assistance with a complex sale or have a technical question, we're just a click away."
                logoPath="/assets/img/onlineservices.png"
              />
            </div>
          </div>
        </section>

        <section className="similardesign corpo_insurance comman_padding">
          <div className="container">
            <div className="row similar1 align-items-center mb-0">
              <div className="col-md-6" data-aos="fade-right">
                <div className="similar_img">
                  <img src="/assets/img/corporate01.png" alt='corp' />
                </div>
              </div>
              <div className="col-md-6 pe-5" data-aos="fade-left">
                <div className="similar_content">
                  <h2>Transform Your Sales Experience Today!</h2>
                  <p>
                    Join the growing number of brokers who are transforming
                    their sales experience with our innovative online portal.
                  </p>
                  <p>
                    Your success is our priority. With our online portal,
                    selling insurance has never been easier or more efficient.
                    Start today and see the difference for yourself!
                  </p>
                  <p>
                    Please send an email if you want to be reseller{" "}
                    <a href="mailto:sebrokerteam@saudienaya.com">
                      sebrokerteam@saudienaya.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BrokerPortal;
