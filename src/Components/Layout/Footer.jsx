import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-lg-0 mb-md-5 mb-4">
            <div className="footer_about">
              <a className="logo_footer" href="javascript:;">
                <img src="/assets/img/logo.png" alt />
              </a>
              <p>
                Saudi Enaya Cooperative Insurance Company, A Joint Stock Company
                With A Capital Of SR 230,000,000.
              </p>
              <div className="social_iconss">
                {/* <a href="javascript:;"><img src="/assets/img/Facebook.png" alt=""></a> */}
                <a target="_blank" href="https://x.com/SaudiEnayaCo?mx=2">
                  <img src="/assets/img/Twitter.png" alt />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/saudienayaco/"
                >
                  <img src="/assets/img/Instagram.png" alt />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/saudienayaco"
                >
                  <img src="/assets/img/LinkedIn.png" alt />
                </a>
                {/* <a href="javascript:;"><img src="/assets/img/YouTube.png" alt=""></a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-lg-0 mb-md-5 mb-4">
            <div className="footer_links">
              <h3>Contact Us</h3>
              <a href="javascript:;" className="footer_details mb-3">
                <span>
                  <img src="/assets/img/mail-open-fill.svg" alt />
                </span>{" "}
                <div>info@saudienaya.com</div>
              </a>
              <a href="javascript:;" className="footer_details  mb-3">
                <span>
                  <img src="/assets/img/map-pin-fill.svg" alt />
                </span>{" "}
                <div>
                  3730 Prince Saud Al Faisal, Al Khalidiyah District, Jeddah
                  23423
                </div>
              </a>
              <a href="javascript:;" className="footer_details  mb-3">
                <span>
                  <img src="/assets/img/map-pin-fill.svg" alt />
                </span>{" "}
                <div>7387 Thumamah Road, Ar Rabi, Riyadh 13315 </div>
              </a>
              <div className="working_hours mt-3">
                <strong>Working Hours</strong>
                <span>8:00 am to 5:00 pm</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-lg-0 mb-md-5 mb-4 d-lg-flex justify-content-lg-center">
            <div className="footer_links">
              <h3>Services</h3>
              <div className="mainlinks">
                <a href="javascrpt:;">Broker Portal</a>
                <a href="javascript:;">Endorsement Portal</a>
                <a href="javascript:;">Mobile App</a>
                <a href="javascript:;">Visa Insurance</a>
                <a href="javascript:;">Print Insurance Certificate</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer_links">
              <h3>Download our app</h3>
              <div className="appdownload_btn">
                <a href="javascript:;">
                  <img src="/assets/img/google-play.svg" alt />
                </a>
                <a href="javascript:;">
                  <img src="/assets/img/app-store.svg" alt />
                </a>
              </div>
              <div className="ourexpert">
                <div className="experticon">
                  <img src="/assets/img/customer-service-fill.svg" alt />
                </div>
                <div className="expert_details mt-2">
                  <a href="tel:800 30 100 30">800 30 100 30</a>
                  <span>Call our Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy_right">
          <div className="copytext">
            Copyright © 2024 saudi enaya | All Rights Reserved |
          </div>
          <div className="copy_links">
            <a href="terms-and-conditions.html">Terms and Conditions</a>
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="disclaimer.html">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
