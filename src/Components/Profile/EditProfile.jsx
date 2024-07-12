import React from "react";
import Layout from "../Layout/Layout";
import ProfileModal from "./ProfileModal";

const EditProfile = () => {
  return (
    <Layout>
      <>
        <ProfileModal />
        <div className="claims_management pt-4 pb-md-5 pb-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-lg-4 mb-md-3 mb-3">
                <div className="row info_head align-items-center mb-md-3">
                  <div className="col d-flex align-items-center">
                    <a href="javascript:;">
                      <img src="/assets/img/arrow-left1.png" alt="i" />
                    </a>
                    <h2>Edit My Profile</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <form
                  action="#"
                  className="row form_desig justify-content-center"
                >
                  <div className="col-md-12">
                    <div className="row myprofile position-relative">
                      <div className="col-auto position-relative myprofile_main text-center">
                        <div className="myprofile_img">
                          <img src="/assets/img/img1.png" alt="i" />
                          <div className="edit_camera">
                            <img src="/assets/img/ph_camera.png" alt="i" />
                          </div>
                        </div>
                        <h3>Mohmmad Kazi</h3>
                        <span>+933 790 568 6609</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row myprofile_details">
                      <div className="form-group col-lg-3 col-md-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="National id"
                        />
                      </div>
                      <div className="form-group col-lg-3 col-md-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group col-lg-3 col-md-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Email Id"
                        />
                      </div>
                      <div className="form-group col-lg-3 col-md-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Address"
                        />
                      </div>
                      <div className="form-group col-lg-3 col-md-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="IBAN Number"
                        />
                      </div>
                      <div className="form-group col-lg-3 col-md-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Account Number"
                        />
                      </div>
                      <div className="form-group col-lg-3 col-md-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Bank Name"
                        />
                      </div>
                      <div className="form-group col-lg-3 col-md-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Bank Address"
                        />
                      </div>
                      <div className="form-group col-md-12 text-center mt-md-3">
                        <a href="javascript:;" className="form_btns">
                          Save Changes
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default EditProfile;
