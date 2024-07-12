import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import ProfileModal from "./ProfileModal";

const MyProfile = () => {
  return (
    <Layout>
      <>
        <ProfileModal />
        <div className="claims_management pt-4 pb-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-lg-4 mb-md-3 mb-3">
                <div className="row info_head align-items-center mb-md-3">
                  <div className="col d-flex align-items-center">
                    <a href="javascript:;">
                      <img src="/assets/img/arrow-left1.png" alt="i" />
                    </a>
                    <h2>My Profile</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="row myprofile position-relative">
                      <Link className="editbtn" to="/edit-profile">
                        Edit
                      </Link>
                      <div className="col-auto position-relative myprofile_main text-center">
                        <div className="myprofile_img">
                          <img src="/assets/img/img1.png" alt="i" />
                        </div>
                        <h3>Mohmmad Kazi</h3>
                        <span>+933 790 568 6609</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-10">
                    <div className="row myprofile_details">
                      <div className="col-lg-2 col-md-3 mb-md-5 mb-md-4 mb-4">
                        <div className="myprofile_text">
                          <span>National Id</span>
                          <strong>9089 90900</strong>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 mb-md-5 mb-md-4 mb-4">
                        <div className="myprofile_text">
                          <span>Password</span>
                          <strong>123456789</strong>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-md-5 mb-md-4 mb-4">
                        <div className="myprofile_text">
                          <span>Email Id</span>
                          <strong>Mohmmadkazi @gmail.com</strong>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-md-5 mb-md-4 mb-4">
                        <div className="myprofile_text">
                          <span>Address</span>
                          <strong>123 Street Saudi Arabia</strong>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-md-5 mb-md-4 mb-4">
                        <div className="myprofile_text">
                          <span>IBAN Number</span>
                          <strong>SA03 8000 0000 6080 1016 7519</strong>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 mb-md-5 mb-md-4 mb-4">
                        <div className="myprofile_text">
                          <span>Account Number</span>
                          <strong>000000608010167519</strong>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 mb-md-5 mb-md-4 mb-4">
                        <div className="myprofile_text">
                          <span>Bank Name</span>
                          <strong>Saudi National Bank </strong>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 mb-md-5 mb-md-4 mb-4">
                        <div className="myprofile_text">
                          <span>Bank Address</span>
                          <strong>Riyadh, Saudi Arabia</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default MyProfile;
