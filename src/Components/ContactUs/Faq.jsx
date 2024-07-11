import React from "react";
import Layout from "../Layout/Layout";

const Faq = () => {
  return (
    
    <Layout>
      <>
        <section className="common_banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6" data-aos="fade-right">
                <div className="common_img">
                  <img src="/assets/img/fraud.png" alt />
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="common_content">
                  <h2>
                    Frequently <span>Asked</span> Qestion
                  </h2>
                  <p>
                    Lorem Ipsum&nbsp;is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contentpages">
          <div className="container">
            <div className="row">
              <div className="col-md-3 ps-lg-5">
                <div
                  className="nav content_tabs flex-column nav-pills me-0"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Home
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Common Queries
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    General Question
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    Legal Information
                  </button>
                </div>
              </div>
              <div className="col-md-9">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="content_details">
                      <div className="faq">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                How does our pricing works ?
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <p>
                                  Objectively innovated empowered manufactured
                                  products where as parallel holisticly
                                  predominat extensible testing procedures
                                  reliable supply chains dramatically engage
                                  top-line web services vis-a-vis cutting-edge
                                  deliverables.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingtwo">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsetwo"
                                aria-expanded="true"
                                aria-controls="collapsetwo"
                              >
                                How does our pricing works ?
                              </button>
                            </h2>
                            <div
                              id="collapsetwo"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingtwo"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <p>
                                  Objectively innovated empowered manufactured
                                  products where as parallel holisticly
                                  predominat extensible testing procedures
                                  reliable supply chains dramatically engage
                                  top-line web services vis-a-vis cutting-edge
                                  deliverables.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingthree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsethree"
                                aria-expanded="true"
                                aria-controls="collapsethree"
                              >
                                Do You Offer Volume Or Loyalty Discounts?
                              </button>
                            </h2>
                            <div
                              id="collapsethree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingthree"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <p>
                                  Objectively innovated empowered manufactured
                                  products where as parallel holisticly
                                  predominat extensible testing procedures
                                  reliable supply chains dramatically engage
                                  top-line web services vis-a-vis cutting-edge
                                  deliverables.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingfour">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsefour"
                                aria-expanded="true"
                                aria-controls="collapsefour"
                              >
                                What Types Of Companies Do You Work With?
                              </button>
                            </h2>
                            <div
                              id="collapsefour"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingfour"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <p>
                                  Objectively innovated empowered manufactured
                                  products where as parallel holisticly
                                  predominat extensible testing procedures
                                  reliable supply chains dramatically engage
                                  top-line web services vis-a-vis cutting-edge
                                  deliverables.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="content_details">
                      <div className="faq">
                        <div className="accordion" id="accordionExample1">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                How does our pricing works ?
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample1"
                            >
                              <div className="accordion-body">
                                <p>
                                  Objectively innovated empowered manufactured
                                  products where as parallel holisticly
                                  predominat extensible testing procedures
                                  reliable supply chains dramatically engage
                                  top-line web services vis-a-vis cutting-edge
                                  deliverables.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingtwo">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsetwo"
                                aria-expanded="true"
                                aria-controls="collapsetwo"
                              >
                                How does our pricing works ?
                              </button>
                            </h2>
                            <div
                              id="collapsetwo"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingtwo"
                              data-bs-parent="#accordionExample1"
                            >
                              <div className="accordion-body">
                                <p>
                                  Objectively innovated empowered manufactured
                                  products where as parallel holisticly
                                  predominat extensible testing procedures
                                  reliable supply chains dramatically engage
                                  top-line web services vis-a-vis cutting-edge
                                  deliverables.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingthree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsethree"
                                aria-expanded="true"
                                aria-controls="collapsethree"
                              >
                                Do You Offer Volume Or Loyalty Discounts?
                              </button>
                            </h2>
                            <div
                              id="collapsethree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingthree"
                              data-bs-parent="#accordionExample1"
                            >
                              <div className="accordion-body">
                                <p>
                                  Objectively innovated empowered manufactured
                                  products where as parallel holisticly
                                  predominat extensible testing procedures
                                  reliable supply chains dramatically engage
                                  top-line web services vis-a-vis cutting-edge
                                  deliverables.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingfour">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsefour"
                                aria-expanded="true"
                                aria-controls="collapsefour"
                              >
                                What Types Of Companies Do You Work With?
                              </button>
                            </h2>
                            <div
                              id="collapsefour"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingfour"
                              data-bs-parent="#accordionExample1"
                            >
                              <div className="accordion-body">
                                <p>
                                  Objectively innovated empowered manufactured
                                  products where as parallel holisticly
                                  predominat extensible testing procedures
                                  reliable supply chains dramatically engage
                                  top-line web services vis-a-vis cutting-edge
                                  deliverables.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div className="content_details">
                      <div className="faq">
                        <div className="accordion" id="accordionExample2">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                How does our pricing works ?
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample2"
                            >
                              <div className="accordion-body">
                                <p>
                                  Objectively innovated empowered manufactured
                                  products where as parallel holisticly
                                  predominat extensible testing procedures
                                  reliable supply chains dramatically engage
                                  top-line web services vis-a-vis cutting-edge
                                  deliverables.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingtwo">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsetwo"
                                aria-expanded="true"
                                aria-controls="collapsetwo"
                              >
                                How does our pricing works ?
                              </button>
                            </h2>
                            <div
                              id="collapsetwo"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingtwo"
                              data-bs-parent="#accordionExample2"
                            >
                              <div className="accordion-body">
                                <p>
                                  Objectively innovated empowered manufactured
                                  products where as parallel holisticly
                                  predominat extensible testing procedures
                                  reliable supply chains dramatically engage
                                  top-line web services vis-a-vis cutting-edge
                                  deliverables.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingthree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsethree"
                                aria-expanded="true"
                                aria-controls="collapsethree"
                              >
                                Do You Offer Volume Or Loyalty Discounts?
                              </button>
                            </h2>
                            <div
                              id="collapsethree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingthree"
                              data-bs-parent="#accordionExample2"
                            >
                              <div className="accordion-body">
                                <p>
                                  Objectively innovated empowered manufactured
                                  products where as parallel holisticly
                                  predominat extensible testing procedures
                                  reliable supply chains dramatically engage
                                  top-line web services vis-a-vis cutting-edge
                                  deliverables.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingfour">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsefour"
                                aria-expanded="true"
                                aria-controls="collapsefour"
                              >
                                What Types Of Companies Do You Work With?
                              </button>
                            </h2>
                            <div
                              id="collapsefour"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingfour"
                              data-bs-parent="#accordionExample2"
                            >
                              <div className="accordion-body">
                                <p>
                                  Objectively innovated empowered manufactured
                                  products where as parallel holisticly
                                  predominat extensible testing procedures
                                  reliable supply chains dramatically engage
                                  top-line web services vis-a-vis cutting-edge
                                  deliverables.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <div className="content_details">
                      <div className="faq">
                        <div className="accordion" id="accordionExample3">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                How does our pricing works ?
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample3"
                            >
                              <div className="accordion-body">
                                <p>
                                  Objectively innovated empowered manufactured
                                  products where as parallel holisticly
                                  predominat extensible testing procedures
                                  reliable supply chains dramatically engage
                                  top-line web services vis-a-vis cutting-edge
                                  deliverables.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingtwo">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsetwo"
                                aria-expanded="true"
                                aria-controls="collapsetwo"
                              >
                                How does our pricing works ?
                              </button>
                            </h2>
                            <div
                              id="collapsetwo"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingtwo"
                              data-bs-parent="#accordionExample3"
                            >
                              <div className="accordion-body">
                                <p>
                                  Objectively innovated empowered manufactured
                                  products where as parallel holisticly
                                  predominat extensible testing procedures
                                  reliable supply chains dramatically engage
                                  top-line web services vis-a-vis cutting-edge
                                  deliverables.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingthree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsethree"
                                aria-expanded="true"
                                aria-controls="collapsethree"
                              >
                                Do You Offer Volume Or Loyalty Discounts?
                              </button>
                            </h2>
                            <div
                              id="collapsethree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingthree"
                              data-bs-parent="#accordionExample3"
                            >
                              <div className="accordion-body">
                                <p>
                                  Objectively innovated empowered manufactured
                                  products where as parallel holisticly
                                  predominat extensible testing procedures
                                  reliable supply chains dramatically engage
                                  top-line web services vis-a-vis cutting-edge
                                  deliverables.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingfour">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsefour"
                                aria-expanded="true"
                                aria-controls="collapsefour"
                              >
                                What Types Of Companies Do You Work With?
                              </button>
                            </h2>
                            <div
                              id="collapsefour"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingfour"
                              data-bs-parent="#accordionExample3"
                            >
                              <div className="accordion-body">
                                <p>
                                  Objectively innovated empowered manufactured
                                  products where as parallel holisticly
                                  predominat extensible testing procedures
                                  reliable supply chains dramatically engage
                                  top-line web services vis-a-vis cutting-edge
                                  deliverables.
                                </p>
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
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Faq;
