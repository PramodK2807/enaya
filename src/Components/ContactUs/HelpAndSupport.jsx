import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const HelpAndSupport = () => {
  return (
    <Layout>
      <div className="claims_management pt-4 pb-md-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-lg-4 mb-md-3 mb-3">
              <div className="row info_head align-items-center mb-md-3">
                <div className="col d-flex align-items-center">
                  <Link>
                    <img src="/assets/img/arrow-left1.png" alt="i" />
                  </Link>
                  <h2>Help &amp; Support</h2>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-lg-3">
              <form action="#" className="row form_desig">
                <div className="form-floating col-lg-3 col-md-4">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Full Name"
                  />
                  <label htmlFor="floatingInput">Full Name</label>
                </div>
                <div className="form-floating col-lg-3 col-md-4 edit_field">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="E-Mail"
                  />
                  <button type="submit">
                    <img src="assets/img/editt.png" alt />
                  </button>
                  <label htmlFor="floatingInput">E-Mail</label>
                </div>
                <div className="form-floating col-lg-3 col-md-4 edit_field">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Phone Number"
                  />
                  <label htmlFor="floatingInput">Phone Number</label>
                  <button type="submit">
                    <img src="assets/img/editt.png" alt />
                  </button>
                </div>
                <div className="form-floating col-lg-3 col-md-4">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="ID Number"
                  />
                  <label htmlFor="floatingInput">ID Number</label>
                </div>
                <div className="form-floating col-lg-3 col-md-4">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Member Number"
                  />
                  <label htmlFor="floatingInput">Member Number</label>
                </div>
                <div className="form-floating col-lg-3 col-md-4">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected>Family’s Members</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="form-floating col-lg-9 col-md-6">
                  <textarea
                    className="form-control"
                    style={{ height: 100 }}
                    name
                    id
                    defaultValue={""}
                  />
                  <label htmlFor="floatingInput">Type your note here...</label>
                </div>
                <div className="form-group col-lg-3 col-md-6 position-relative file_upload">
                  <input
                    className="form-control d-none"
                    type="file"
                    name="v"
                    id="v"
                    placeholder="Address"
                  />
                  <label htmlFor="v">
                    <img src="assets/img/attech.png" alt />
                    Attach a File
                  </label>
                </div>
                <div className="form-group col-md-12 text-center mt-md-3">
                  <a href="javascript:;" className="form_btns">
                    Submit
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HelpAndSupport;
