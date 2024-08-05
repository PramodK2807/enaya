import React from "react";
import Layout from "../Layout/Layout";

const ReportFraud = () => {
  return (
    <>
      <Layout>
        <section className="common_banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6" data-aos="fade-right">
                <div className="common_img">
                  <img src="/assets/img/fraud.png" alt />
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="common_content">
                  <h2>
                    Report <span>Fraud</span> or Abuse
                  </h2>
                  <p>
                    Lorem Ipsum&nbsp;is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="request_a_quote">
          <div className="container">
            <div className="request_inner row">
              <div className="col-md-12">
                <div className="comman_head text-center">
                  <h2>Report Fraud and Abuse (Form)</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur nunc nunc sit velit
                    eget sollicitudin sit posuere <br /> augue vestibulum eget
                    turpis lobortis donec sapien integer.
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row quote_main">
                  <div className="col-md-6 quote_head mb-md-5 mb-4">
                    <h2>Want to reach out directly?</h2>
                  </div>
                  <div className="col-lg-10">
                    <form className="row quote_form" action="#">
                      <div className="form-floating col-md-6 pe-lg-5">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Name*"
                        />
                        <label htmlFor="floatingInput">Name*</label>
                      </div>
                      <div className="form-floating col-md-6 pe-lg-5">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Company Name*"
                        />
                        <label htmlFor="floatingInput">Company Name*</label>
                      </div>
                      <div className="form-floating col-md-6 pe-lg-5">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Email Address*"
                        />
                        <label htmlFor="floatingInput">Email Address*</label>
                      </div>
                      <div className="form-floating col-md-6 pe-lg-5">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Phone Number*"
                        />
                        <label htmlFor="floatingInput">Phone Number*</label>
                      </div>
                      <div className="form-floating col-md-6 pe-lg-5">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Type of equiry"
                        />
                        <label htmlFor="floatingInput">Type of equiry</label>
                      </div>
                      <div className="form-floating col-md-6 pe-lg-5">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Add Attachment"
                        />
                        <button className="Attachment_btns" type="button">
                          <img src="/assets/img/atteched.png" alt />
                        </button>
                        <label htmlFor="floatingInput">Add Attachment</label>
                      </div>
                      <div className="form-floating col-md-6 pe-lg-5">
                        <textarea
                          className="form-control"
                          style={{ resize: "none" }}
                          name
                          id
                          defaultValue={""}
                        />
                        <label htmlFor="floatingInput">Message</label>
                      </div>
                      <div className="col-md-12 form-group pe-md-5">
                        <button className="form_btns" type="submit">
                          Send message
                        </button>
                      </div>
                    </form>
                  </div>
                  <img
                    className="bottom_logo"
                    src="/assets/img/overlay_logo.png"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ouronline_services comman_padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="comman_head text-center">
                  <h2>Report These with Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur nunc nunc sit velit
                    eget sollicitudin sit posuere <br /> augue vestibulum eget
                    turpis lobortis donec sapien integer.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ouronline_box">
                  <img src="/assets/img/claims.png" alt />
                  <h3>Report Claim</h3>
                  <p>
                    So it really behaves like neither. Now we have given up.{" "}
                  </p>
                  <a
                    onClick={() => window.scrollTo(500, 500)}
                    className="btn_btm"
                    href="javascript:;"
                  >
                    Learn More{" "}
                    <img src="/assets/img/arrow-right-line.png" alt />
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ouronline_box">
                  <img src="/assets/img/carbon_certificate-check.png" alt />
                  <h3>Report Provider Network</h3>
                  <p>They were used to create the machines that launched</p>
                  <a
                    onClick={() => window.scrollTo(500, 500)}
                    className="btn_btm"
                    href="javascript:;"
                  >
                    Learn More{" "}
                    <img src="/assets/img/arrow-right-line.png" alt />
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ouronline_box">
                  <img src="/assets/img/onlineservices.png" alt />
                  <h3>Report Policy Benefit</h3>
                  <p>
                    So it really behaves like neither. Now we have given up.{" "}
                  </p>
                  <a
                    className="btn_btm"
                    href="javascript:;"
                    onClick={() => window.scrollTo(500, 500)}
                  >
                    Learn More{" "}
                    <img src="/assets/img/arrow-right-line.png" alt="i" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ReportFraud;
