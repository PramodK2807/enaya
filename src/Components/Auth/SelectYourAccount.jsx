import React from "react";
import Layout from "../Layout/Layout";

const SelectYourAccount = () => {
  return (
    <Layout>
      <section
        className="auth_page"
        style={{ backgroundImage: "url(assets/img/cover1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="auth_page_content">
                <h1>Enter Required Information</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tristique arcu a nisi, semper. Ut cras odio ac sem ac.
                </p>
                <form className="form_desig row" action="#">
                  <div className="form-group col-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="National ID/Iqama ID"
                    />
                  </div>
                  <div className="form-group col-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Policy Number"
                    />
                  </div>
                  <div className="form-group col-12">
                    <button className="form_btns" type="submit">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-7 ps-5 d-lg-block d-md-none d-none">
              <div className="auto_logo">
                <img src="/assets/img/auth.png" alt />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright_auth">
          © 2021. - 2025 All Rights Reserved. Saudi Enaya
        </div>
      </section>
    </Layout>
  );
};

export default SelectYourAccount;
