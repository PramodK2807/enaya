import React from "react";
import Layout from "./Layout/Layout";
import ProfileModal from "./Profile/ProfileModal";

const NewClaim = () => {
  return (
    <Layout>
      <ProfileModal />
      <div className="claims_management pt-4 pb-md-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-lg-4 mb-md-3 mb-3">
              <div className="row info_head align-items-center mb-md-3">
                <div className="col d-flex align-items-center">
                  <a href="javascript:;">
                    <img src="/assets/img/arrow-left1.png" alt />
                  </a>
                  <h2>New Claim</h2>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row new_claim align-items-center">
                <div className="col-12 mb-4">
                  <div className="newclaim_p">
                    We'll need some basic information. Could you please provide
                    the following details
                  </div>
                </div>
                <div className="col-md-12">
                  <form className="form_desig row" action="#">
                    <div className="col-lg-4 col-md-6 form-group mb-3">
                      <input
                        className="form-control"
                        type="text"
                        name
                        id
                        placeholder="Service Provider Name"
                      />
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mb-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Patient Type</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mb-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Relationship</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mb-3">
                      <input
                        className="form-control"
                        type="text"
                        name
                        id
                        placeholder="Amount Being Claimed"
                      />
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mb-3 position-relative edit_field">
                      <input
                        className="form-control"
                        type="text"
                        name
                        id
                        placeholder="IBAN Number"
                      />
                      <button type="submit">
                        <img src="/assets/img/editt.png" alt />
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mb-3 position-relative edit_field">
                      <input
                        className="form-control"
                        type="text"
                        name
                        id
                        placeholder="Account Number"
                      />
                      <button type="submit">
                        <img src="/assets/img/editt.png" alt />
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mb-3 position-relative edit_field">
                      <input
                        className="form-control"
                        type="text"
                        name
                        id
                        placeholder="Account Holder Name"
                      />
                      <button type="submit">
                        <img src="/assets/img/editt.png" alt />
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mb-3 position-relative edit_field">
                      <input
                        className="form-control"
                        type="text"
                        name
                        id
                        placeholder="Bank Name"
                      />
                      <button type="submit">
                        <img src="/assets/img/editt.png" alt />
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mb-3 position-relative edit_field">
                      <input
                        className="form-control"
                        type="text"
                        name
                        id
                        placeholder="Address"
                      />
                      <button type="submit">
                        <img src="/assets/img/editt.png" alt />
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mb-3 mt-2 position-relative">
                      <div className="row">
                        <div className="col-auto">
                          <img
                            className="pdfupload"
                            src="assets/img/PDF.png"
                            alt
                          />
                        </div>
                        <div className="col px-0">
                          <div className="pdfupload_box">
                            <label htmlFor="file">File Title.pdf</label>
                            <div className="progress_main">
                              <progress id value={100} max={100}>
                                {" "}
                                32%{" "}
                              </progress>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <img className="cut" src="assets/img/cut.png" alt />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mb-3 mt-2 position-relative file_upload">
                      <input
                        className="form-control d-none"
                        type="file"
                        name="v"
                        id="v"
                        placeholder="Address"
                      />
                      <label htmlFor="v">
                        <img src="/assets/img/attech.png" alt />
                        Attach a File
                      </label>
                    </div>
                    <div className="form-group col-md-12 mb-lg-4 mb-md-3 mb-3 text-center mt-md-3 mt-2">
                      <div className="checkbox_main">
                        <input
                          className="d-none"
                          type="checkbox"
                          id="checkbox"
                          name="checkbox"
                        />
                        <label htmlFor="checkbox">
                          I confirm that all the information provided is correct
                          and accurate.
                        </label>
                      </div>
                    </div>
                    <div className="form-group col-md-12 text-center">
                      <a href="javascript:;" className="form_btns mt-2">
                        Submit
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewClaim;
