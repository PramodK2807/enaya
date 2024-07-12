import React from "react";
import Layout from "./Layout/Layout";
import ProfileModal from "./Profile/ProfileModal";

const ClaimManagement = () => {
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
                    <img src="/assets/img/arrow-left1.png" alt='i' />
                  </a>
                  <h2>Claim Management</h2>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row claims_main align-items-center">
                <div className="col-md-6 mb-3">
                  <div className="result_found">5 results found</div>
                </div>
                <div className="col-md-6 mb-3 text-end">
                  <a href="javascript:;" className="filter_btn">
                    Filter <img src="/assets/img/filter.png" alt='i' />
                  </a>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="row claims_box">
                        <div className="col-md-8">
                          <div className="claims_left">
                            <div className="claims_txt1">LA0029030117</div>
                            <div className="claims_txt2">
                              Claim from Women’s Specialized Hospital
                            </div>
                            <div className="claims_schedule">
                              <span>Riyadh</span>
                              <span>02 Jan, 2024</span>
                              <span>16:44 PM</span>
                            </div>
                            <div className="actions_btns">
                              <a href="javascript:;">
                                <img src="/assets/img/view.png" alt='i' /> View
                              </a>
                              <a href="javascript:;">
                                <img src="/assets/img/download.png" alt='i' />{" "}
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-md-end mt-md-0 mt-3">
                          <div className="claims_status">Submitted</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="row claims_box">
                        <div className="col-md-8">
                          <div className="claims_left">
                            <div className="claims_txt1">LA0029030117</div>
                            <div className="claims_txt2">
                              Claim from Women’s Specialized Hospital
                            </div>
                            <div className="claims_schedule">
                              <span>Riyadh</span>
                              <span>02 Jan, 2024</span>
                              <span>16:44 PM</span>
                            </div>
                            <div className="actions_btns">
                              <a href="javascript:;">
                                <img src="/assets/img/view.png" alt='i' /> View
                              </a>
                              <a href="javascript:;">
                                <img src="/assets/img/download.png" alt='i' />{" "}
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-md-end mt-md-0 mt-3">
                          <div className="claims_status bg_status2">
                            Approved
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="row claims_box">
                        <div className="col-md-8">
                          <div className="claims_left">
                            <div className="claims_txt1">LA0029030117</div>
                            <div className="claims_txt2">
                              Claim from Women’s Specialized Hospital
                            </div>
                            <div className="claims_schedule">
                              <span>Riyadh</span>
                              <span>02 Jan, 2024</span>
                              <span>16:44 PM</span>
                            </div>
                            <div className="actions_btns">
                              <a href="javascript:;">
                                <img src="/assets/img/view.png" alt='i' /> View
                              </a>
                              <a href="javascript:;">
                                <img src="/assets/img/download.png" alt='i' />{" "}
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-md-end mt-md-0 mt-3">
                          <div className="claims_status bg_status3">
                            Rejected
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="row claims_box">
                        <div className="col-md-8">
                          <div className="claims_left">
                            <div className="claims_txt1">LA0029030117</div>
                            <div className="claims_txt2">
                              Claim from Women’s Specialized Hospital
                            </div>
                            <div className="claims_schedule">
                              <span>Riyadh</span>
                              <span>02 Jan, 2024</span>
                              <span>16:44 PM</span>
                            </div>
                            <div className="actions_btns">
                              <a href="javascript:;">
                                <img src="/assets/img/view.png" alt='i' /> View
                              </a>
                              <a href="javascript:;">
                                <img src="/assets/img/download.png" alt='i' />{" "}
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-md-end mt-md-0 mt-3">
                          <div className="claims_status bg_status3">
                            Rejected
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <a className="comman_btn1" href="javascript:;">
                        Claim Plus
                      </a>
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

export default ClaimManagement;
