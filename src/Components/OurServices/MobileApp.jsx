import React from "react";
import Layout from "../Layout/Layout";
import Card2 from "../Common/Card2";

const MobileApp = () => {
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
                    Mobile <span>App</span>
                  </h2>
                  <strong>
                    Experience Convenience at Your Fingertips with Saudi Enaya
                    Mobile Apps
                  </strong>
                  <p>
                    Welcome to the future of insurance management! With Saudi
                    Enaya's mobile apps, our members can access and manage their
                    insurance policies effortlessly. Our user-friendly mobile
                    apps are designed to put you in control, providing a range
                    of features that make managing your health insurance simpler
                    and more convenient than ever.
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
                  <h2>Why Use the Saudi Enaya Mobile Apps?</h2>
                </div>
              </div>

              <Card2
                title="Instant Member Management"
                desc="Say goodbye to delays and cumbersome processes. Our portal allows you to add or delete members anytime, anywhere, with just a few clicks. Enjoy real-time updates and ensure your records are always up to date."
                logoPath="/assets/img/claims.png"
              />
              <Card2
                title="Easy Policy Coverage"
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
                  <h2>Transform Your Insurance Experience Today!</h2>
                  <p>
                    Download the Saudi Enaya mobile apps and take control of
                    your health insurance with unmatched convenience and
                    efficiency. Access your policy details, find hospitals,
                    submit claims, and more, all from the palm of your hand.
                  </p>
                  <div className="enaya_download mb-3 d-flex">
                    <a href="javascript:;">
                      <img src="/assets/img/google-play.svg" alt />
                    </a>
                    <a href="javascript:;">
                      <img src="/assets/img/app-store.svg" alt />
                    </a>
                  </div>
                  <p>
                    Saudi Enaya – Putting your health insurance needs in your
                    hands.
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

export default MobileApp;
