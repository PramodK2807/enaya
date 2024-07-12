import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const Register = () => {
  const [step, setStep] = useState(1);
  return (
    <Layout>
      {step === 1 && (
        <section
          className="auth_page"
          style={{ backgroundImage: "url(assets/img/cover2.png)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="auth_page_content">
                  <h1>Register For Account</h1>
                  <form className="form_desig row" action="#">
                    <div className="form-group col-md-6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="National ID/Iqama ID"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Policy Number"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email ID"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Address"
                      />
                    </div>
                    <div className="form-group col-md-12 position-relative">
                      <input
                        className="form-control"
                        type="type"
                        placeholder="Password"
                      />
                      <button type="submit" className="eyebtn">
                        <img src="/assets/img/eye.png" alt="i" />
                      </button>
                    </div>
                    <div className="form-group col-md-12">
                      <div className="checkbox_main">
                        <input
                          className="d-none"
                          type="checkbox"
                          id="checkbox"
                          name="checkbox"
                        />
                        <label htmlFor="checkbox">
                          I agree to terms &amp; conditions
                        </label>
                      </div>
                    </div>
                    <div className="form-group col-md-12">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="form_btns"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="successfully_page">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="successfully_message">
                  <img src="/assets/img/success.svg" alt="i" />
                  <h1>Account created successfully!</h1>
                  <p>
                    Welcome aboard! Start your success journey with SimpleFlow!
                  </p>
                  <Link to="/login" className="form_btns">
                    Let’s Start
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright_auth">
            © 2021. - 2025 All Rights Reserved. Saudi Enaya
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Register;
