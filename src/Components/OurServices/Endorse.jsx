import React from "react";
import Layout from "../Layout/Layout";
import Card2 from "../Common/Card2";

const Endorse = () => {
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
                <div class="common_content">
                  <h2>
                    Endorsement <span>Portal</span>
                  </h2>
                  <strong>
                    Streamline Your Member Management with Saudi Enaya's
                    Endorsement Portal
                  </strong>
                  <p>
                    Introducing Saudi Enaya's Endorsement Portal, the ultimate
                    solution for corporate and SME customers to effortlessly
                    manage their members. Our state-of-the-art platform empowers
                    you to add, delete, and migrate members with unparalleled
                    ease and efficiency.
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
                <div class="comman_head text-center">
                  <h2>Why Saudi Enaya's Endorsement Portal Stands Out</h2>
                </div>
              </div>

              <Card2
                title="Instant Member Management"
                desc="Say goodbye to delays and cumbersome processes. Our portal allows you to add or delete members anytime, anywhere, with just a few clicks. Enjoy real-time updates and ensure your records are always up to date."
                logoPath="/assets/img/claims.png"
              />
              <Card2
                title="Seamless Migration"
                desc="Need to migrate members between plans? Our intuitive interface makes member migration a breeze. Handle complex migrations with confidence and accuracy."
                logoPath="/assets/img/carbon_certificate-check.png"
              />
              <Card2
                title="User-Friendly Experience"
                desc="Designed with your convenience in mind, our portal offers a user-friendly interface that simplifies member management. Navigate effortlessly and complete tasks quickly, even with minimal technical knowledge."
                logoPath="/assets/img/onlineservices.png"
              />
              <Card2
                title="Comprehensive Control"
                desc="Whether you're managing a large corporation or a small enterprise, our portal provides the tools you need to maintain full control over your member lists. Tailor your approach to suit your specific needs and preferences."
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
                  <img src="/assets/img/corporate01.png" alt="corp" />
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

export default Endorse;
