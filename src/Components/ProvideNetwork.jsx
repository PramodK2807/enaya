import React from "react";
import Layout from "./Layout/Layout";
import ProfileModal from "./Profile/ProfileModal";

const ProvideNetwork = () => {
  return (
    <Layout>
        <ProfileModal />
      <div className="policy_information pt-4 pb-md-5 pb-4">
        <div className="container pb-2">
          <div className="row">
            <div className="col-md-12 mb-lg-4 mb-md-3 mb-3">
              <div className="row info_head align-items-center mb-md-3">
                <div className="col d-flex align-items-center">
                  <a href="javascript:;">
                    <img src="/assets/img/arrow-left1.png" alt />
                  </a>
                  <h2>Services</h2>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-md-5 mb-4">
              <div className="row information_comman">
                <div className="col-md-9 mb-3">
                  <div className="infor_txt1">A+</div>
                </div>
                <div className="col-md-3 mb-md-3 mb-4 text-md-end text-center order_changed">
                  <div className="infor_logo">
                    <img src="/assets/img/whitelogo.png" alt />
                  </div>
                </div>
                <div className="col-lg-6 mb-lg-0 mb-md-4">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="infordetails">
                        <span>Member number</span>
                        <strong>123 1245 6789</strong>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="infordetails">
                        <span>National ID</span>
                        <strong>324 1245 6789</strong>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="infordetails">
                        <span>Date of Birth</span>
                        <strong>20-05-1997</strong>
                      </div>
                    </div>
                    <div className="col-md-4 mb-md-0 mb-3">
                      <div className="infordetails">
                        <span>Member Name</span>
                        <strong>Rahul Bhatt</strong>
                      </div>
                    </div>
                    <div className="col-md-4 mb-md-0 mb-3">
                      <div className="infordetails">
                        <span>Effective Date</span>
                        <strong>02-11-2024</strong>
                      </div>
                    </div>
                    <div className="col-md-4 mb-md-0 mb-3">
                      <div className="infordetails">
                        <span>Expiration Date</span>
                        <strong>02-11-2024</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row provider_networks">
                <div className="col-lg-3 col-md-6 mb-lg-0 mb-md-4 mb-md-3 d-flex align-items-stretch">
                  <div className="ouronline_box w-100">
                    <img src="/assets/img/claims.png" alt />
                    <h3>Claims</h3>
                    <p>
                      So it really behaves like neither. Now we have given up.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-lg-0 mb-md-4 mb-md-3 d-flex align-items-stretch">
                  <div className="ouronline_box w-100">
                    <img src="/assets/img/carbon_certificate-check.png" alt />
                    <h3>Policy Benefits</h3>
                    <p>They were used to create the machines that launched</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-lg-0 mb-md-4 mb-md-3 d-flex align-items-stretch">
                  <div className="ouronline_box w-100">
                    <img src="/assets/img/onlineservices.png" alt />
                    <h3>Policy Information</h3>
                    <p>
                      So it really behaves like neither. Now we have given up.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-lg-0 mb-md-4 mb-md-3 d-flex align-items-stretch">
                  <div className="ouronline_box w-100">
                    <img src="/assets/img/onlineservices.png" alt />
                    <h3>Provider Network</h3>
                    <p>
                      So it really behaves like neither. Now we have given up.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProvideNetwork;
