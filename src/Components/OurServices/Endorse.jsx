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
                  <h2>Transform Your Member Management Today!</h2>
                  <p>
                    Join the growing number of corporate and SME customers who
                    are revolutionizing their member management with Saudi
                    Enaya's Endorsement Portal. Experience the freedom of
                    instant updates, seamless migrations, and hassle-free member
                    management.
                  </p>
                </div>
              </div>
            </div>
            <div className="row similar2 align-items-center">
              <div className="col-md-6 ps-md-5" data-aos="fade-right">
                <div className="similar_content">
                  <h2>Sign Up Now and Simplify Your Member Management!</h2>
                  <p>
                    Ready to take control of your member management? Sign up
                    today and discover the difference Saudi Enaya's Endorsement
                    Portal can make for your business. Enhance your efficiency,
                    save time, and ensure your member records are always
                    accurate and up to date.
                  </p>
                  <p>
                    Reach out! if you want to be part of this Journey{" "}
                    <a href="mailto:MSD@saudienaya.com">MSD@saudienaya.com</a>
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
    </>
  );
};

export default Endorse;
