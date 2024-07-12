import React from "react";
import Layout from "../Layout/Layout";
import ProfileModal from "./ProfileModal";

const PolicyInfo = () => {
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
                  <h2>Our Online Services</h2>
                </div>
                <div className="col-auto">
                  <a className="downloadpdf" href="javascript:;">
                    <img src="/assets/img/Import.png" alt />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12 mb-md-5 mb-4">
              <div className="row information_comman">
                <div className="col-md-9 mb-3">
                  <div className="infor_txt1">VIP</div>
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
                        <span>Insurance number</span>
                        <strong>123 1245 6789</strong>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="infordetails">
                        <span>Date of Birth</span>
                        <strong>20-05-1997</strong>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3 d-md-block d-none"></div>
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
                <div className="col-lg-6 d-flex align-items-end justify-content-end">
                  <a className="reload_btn" href="javascript:;">
                    <img src="/assets/img/reload.png" alt />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="whats_covered">
                <h3>What’s Covered?</h3>
                <ul>
                  <li>
                    <p>Restore benefit for sum insured</p>
                  </li>
                  <li>
                    <p>Sub-limits (if any) and Waiting Period (for PEDs)</p>
                  </li>
                  <li>
                    <p>Bariatric surgery cover</p>
                  </li>
                  <li>
                    <p>New born baby and vaccine cover</p>
                  </li>
                  <li>
                    <p>Pre-existing disease cover</p>
                  </li>
                  <li>
                    <p>Pre-existing disease cover</p>
                  </li>
                  <li>
                    <p>24x7 video/telephone consultation</p>
                  </li>
                  <li>
                    <p>
                      Policy premium to be paid to avail the coverage benefits
                    </p>
                  </li>
                  <li>
                    <p>Domiciliary hospitalization</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PolicyInfo;
