import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header_main">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <Link className="logo" to="/">
              <img src="/assets/img/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="col d-lg-flex d-md-none d-none justify-content-lg-end align-items-center">
            <div className="header_menus">
              <ul className="outter_ul">
                <li className="menus_li">
                  <Link className="menus_link" to={"/"}>
                    <div className="menus_icon">
                      <img src="/assets/img/icon_1.png" alt />
                    </div>
                    <span>Home</span>
                  </Link>
                </li>
                <li className="menus_li dropdown_only">
                  <a className="menus_link" href="javscript:;">
                    <div className="menus_icon">
                      <img src="/assets/img/icon_2.png" alt />
                    </div>
                    <span> Our Products</span>
                    <div className="arroww_icon">
                      <img src="/assets/img/down.png" alt />
                    </div>
                  </a>
                  <div className="mega_dropdown">
                    <div className="mega_dropdown_inner">
                      <div className="row">
                        <div className="col-12">
                          <div className="megadropdown_menus">
                            <a href="javascript:;">Individual </a>
                            <div className="Productsmenu">
                              <div className="megadropdown_menus">
                                <a href="javascript:;">Visit Visa</a>
                                <a href="javascript:;">Tourist Visa</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="megadropdown_menus">
                            <a href="javascript:;">Business </a>
                            <div className="Productsmenu">
                              <div className="megadropdown_menus">
                                <a href="javascript:;">SME</a>
                                <a href="javascript:;">Corporate</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menus_li dropdown_only">
                  <a className="menus_link" href="javscript:;">
                    <div className="menus_icon">
                      <img src="/assets/img/icon_3.png" alt />
                    </div>
                    <span> Our Services</span>
                    <div className="arroww_icon">
                      <img src="/assets/img/down.png" alt />
                    </div>
                  </a>
                  <div className="mega_dropdown">
                    <div className="mega_dropdown_inner">
                      <div className="row ">
                        <div className="col-12">
                          <div className="megadropdown_menus">
                            <Link to="/our-services/broker-portal">
                              Broker Portal
                            </Link>
                            <Link to="/our-services/endorsement-portal">
                              Endorsement Portal
                            </Link>
                            <Link to="/our-services/mobile-app">
                              Mobile App
                            </Link>
                            <Link to="/our-services/visit-visa-extension">
                              Visa Insurance
                            </Link>
                            <a href="javascript:;">
                              Print Insurance Certificate
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menus_li">
                  <Link className="menus_link" to="/investor-relation">
                    <div className="menus_icon">
                      <img src="/assets/img/icon_4.png" alt="i" />
                    </div>
                    <span> Investor Relation</span>
                  </Link>
                </li>
                <li className="menus_li dropdown_only">
                  <a className="menus_link" href="javscript:;">
                    <div className="menus_icon">
                      <img src="/assets/img/icon_5.png" alt />
                    </div>
                    <span> Contact Us</span>
                    <div className="arroww_icon">
                      <img src="/assets/img/down.png" alt />
                    </div>
                  </a>
                  <div className="mega_dropdown">
                    <div className="mega_dropdown_inner">
                      <div className="row ">
                        <div className="col-12">
                          <div className="megadropdown_menus">
                            <a href="javascript:;">
                              Make an Inquiry &amp; Complaint
                            </a>
                            <Link to="/contact-us/report-fraud">
                              Report Fraud and Abuse
                            </Link>
                            <Link to="/contact-us/faq">FAQ</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menus_li">
                  <Link className="menus_link" to="/about-us">
                    <div className="menus_icon">
                      <img src="/assets/img/icon_6.png" alt />
                    </div>
                    <span> About us</span>
                  </Link>
                </li>
              </ul>
            </div>
            <a className="Add_Claims" href="javascript:;">
              Add Claims
            </a>
          </div>
          <div className="col-auto d-lg-none d-md-block d-block">
            <div className="mobile_menuss">
              <a className="Add_Claims" href="javascript:;">
                Add Claims
              </a>
              <a
                className="btn btn-primary"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <img src="/assets/img/menu-3-line.png" alt />
              </a>
              <div
                className="offcanvas offcanvas-start"
                tabIndex={-1}
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                    <img src="/assets/img/logo.svg" alt />
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body">
                  <div className="mobilemenus_inner">
                    <div className="mobilemenus_box">
                      <Link className="mobile_link" to="/">
                        Home
                      </Link>
                    </div>
                    <div className="mobilemenus_box">
                      <a className="mobile_link droparrow" href="javscript:;">
                        Our Products
                      </a>
                      <div className="menus_boxinner">
                        <ul className="menus_ul">
                          <li>
                            <a href="javascript:;">Visit Visa</a>
                          </li>
                          <li>
                            <a href="javascript:;">Tourist Visa</a>
                          </li>
                          <li>
                            <a href="smeplan.html">SME </a>
                          </li>
                          <li>
                            <a href="corporate-plan.html">Corporate </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mobilemenus_box">
                      <a className="mobile_link droparrow" href="javscript:;">
                        Our Services
                      </a>
                      <div className="menus_boxinner">
                        <ul className="menus_ul">
                          <li>
                            <a href="javascript:;">Broker Portal</a>
                          </li>
                          <li>
                            <a href="javascript:;">Endorsement Portal</a>
                          </li>
                          <li>
                            <a href="javascript:;">Mobile App</a>
                          </li>
                          <li>
                            <a href="javascript:;">Visa Insurance</a>
                          </li>
                          <li>
                            <a href="javascript:;">
                              Print Insurance Certificate
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mobilemenus_box">
                      <a className="mobile_link" href="investor-relations.html">
                        Investor Relation
                      </a>
                    </div>
                    <div className="mobilemenus_box">
                      <a className="mobile_link droparrow" href="javscript:;">
                        Contact Us
                      </a>
                      <div className="menus_boxinner">
                        <ul className="menus_ul">
                          <li>
                            <a href="javascript:;">
                              Make an Inquiry &amp; Complaint
                            </a>
                          </li>
                          <li>
                            <a href="report-fraud.html">
                              Report Fraud and Abuse
                            </a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mobilemenus_box">
                      <a className="mobile_link" href="javscript:;">
                        About Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
