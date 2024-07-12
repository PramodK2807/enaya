import React from "react";
import Layout from "../Layout/Layout";
import ProfileModal from "./ProfileModal";

const MyPolicyBenefits = () => {
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
                    <img src="/assets/img/arrow-left1.png" alt="i" />
                  </a>
                  <h2>My Policy Benefit</h2>
                </div>
                <div className="col-auto">
                  <a className="downloadpdf" href="javascript:;">
                    <img src="/assets/img/Import.png" alt="i" />
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
                    <img src="/assets/img/whitelogo.png" alt="i" />
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
                    <img src="/assets/img/reload.png" alt="i" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="whats_covered">
                <h3>My Benefits</h3>
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-lg-0 mb-md-3 mb-3">
                    <div className="Benefits_boxx">
                      <div className="Benefits_inner">
                        <div className="Benefits_text">
                          Single Private AC Room
                        </div>
                        <div className="Benefits_mark">
                          <img src="/assets/img/tickmark.png" alt="i" />
                        </div>
                      </div>
                      <div className="Benefits_inner">
                        <div className="Benefits_text">
                          Offers cashless treatment
                        </div>
                        <div className="Benefits_mark">
                          <img src="/assets/img/tickmark.png" alt="i" />
                        </div>
                      </div>
                      <div className="Benefits_inner">
                        <div className="Benefits_text">
                          Covers annual health check-ups
                        </div>
                        <div className="Benefits_mark">
                          <img src="/assets/img/tickmark.png" alt="i" />
                        </div>
                      </div>
                      <div className="Benefits_inner">
                        <div className="Benefits_text">
                          Covers hospitalization expenses
                        </div>
                        <div className="Benefits_mark">
                          <img src="/assets/img/cross.png" alt="i" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-lg-0 mb-md-3 mb-3">
                    <div className="Benefits_boxx">
                      <div className="Benefits_inner">
                        <div className="Benefits_text">
                          Covers daycare procedures
                        </div>
                        <div className="Benefits_mark">
                          <img src="/assets/img/tickmark.png" alt="i" />
                        </div>
                      </div>
                      <div className="Benefits_inner">
                        <div className="Benefits_text">
                          Reimburses ambulance charges
                        </div>
                        <div className="Benefits_mark">
                          <img src="/assets/img/tickmark.png" alt="i" />
                        </div>
                      </div>
                      <div className="Benefits_inner">
                        <div className="Benefits_text">
                          Covers pre-and post-hospitalisation
                        </div>
                        <div className="Benefits_mark">
                          <img src="/assets/img/cross.png" alt="i" />
                        </div>
                      </div>
                      <div className="Benefits_inner">
                        <div className="Benefits_text">
                          Covers domiciliary treatments
                        </div>
                        <div className="Benefits_mark">
                          <img src="/assets/img/tickmark.png" alt="i" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="Benefits_boxx">
                      <div className="Benefits_inner">
                        <div className="Benefits_text">
                          Offers add-on cover for critical illnesses
                        </div>
                        <div className="Benefits_mark">
                          <img src="/assets/img/tickmark.png" alt="i" />
                        </div>
                      </div>
                      <div className="Benefits_inner">
                        <div className="Benefits_text">
                          Covers domiciliary treatments
                        </div>
                        <div className="Benefits_mark">
                          <img src="/assets/img/cross.png" alt="i" />
                        </div>
                      </div>
                      <div className="Benefits_inner">
                        <div className="Benefits_text">
                          Offers add-on cover for critical illnesses
                        </div>
                        <div className="Benefits_mark">
                          <img src="/assets/img/tickmark.png" alt="i" />
                        </div>
                      </div>
                    </div>
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

export default MyPolicyBenefits;
