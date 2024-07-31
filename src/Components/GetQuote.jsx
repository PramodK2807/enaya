import React from "react";
import Layout from "./Layout/Layout";

const GetQuote = () => {
  return (
    <Layout>
      <>
        <section className="common_banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6" data-aos="fade-right">
                <div className="common_img">
                  <img src="/assets/img/quote.png" alt="i" />
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="common_content">
                  <h2>
                    Feel Free <span>Reach</span> Us
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
              {/* <div className="col-md-12">
                <div className="comman_head text-center">
                  <h2>Request a quote (Form)</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur nunc nunc sit velit
                    eget sollicitudin sit posuere <br /> augue vestibulum eget
                    turpis lobortis donec sapien integer.
                  </p>
                </div>
              </div> */}
              <div className="col-md-12">
                <div className="row quote_main">
                  <div className="quote_head mb-md-5 mb-4">
                    <h2>Reach out directly?</h2>
                  </div>
                  <div className="col-lg-10">
                    <form className="row quote_form" action>
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
                        <select
                          className="form-select"
                          id="floatingSelect"
                          aria-label="Floating label select example"
                        >
                          <option value>Select City</option>
                          <option value="Abha">Abha</option>
                          <option value="Al-Ahsa">Al-Ahsa</option>
                          <option value="Al-Khobar">Al-Khobar</option>
                          <option value="Baha">Baha</option>
                          <option value="Dammam">Dammam</option>
                          <option value="Dhahran">Dhahran</option>
                          <option value="Hail">Hail</option>
                          <option value="Jeddah">Jeddah</option>
                          <option value="Jizan">Jizan</option>
                          <option value="Jouf">Jouf</option>
                          <option value="Jubail">Jubail</option>
                          <option value="Madinah">Madinah</option>
                          <option value="Makkah">Makkah</option>
                          <option value="Najran">Najran</option>
                          <option value="Qassem">Qassem</option>
                          <option value="Qatif">Qatif</option>
                          <option value="Riyadh">Riyadh</option>
                          <option value="Tabouk">Tabouk</option>
                          <option value="Taif">Taif</option>
                          <option value="Yanbu">Yanbu</option>
                        </select>
                      </div>
                      <div className="form-floating col-md-6 pe-lg-5">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Number of Employees"
                        />
                        <label htmlFor="floatingInput">
                          Number of Employees
                        </label>
                      </div>
                      <div className="form-floating col-md-6 pe-lg-5">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Contact Email*"
                        />
                        <label htmlFor="floatingInput">Contact Email*</label>
                      </div>
                      <div className="form-floating col-md-6 pe-lg-5">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Contact Number*"
                        />
                        <label htmlFor="floatingInput">Contact Number*</label>
                      </div>
                      <div className="col-md-12 form-group pe-md-5">
                        <button className="form_btns" type="submit">
                          Request Quotation
                        </button>
                      </div>
                    </form>
                  </div>
                  <img
                    className="bottom_logo"
                    src="/assets/img/overlay_logo.png"
                    alt="i"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="ouronline_services comman_padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="comman_head text-center">
                  <h2>Get Touch with Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur nunc nunc sit velit
                    eget sollicitudin sit posuere <br /> augue vestibulum eget
                    turpis lobortis donec sapien integer.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ouronline_box">
                  <img src="/assets/img/phone.png" alt="i" />
                  <h3>Phone Number</h3>
                  <p>
                    So it really behaves like neither. Now we have given up.{" "}
                  </p>
                  <a className="btn_btm" href="javascript:;">
                    Learn More{" "}
                    <img src="/assets/img/arrow-right-line.png" alt="i" />
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ouronline_box">
                  <img src="/assets/img/email.png" alt="i" />
                  <h3>Email id</h3>
                  <p>They were used to create the machines that launched</p>
                  <a className="btn_btm" href="javascript:;">
                    Learn More{" "}
                    <img src="/assets/img/arrow-right-line.png" alt="i" />
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ouronline_box">
                  <img src="/assets/img/office.png" alt="i" />
                  <h3>Office Address</h3>
                  <p>
                    So it really behaves like neither. Now we have given up.{" "}
                  </p>
                  <a className="btn_btm" href="javascript:;">
                    Learn More{" "}
                    <img src="/assets/img/arrow-right-line.png" alt="i" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </>
    </Layout>
  );
};

export default GetQuote;
