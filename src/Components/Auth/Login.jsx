import React from "react";
import Layout from "../Layout/Layout";

const Login = () => {
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
                <h1>Welcome Back</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tristique arcu a nisi, semper. Ut cras odio ac sem ac.
                </p>
                <form className="form_desig row" action="#">
                  <div className="form-group col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="National ID"
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
                  <div className="form-group col-md-12 position-relative">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#forgotpassword"
                      className="forgotpassword"
                      href="javascript:;"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="form-group col-md-12">
                    <button className="form_btns" type="submit">
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-7 ps-5 d-lg-block d-md-none d-none">
              <div className="auto_logo">
                <img src="/assets/img/auth.png" alt="i" />
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

export default Login;
